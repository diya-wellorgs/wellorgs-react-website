const sharp = require('sharp');
const fs = require('fs').promises; // Use the 'promises' version of fs
const path = require('path');

// --- Configuration ---
// Get the directory where the script is run from
const baseDir = __dirname;

// Set the names for your input and output folders
const inputDir = path.join(baseDir, 'src', 'assets');
const outputDir = path.join(baseDir, 'cropped'); // User asked for 'croped', using 'cropped'
// --- End Configuration ---

async function processImages() {
  console.log('Starting image processing...');

  try {
    // 1. Ensure the output directory exists
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`Output directory created/ensured at: ${outputDir}`);

    // 2. Read all files from the input directory
    const files = await fs.readdir(inputDir);

    if (files.length === 0) {
      console.log(`No files found in ${inputDir}. Exiting.`);
      return;
    }

    console.log(`Found ${files.length} files. Starting processing...`);

    // 3. Create a list of processing tasks
    const processingTasks = files
      // Filter out non-image files (simple check)
      .filter((file) => file.match(/\.(png|jpg|jpeg|webp)$/i))
      .map(async (file) => {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);

        try {
          // 4. Use sharp to process the image
          await sharp(inputPath)
            .trim() // <-- THIS IS THE MAGIC!
            .toFile(outputPath);

          console.log(`  [SUCCESS] Cropped ${file} -> ${outputPath}`);
        } catch (err) {
          console.error(
            `  [FAILED] Could not process ${file}. Error: ${err.message}`,
          );
        }
      });

    // 5. Wait for all images to be processed
    await Promise.all(processingTasks);

    console.log('--------------------');
    console.log('All images processed successfully!');
  } catch (err) {
    console.error(`An error occurred: ${err.message}`);
  }
}

// Run the function
processImages();
