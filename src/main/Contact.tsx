import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import BlurText from "../components/Blurtext";
import WebDevIcon from "../components/WebDev";
import UIDesign from "../components/UIDesign";
import IT from "../components/IT";
import Deployment from "../components/Deployment";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const subject = subjectRef.current?.value.trim();
    const message = messageRef.current?.value.trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_xhbnk8k",
        "template_8qvz49b",
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          year: new Date().getFullYear().toString(),
        },
        "ngiBqonD08IUVUdF_"
      );

      setStatus("success");
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (subjectRef.current) subjectRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) => `
    w-full rounded-2xl px-5 py-4 text-base outline-none
    bg-white/60 dark:bg-zinc-900/80
    border transition-all duration-300
    text-zinc-900 dark:text-white
    placeholder-zinc-400 dark:placeholder-zinc-500
    backdrop-blur-sm
    ${
      focused === field
        ? "border-purple-400 dark:border-purple-500 shadow-sm shadow-purple-200 dark:shadow-purple-900/30"
        : "border-black/10 dark:border-white/10"
    }
  `;

  const services = [
    {
      emoji: (
        <div style={{ transform: "scale(0.13)", transformOrigin: "center" }}>
          <WebDevIcon />
        </div>
      ),
      title: "Web Development",
      desc: "React, Next.js, Node.js — fast, responsive, production-ready apps.",
      color: "#a855f7",
    },
    {
      emoji: (
        <div style={{ transform: "scale(0.20)", transformOrigin: "center" }}>
          <UIDesign />
        </div>
      ),
      title: "UI / UX Design",
      desc: "Clean interfaces with smooth animations and great user experience.",
      color: "#ec4899",
    },
    {
      emoji: (
        <div style={{ transform: "scale(0.24)", transformOrigin: "center" }}>
          <IT />
        </div>
      ),
      title: "IT Support",
      desc: "Network setup, system admin, VMware ESXi, and troubleshooting.",
      color: "#38bdf8",
    },
    {
      emoji: (
        <div style={{ transform: "scale(0.20)", transformOrigin: "center" }}>
          <Deployment />
        </div>
      ),
      title: "Deployment & DevOps",
      desc: "Vercel, Netlify, CI/CD pipelines, and server configuration.",
      color: "#f59e0b",
    },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <BlurText
            text="Let's Work Together"
            delay={50}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4
                       text-zinc-900 dark:text-white"
          />
          <div className="h-1 w-20 rounded-full bg-black/50 dark:bg-white/50 mb-4" />
          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-md">
            Have a project in mind? I'm currently available for new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                  Your Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="John Doe"
                  className={inputClass("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                  Email Address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                Subject
              </label>
              <input
                ref={subjectRef}
                type="text"
                placeholder="Project inquiry, collaboration..."
                className={inputClass("subject")}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                Message
              </label>
              <textarea
                ref={messageRef}
                rows={6}
                placeholder="Tell me about your project..."
                className={`${inputClass("message")} resize-none`}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl
                           bg-green-50 dark:bg-green-900/20
                           border border-green-200 dark:border-green-800
                           text-green-700 dark:text-green-400 text-sm font-medium"
              >
                Message sent! I'll get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl
                           bg-red-50 dark:bg-red-900/20
                           border border-red-200 dark:border-red-800
                           text-red-700 dark:text-red-400 text-sm font-medium"
              >
                Please fill in all fields and try again.
              </motion.div>
            )}

            {/* Submit button */}
            <div className="relative inline-flex w-full items-center justify-center group">
              <div
                className="absolute inset-0 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to right, #a855f7, #ec4899, #38bdf8)",
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="w-full relative inline-flex items-center justify-center gap-2
                           rounded-xl bg-gray-900 dark:bg-white
                           px-8 py-3 text-base font-semibold
                           text-white dark:text-black
                           disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  transform: hovered && !loading ? "translateY(-2px)" : "translateY(0)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow:
                    hovered && !loading
                      ? "0 10px 25px rgba(100,100,100,0.3)"
                      : "none",
                }}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height="10"
                      width="10"
                      fill="none"
                      className="stroke-white dark:stroke-black stroke-2"
                    >
                      <path
                        d="M0 5h7"
                        style={{
                          opacity: hovered ? 1 : 0,
                          transition: "opacity 0.2s ease-out",
                        }}
                      />
                      <path
                        d="M1 1l4 4-4 4"
                        style={{
                          transform: hovered
                            ? "translateX(3px)"
                            : "translateX(0)",
                          transition: "transform 0.2s ease-out",
                        }}
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-5 sm:p-6 flex flex-col gap-4
                         bg-white/50 dark:bg-zinc-900/60
                         border border-black/8 dark:border-zinc-800
                         backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                What I offer
              </h3>

              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl
                             hover:bg-black/3 dark:hover:bg-white/3
                             transition-colors duration-200 group"
                >
                  <div
                    className="rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: `${service.color}18`,
                      overflow: "hidden",
                    }}
                  >
                    {service.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {service.title}
                      </p>
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: service.color }}
                      />
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              className="rounded-2xl p-5 flex items-center gap-4
                         bg-white/50 dark:bg-zinc-900/60
                         border border-black/8 dark:border-zinc-800
                         backdrop-blur-sm"
            >
              <div className="relative shrink-0">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Available for work
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Open to freelance & full-time roles
                </p>
              </div>
            </div>

            <a
              href="#"
              download
              className="group flex items-center justify-between gap-4 rounded-2xl p-5
                         bg-white/50 dark:bg-zinc-900/60
                         border border-black/8 dark:border-zinc-800
                         backdrop-blur-sm
                         hover:border-purple-400/40 dark:hover:border-purple-500/40
                         transition-all duration-300"
            >
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Download CV
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Cyrus James C. Lusanta
                </p>
              </div>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                           bg-zinc-100 dark:bg-zinc-800
                           group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30
                           transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 text-zinc-600 dark:text-zinc-300
                             group-hover:text-purple-600 dark:group-hover:text-purple-400
                             transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}