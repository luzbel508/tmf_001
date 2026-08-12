"use client";

import { motion } from "framer-motion";

const MDiv: any = motion.div;

export default function MotionTest() {
  return (
    <MDiv
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded shadow"
    >
      <h3 className="text-xl font-display">Framer Motion test</h3>
      <p className="mt-2 text-sm">This box fades and slides in on mount.</p>
    </MDiv>
  );
}
