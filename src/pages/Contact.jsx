import React, { useState } from 'react';

import Chip from '../components/ui/Chip';
import GradientText from '../components/ui/GradientText';
import { Input } from '../components/ui/Input';
import { MailIcon } from '../icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: '',
    agreeNewsletter: false,
    agreePolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-4 py-16 pt-45">
      <div className="w-full flex flex-col pb-20 items-center justify-center gap-7">
        <Chip text="  Contact" />
        {/* Gradient Heading & subheading*/}
        <GradientText
          title=" Get in Touch with Us"
          subheading="Have questions or need AI solutions? Let us know by filling out the
          form, and we’ll be in touch!"
        />
      </div>

      {/* Email Card */}
      <div className="flex flex-col w-full max-w-[700px] items-start">
        <div className="contact-bg-gradient border border-neutral-800 rounded-lg p-4 flex flex-col items-start gap-3 mb-8 w-full max-w-xs">
          <div className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 text-white" />

            <p className="font-medium">E-mail</p>
          </div>
          <p className="">hr@wellorgs.com</p>
        </div>

        {/* Form */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-[#0d0d0dcc] border border-neutral-800 rounded-xl p-6  "
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleChange}
                  label="First Name"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Smith"
                  value={formData.lastName}
                  onChange={handleChange}
                  label="Last Name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="jane.smith@example.com"
                  onChange={handleChange}
                  label="Email"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="phone"
                  placeholder="123-456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  label="Phone"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  label="Company Name"
                />
              </div>
              <div>
                <Input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  label="Website URL"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full  border border-neutral-800 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Hi, I am Jane and I want help with..."
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2 mb-6">
              <label className="flex items-center gap-2 text-sm text-neutral-400">
                <input
                  type="checkbox"
                  name="agreeNewsletter"
                  checked={formData.agreeNewsletter}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                I'd like to schedule a call to discuss this before we start
              </label>
              <label className="flex items-center gap-2 text-sm text-neutral-400">
                <input
                  type="checkbox"
                  name="agreePolicy"
                  checked={formData.agreePolicy}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                You agree to be contacted by Wellorgs AI about their respective
                services. Your personal information will be processed in
                accordance with Shopify's Privacy Policy and the privacy policy
                of Wellorgs AI Privacy Policy, respectively.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-tertiary text-white font-medium py-2 rounded-md"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
