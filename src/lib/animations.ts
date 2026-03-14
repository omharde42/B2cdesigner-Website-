import { Variants } from "framer-motion";

export const reveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0, 1] as const } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
