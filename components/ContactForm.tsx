import React from 'react';
import Button from './Button';

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 bg-apex-black relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-industrial font-bold text-white mb-6">Start Your Project</h2>
          <p className="text-gray-500 font-light">Reach out for a comprehensive quote.</p>
        </div>

        <form className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-gray-800 text-white py-4 focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                id="name"
                placeholder="Name"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text"
              >
                Name
              </label>
            </div>
            
            <div className="relative group">
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-gray-800 text-white py-4 focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                id="company"
                placeholder="Company"
              />
              <label 
                htmlFor="company" 
                className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text"
              >
                Company
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-gray-800 text-white py-4 focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                id="email"
                placeholder="Email"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text"
              >
                Email
              </label>
            </div>
            
            <div className="relative group">
              <input 
                type="tel" 
                className="w-full bg-transparent border-b border-gray-800 text-white py-4 focus:outline-none focus:border-white transition-colors placeholder-transparent peer"
                id="phone"
                placeholder="Phone"
              />
              <label 
                htmlFor="phone" 
                className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text"
              >
                Phone
              </label>
            </div>
          </div>

          <div className="relative group">
            <textarea 
              rows={3}
              className="w-full bg-transparent border-b border-gray-800 text-white py-4 focus:outline-none focus:border-white transition-colors placeholder-transparent peer resize-none"
              id="details"
              placeholder="Project Details"
            ></textarea>
            <label 
              htmlFor="details" 
              className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text"
            >
              Project Details
            </label>
          </div>

          <div className="flex justify-center pt-8">
            <Button type="button" className="w-full md:w-auto px-12">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;