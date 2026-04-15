import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message (mock) has been sent.");
  };

  return (
    <section className="my-16 p-8 bg-stone-800 rounded-2xl text-stone-100">
      <h2 className="text-2xl font-light tracking-widest uppercase text-stone-400 mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="email" 
          placeholder="your@email.com" 
          required
          className="w-full p-3 bg-stone-700 border border-stone-600 rounded outline-none focus:border-stone-400 transition"
        />
        <textarea 
          placeholder="Your message..." 
          className="w-full p-3 bg-stone-700 border border-stone-600 rounded outline-none focus:border-stone-400 h-32"
        ></textarea>
        <button type="submit" className="px-8 py-3 bg-stone-100 text-stone-900 font-medium rounded hover:bg-white transition">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-stone-300 italic">{status}</p>}
    </section>
  );
};

export default Contact;