import { motion } from "framer-motion";

// Wraps a section so it fades/slides in the first time it scrolls into view.
export default function Reveal({ as: Tag = motion.div, className, delay = 0, children }) {
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
