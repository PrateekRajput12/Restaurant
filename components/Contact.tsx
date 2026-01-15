import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-900/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-bold uppercase tracking-[0.25em] block mb-4 text-sm">
              Get in Touch
            </span>

            <h2 className="text-3xl md:text-5xl font-serif mb-10">
              Visit Our Sanctuary
            </h2>

            {/* CONTACT DETAILS */}
            <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
              {/* LOCATION */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-zinc-800 shadow-lg rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-500 dark:text-zinc-400 text-sm md:text-base">
                    123 Gastronomy Lane, Suite 400
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-zinc-800 shadow-lg rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">
                    Call Us
                  </h4>
                  <p className="text-gray-500 dark:text-zinc-400 text-sm md:text-base">
                    +1 (212) 555-8899
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-zinc-800 shadow-lg rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">
                    Email Us
                  </h4>
                  <p className="text-gray-500 dark:text-zinc-400 text-sm md:text-base">
                    concierge@lartculinaire.com
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 md:w-12 md:h-12 border border-gray-300 dark:border-zinc-700 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-zinc-950 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.472227744384!2d-73.98542832341498!3d40.750567935191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a145!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
