
import React, { useState } from 'react';
import { Calendar, Users, Clock, Send, MessageCircle } from 'lucide-react';
import { ReservationData } from '../types';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    requests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 2,
          requests: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi L'Art Culinaire! I'd like to book a table.\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}`
    );
    window.open(`https://wa.me/1234567890?text=${text}`, '_blank');
  };

  return (
    <section id="reservation" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          <div className="md:w-1/3 bg-primary p-12 text-zinc-950 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif mb-6">Reservation</h2>
              <p className="opacity-80 mb-8 font-medium">
                For groups larger than 8, please call us directly for special event coordination.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Clock size={18} />
                  <span>Mon-Sun: 6:00 PM - 11:00 PM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar size={18} />
                  <span>Open for Lunch on Weekends</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleWhatsApp}
              className="mt-12 flex items-center justify-center gap-2 w-full py-4 bg-zinc-950 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp Booking
            </button>
          </div>

          <div className="md:w-2/3 p-8 md:p-12">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-2">Thank You!</h3>
                <p className="text-gray-500">Your request has been received. We'll confirm shortly via email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-span-full md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Guests</label>
                  <select
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors appearance-none"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Persons</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Date</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Time Slot</label>
                  <input
                    required
                    type="time"
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Special Requests</label>
                  <textarea
                    rows={3}
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Birthdays, allergies, preferred table..."
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  />
                </div>
                <div className="col-span-full">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-5 bg-primary text-zinc-950 font-bold uppercase tracking-[0.2em] rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Table'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Reservation;



