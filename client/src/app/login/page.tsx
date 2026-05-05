'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

const cormorant = Cormorant_Garamond({ weight: ['300', '400', '600'], subsets: ['latin'], display: 'swap' });
const poppins = Poppins({ weight: ['200', '400', '600'], subsets: ['latin'], display: 'swap' });

export default function LoginPage() {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#000' }}
    >
      <div style={{ background: 'rgba(26,26,26,0.95)', padding: 48, borderRadius: 12, maxWidth: 480, width: '100%' }}>
        {step === 'email' && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          >
            <h2 style={{ fontFamily: cormorant.style.fontFamily, fontSize: 26, fontWeight: 500, color: 'white', marginBottom: 24 }}>Sign In</h2>
          <p style={{ color: '#999', marginBottom: 32 }}>Your email</p>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com"
            style={{ width: '100%', padding: '12px 16px', border: '1px solid #444', borderRadius: 8, background: 'transparent', color: 'white' }}
          />
          <button
            onClick={() => setStep('passcode')}
            style={{ width: '100%', padding: '12px', background: 'white', color: 'black', borderRadius: 8, fontSize: 16, cursor: 'pointer' }}
          >
            Continue
          </button>
          <Link href="/signup" style={{ color: 'white', display: 'block', marginTop: 16, textAlign: 'center' }}>New here? Sign up</Link>
        </motion.div>
        }
        {step === 'passcode' && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          >
            <h2 style={{ fontFamily: cormorant.style.fontFamily, fontSize: 26, fontWeight: 500, color: 'white', marginBottom: 24 }}>Check your email</h2>
          <p style={{ color: '#999', marginBottom: 32 }}>We've sent a one-time passcode to {email}.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            {[1,2,3,4,5,6].map((i) => (
              <input
                key={i}
                maxLength={1}
                style={{ width: 48, textAlign: 'center', padding: '12px 0', fontSize: 24, borderBottom: '2px solid white', background: 'transparent', color: 'white' }}
              />
            ))}
          </div>
          <button onClick={() => setStep('email')} style={{ width: '100%', padding: '12px', background: 'white', color: 'black', borderRadius: 8, fontSize: 16, cursor: 'pointer' }}>Back</button>
        </motion.div>
        }
      </div>
    </motion.div>
  );
}
