import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Send, Mail } from 'lucide-react';

export function ContactSection() {
  const handleCallWhatsApp = () => {
    // In production, this would open WhatsApp with the actual number
    window.open('https://wa.me/+919391978393', '_blank');
  };

  const handleJoinChannel = () => {
    // In production, this would link to actual Telegram/WhatsApp channel
    window.open('https://t.me/cmritexam', '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Contact & <span className="text-green-600">Channel</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For any issues, requests, or to share question papers, contact us through the channels below
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone/WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Phone className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-gray-900 mb-2">Call or WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Reach out to us for any queries or support
                </p>
                <div className="text-green-700 text-lg mb-6">
                  +91-9391978393
                </div>
                <motion.button
                  onClick={handleCallWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Open WhatsApp
                </motion.button>
              </div>
            </motion.div>

            {/* Channel Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Send className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-gray-900 mb-2">Join Our Channel</h3>
                <p className="text-gray-600 mb-4">
                  Get instant updates on new question papers and announcements
                </p>
                <div className="text-orange-700 text-lg mb-6">
                  @cmritexam
                </div>
                <motion.button
                  onClick={handleJoinChannel}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                  Join Channel
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-gray-50 rounded-2xl p-8 text-center"
          >
            <Mail className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h4 className="text-gray-900 mb-2">Have Question Papers to Share?</h4>
            <p className="text-gray-600 mb-4">
              Help fellow students by contributing question papers. Contact us via WhatsApp or our channel.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Quick Response
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Anonymous Submissions Welcome
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
