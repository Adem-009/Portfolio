"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle ,Menu  } from "lucide-react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
export default function ContactMe() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cvii4um",   
        "template_esm8dfe",  
        formRef.current!,
        "1hW_09Wki7Y7PKoO-"   
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          setLoading(false);
          alert("Somthing was wrong");
          console.error(error);
        }
      );
  };

  return (
    <section className="w-full min-h-screen bg-[#131515] flex items-center justify-center">
        <Link href={"/"} className="fixed top-0 left-0  text-white mb-2"><Menu size={48} /></Link>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full mt-10  max-w-lg bg-[#1a1c1c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Contact</h2>
          <p className="text-zinc-400 text-sm">
            Have a project or a question? Send me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-semibold text-white">Thank You!</h3>
            <p className="text-zinc-400 text-sm">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 my-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">First Name</label>
                <input
                  type="text"
                  name="user_firstname"
                  required
                  placeholder="John"
                  className="w-full bg-[#131515] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Last Name</label>
                <input
                  type="text"
                  name="user_lastname"
                  required
                  placeholder="Doe"
                  className="w-full bg-[#131515] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#131515] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Message</label>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="Write your message here..."
                className="w-full bg-[#131515] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={loading}
              type="submit"
              className="w-full bg-white text-black hover:bg-zinc-200 font-semibold rounded-xl py-3 px-6 text-sm flex items-center justify-center gap-2 transition-all mt-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span>Sending...</span>
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}