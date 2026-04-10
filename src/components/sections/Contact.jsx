import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import EarthCanvas from "../canvas/Earth";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.from_name,
          to_name: "Ghulam Qadir",
          from_email: form.from_email,
          to_email: "gq5735741@gmail.com",
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus('success');
          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
          // Auto-hide success message after 5 seconds
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus('error');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-16 py-24 flex xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className='flex-[0.75] bg-black-200 aspect-square p-6 sm:p-8 rounded-3xl relative border border-luxury/20 group hover:border-luxury/60 transition-colors duration-300 overflow-hidden'
      >
        {/* Rapid background pulse animation */}
        <div className="absolute inset-0 bg-luxury/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-[2px] bg-luxury/50 shadow-luxury animate-[scan_2s_linear_infinite]" />
        </div>

        {/* Professional Success/Error Message Overlay */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-black-200/90 backdrop-blur-xl"
            >
              <div className="text-center flex flex-col items-center">
                {status === 'success' ? (
                  <>
                    <div className="w-20 h-20 bg-luxury/10 rounded-full flex items-center justify-center mb-6 border border-luxury/30 shadow-luxury">
                      <CheckCircle2 className="w-12 h-12 text-luxury" />
                    </div>
                    <h3 className="text-white font-black text-2xl uppercase tracking-widest mb-2">Sync Successful</h3>
                    <p className="text-secondary font-medium">Your transmission has been received! <br/> I'll get back to you shortly.</p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
                      <ShieldAlert className="w-12 h-12 text-red-500" />
                    </div>
                    <h3 className="text-white font-black text-2xl uppercase tracking-widest mb-2">Signal Failed</h3>
                    <p className="text-secondary font-medium">Something went wrong during setup. <br/> Please retry the handshake.</p>
                    <button 
                       onClick={() => setStatus(null)}
                       className="mt-6 text-luxury font-black uppercase text-xs tracking-[0.2em] hover:underline"
                    >
                      Return to Console
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex flex-col h-full">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p className="text-luxury text-[14px] uppercase tracking-[0.5em] font-black">Direct Link</p>
            <h3 className="text-white font-black text-[40px] tracking-tighter mt-1">Contact.</h3>
          </motion.div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-6 flex-grow justify-center'
          >
            <div className="grid md:grid-cols-2 gap-6">
              <label className='flex flex-col'>
                <span className='text-secondary font-bold text-[12px] uppercase tracking-widest mb-2 px-1'>Name</span>
                <input
                  type='text'
                  name='from_name'
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="ID"
                  className='bg-white/5 py-4 px-6 text-white rounded-xl outline-none border border-white/5 focus:border-luxury focus:bg-white/10 transition-all duration-200 font-medium text-sm'
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-secondary font-bold text-[12px] uppercase tracking-widest mb-2 px-1'>Email</span>
                <input
                  type='email'
                  name='from_email'
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="Secure Link"
                  className='bg-white/5 py-4 px-6 text-white rounded-xl outline-none border border-white/5 focus:border-luxury focus:bg-white/10 transition-all duration-200 font-medium text-sm'
                  required
                />
              </label>
            </div>

            <label className='flex flex-col'>
              <span className='text-secondary font-bold text-[12px] uppercase tracking-widest mb-2 px-1'>Message</span>
              <textarea
                rows={4}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Transmission Data'
                className='bg-white/5 py-4 px-6 text-white rounded-xl outline-none border border-white/5 focus:border-luxury focus:bg-white/10 transition-all duration-200 font-medium text-sm resize-none'
                required
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              disabled={loading}
              className='amethyst-gradient py-4 px-8 rounded-xl outline-none w-full text-white font-black shadow-luxury transition-all duration-200 uppercase tracking-[0.3em] text-[14px]'
            >
              {loading ? "Syncing..." : "Transmit Message"}
            </motion.button>
          </form>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default Contact;
