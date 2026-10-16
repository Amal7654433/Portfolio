import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/portfolioData";

const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profile.contactFormKey) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: profile.contactFormKey,
          subject: `New message from ${form.name} via ${profile.brandName}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-[#7c5cff] transition-colors";

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="uppercase tracking-widest text-sm"
          style={{ color: "#22d3ee" }}
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl font-bold mt-3 mb-6"
        >
          Let's build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 mb-10"
        >
          I'm currently open to new opportunities and collaborations. Send me a message and I'll
          get back to you as soon as I can.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6 sm:p-8 text-left space-y-4 mb-10"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Your message"
            className={inputClass}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full px-8 py-3 font-medium bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <p className="text-sm text-center text-emerald-400">Thanks! Your message has been sent.</p>}
          {status === "error" && <p className="text-sm text-center text-red-400">Something went wrong. Please try again or email me directly.</p>}
          {status === "unconfigured" && <p className="text-sm text-center text-yellow-400">Contact form is not configured yet.</p>}
        </motion.form>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 font-medium glass hover:bg-white/10 transition-colors"
          >
            <FaEnvelope /> {profile.email}
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Amal, I found your portfolio and would like to connect.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 font-medium bg-[#25D366] text-black hover:opacity-90 transition-opacity"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <div className="flex justify-center gap-6 text-2xl text-white/60">
          <a href={profile.socials.github} className="hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href={profile.socials.linkedin} className="hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href={profile.socials.leetcode} className="hover:text-white transition-colors">
            <SiLeetcode />
          </a>
        </div>
      </div>
    </section>
  );
}
