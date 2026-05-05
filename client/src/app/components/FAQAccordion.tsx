'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lora } from 'next/font/google';

const lora = Lora({ weight: ['400', '600'], subsets: ['latin'], display: 'swap' });

const FAQ_ITEMS = [
    {
        q: 'How does the free trial work?',
        a: 'You get 1 free image generation and 1 free song when you sign up. No credit card required. If you love your card, you can purchase it and we will print and mail it.',
    },
    {
        q: 'What does a Souvenote card look like?',
        a: 'Each card is unique, featuring your chosen template, personalized with your photos and message, and accompanied by a song you choose.',
    },
    {
        q: 'Can I preview my card before purchasing?',
        a: 'Yes! You can see a full preview before committing to a purchase.',
    },
    {
        q: 'Is my photo privacy protected?',
        a: 'Absolutely. We never share your images with third parties. Your memories are yours.',
    },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useInView(containerRef, { margin: '-100px 0px 0px 0px' });

  return (
    <section ref={containerRef} className="so-faq">
      <h2>FAQ</h2>
      <dl className="so-faq-list">
        {FAQ_ITEMS.map(({ q, a }, i) => (
          <motion.div
            key={i}
            className="so-faq-item"
            onClick={() => setOpenIndex(i === openIndex ? null : i)}
          >
            <dt className="so-faq-question">{q}</dt>
            <motion.dd
              style={{ overflow: 'hidden' }}
              animate={{
                height: i === openIndex ? 'auto' : 0,
                opacity: i === openIndex ? 1 : 0
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <dd className="so-faq-answer">{a}</dd>
            </motion.dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
