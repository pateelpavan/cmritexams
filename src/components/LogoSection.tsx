import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const LOGO_SLOTS = [
  {
    id: 'primary',
    title: 'Primary Institute Logo',
    description: 'Use this slot for your official crest or emblem. Replace the image in /public/logos/cmrit-primary.png.',
    src: '/logos/cmrit-primary.png',
    accent: 'from-green-50 to-white',
  },
  {
    id: 'secondary',
    title: 'Secondary Wordmark',
    description: 'Great for department marks or event-specific branding. Replace /public/logos/cmrit-secondary.png.',
    src: '/logos/cmrit-secondary.png',
    accent: 'from-orange-50 to-white',
  },
] as const;

export function LogoSection() {
  return (
    <section
      id="logos"
      className="relative py-16 sm:py-20 bg-white overflow-hidden border-t border-gray-100"
      aria-labelledby="logo-showcase-title"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 blur-3xl bg-gradient-to-br from-green-100 via-white to-orange-100" />
      <div className="relative container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">
            Available Logo Slots
          </p>
          <h2 id="logo-showcase-title" className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            
          </h2>
          <p className="text-gray-600">
          cmr institute of technology hyderabad.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {LOGO_SLOTS.map((slot, index) => (
            <motion.article
              key={slot.id}
              className="rounded-3xl border border-gray-200 bg-gradient-to-br p-8 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`rounded-2xl bg-gradient-to-b ${slot.accent} border border-dashed border-gray-200 p-6`}>
                <div className="aspect-[4/3] flex items-center justify-center">
                  <ImageWithFallback
                    src={slot.src}
                    alt={slot.title}
                    className="max-h-36 w-auto object-contain"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{slot.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{slot.description}</p>
                <p className="text-xs text-gray-400 mt-3">Tip: promote you are brand.</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

