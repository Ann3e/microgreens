import React from "react";
import { motion } from "framer-motion";
import "./CompanyMarquee.css";

const companies = [
  "OpenAI", "Anthropic", "Hugging Face", "Cohere", "Eleuther", "Mistral", "LLaMA"
];

export default function CompanyMarquee() {
  return (
    <section className="company-section">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="company-marquee"
      >
        {[...companies, ...companies].map((name, i) => (
          <span key={i} className="company-name">{name}</span>
        ))}
      </motion.div>
    </section>
  );
}
