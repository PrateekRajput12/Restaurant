import React, { useState } from 'react';
import { Calendar, Clock, Send, MessageCircle } from 'lucide-react';
import { ReservationData } from '../types';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    requests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(
        'https://restaurant-server-ilcb.onrender.com/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error('Request failed');

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        requests: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.date || !formData.time) return;

    const text = encodeURIComponent(
      `Hello L'Art Culinaire 👋\n\n` +
      `Name: ${formData.name}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n` +
      `Guests: ${formData.guests}`
    );

    // ⚠️ Replace with real WhatsApp number
    window.open(`https://wa.me/1234567890?text=${text}`, '_blank');
  };

  return (
    <section
      id="reservation"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-zinc-950 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          {/* LEFT PANEL */}
          <div className="md:w-1/3 bg-primary p-8 sm:p-10 text-zinc-950 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif mb-4">Reservation</h2>
              <p className="opacity-80 mb-6 text-sm leading-relaxed">
                Groups larger than 8 guests, please contact us directly.
              </p>

              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <Clock size={18} />
                  Mon–Sun: 6:00 PM – 11:00 PM
                </li>
                <li className="flex items-center gap-3">
                  <Calendar size={18} />
                  Weekend Lunch Available
                </li>
              </ul>
            </div>

            <button
              onClick={handleWhatsApp}
              disabled={!formData.name || !formData.date || !formData.time}
              className="mt-10 flex items-center justify-center gap-2 w-full py-4 bg-zinc-950 text-white font-bold rounded-xl hover:bg-zinc-800 transition disabled:opacity-50"
            >
              <MessageCircle size={20} />
              WhatsApp Booking
            </button>
          </div>

          {/* FORM */}
          <div className="md:w-2/3 p-6 sm:p-8 md:p-12">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-2">Thank You!</h3>
                <p className="text-gray-500 text-sm">
                  Your reservation request has been sent.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {/* Name */}
                <input
                  required
                  placeholder="Full Name"
                  className="input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                {/* Email */}
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                {/* Phone */}
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="input"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                {/* Guests */}
                <select
                  className="input"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: +e.target.value })
                  }
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n}>{n} Guests</option>
                  ))}
                </select>

                {/* Date */}
                <input
                  required
                  type="date"
                  min={today}
                  className="input"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />

                {/* Time */}
                <input
                  required
                  type="time"
                  className="input"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />

                {/* Requests */}
                <textarea
                  rows={3}
                  placeholder="Special requests"
                  className="input col-span-full resize-none"
                  value={formData.requests}
                  onChange={(e) =>
                    setFormData({ ...formData, requests: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="col-span-full py-4 bg-primary text-zinc-950 font-bold uppercase tracking-widest rounded-xl hover:shadow-xl transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
