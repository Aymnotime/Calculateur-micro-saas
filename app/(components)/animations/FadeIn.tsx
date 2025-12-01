"use client";
import { motion, type MotionProps } from 'framer-motion';
import React from 'react';

interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeIn({ children, className, ...rest }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
