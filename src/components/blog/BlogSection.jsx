import React from 'react';

import blogImg1 from '../../assets/blog-img-1.avif';
import blogImg2 from '../../assets/blog-img-2.avif';
import blogImg3 from '../../assets/blog-img-3.avif';
import blogImg4 from '../../assets/blog-img-4.avif';
import Chip from '../ui/Chip';
import GradientText from '../ui/GradientText';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const blogs = [
    {
      image: blogImg1,
      category: 'Article',
      title:
        'The Future of AI Automation: How It’s Changing Business Operations',
    },
    {
      image: blogImg2,
      category: 'Resources',
      title: '5 Must-Have AI Tools to Streamline Your Business Tasks',
    },
    {
      image: blogImg3,
      category: 'Article',
      title: 'AI vs. Manual Work: Which One Saves More Time & Money?',
    },
    {
      image: blogImg4,
      category: 'Article',
      title: 'How AI is Transforming Workflow Automation for Businesses',
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-24">
      <div className="w-full flex flex-col items-center justify-center gap-7">
        <Chip text=" Blog" />
        {/* Gradient Heading & subheading*/}
        <GradientText
          title="Unlock AI Insights with Us "
          subheading="Stay informed with the latest AI trends, insights, and strategies to drive innovation and business growth."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl pt-14 mx-auto">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            {...blog}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
