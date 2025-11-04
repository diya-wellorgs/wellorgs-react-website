import React, { useState } from 'react';

import Chip from '../components/ui/Chip';
import GradientText from '../components/ui/GradientText';
import { Input } from '../components/ui/Input';

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    team: '',
    coverLetter: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-4 py-16 pt-45">
      {/* Header */}
      <div className="w-full flex flex-col pb-20 items-center justify-center gap-7">
        <Chip text="Careers" />
        <GradientText
          title="Want to be a part of the team?"
          subheading="Dream Big, Work Bold: Apply now"
        />
      </div>

      {/* Form */}
      <div className="w-full max-w-[700px]">
        <form
          onSubmit={handleSubmit}
          className="bg-[#0d0d0dcc] border border-neutral-800 rounded-xl p-6 flex flex-col gap-4"
        >
          {/* Personal Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="Jane Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="phone"
              label="Phone number"
              placeholder="+1 234 567 890"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              type="url"
              name="linkedin"
              label="LinkedIn URL"
              placeholder="https://linkedin.com/in/janedoe"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>

          {/* Team Selection */}
          <div>
            <p className="block text-sm mb-3">
              Select the Team You'd Like to Join:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Project Management Team',
                'Development Team',
                'Design Team',
                'Customer Support Team',
                'Quality Assurance Team',
                'Marketing Team',
              ].map((team) => (
                <label
                  key={team}
                  className={`flex items-center gap-2 border border-neutral-800 rounded-md py-3 px-4 cursor-pointer transition 
                    ${formData.team === team ? 'bg-tertiary/20 border-tertiary' : 'hover:border-tertiary/50'}`}
                >
                  <input
                    type="radio"
                    name="team"
                    value={team}
                    checked={formData.team === team}
                    onChange={handleChange}
                    className="accent-tertiary"
                  />
                  {team}
                </label>
              ))}
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm mb-3">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="5"
              className="w-full border border-neutral-800 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent"
              placeholder="Write your cover letter here..."
            />
          </div>

          {/* Resume Upload */}
          <div className="flex flex-col gap-2">
            <label className="block text-sm">Upload Resume</label>
            <div className="flex items-center gap-3 border border-neutral-800 rounded-full px-4 py-2">
              <label
                htmlFor="resume"
                className="bg-tertiary px-4 py-2 rounded-full text-sm font-medium cursor-pointer flex items-center gap-2"
              >
                <span> Upload</span>
              </label>
              <input
                id="resume"
                type="file"
                name="resume"
                accept=".pdf,.jpg,.png,.doc,.docx"
                className="hidden"
                onChange={handleChange}
              />
              <span className="text-neutral-400 text-sm truncate">
                {formData.resume ? formData.resume.name : 'No file chosen'}
              </span>
            </div>
            <p className="text-xs text-neutral-500">
              *Upload your Resume in pdf, jpg, png, or doc format.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-tertiary text-white font-medium py-2 rounded-md mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
