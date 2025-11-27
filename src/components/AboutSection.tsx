import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Collection',
      description: 'Access a wide range of previous question papers across all years and semesters',
    },
    {
      icon: Users,
      title: 'Student Community',
      description: 'Built by students, for students. Share and contribute to help each other',
    },
    {
      icon: TrendingUp,
      title: 'Better Preparation',
      description: 'Practice with real exam papers to improve your preparation and confidence',
    },
    {
      icon: Award,
      title: 'Free Access',
      description: 'All question papers are freely accessible to every CMRIT student',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-orange-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              About <span className="text-green-600">CMRIT</span>{' '}
              <span className="text-orange-500">EXAM</span>
            </h2>
          </div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                This website is made <span className="text-green-600">for CMRIT students</span> to 
                access old exam papers easily and effectively. We understand the importance of practicing 
                with previous question papers for exam preparation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform helps students prepare for both <span className="text-orange-500">Mid and Semester exams</span> by 
                providing a centralized repository of question papers organized by year, semester, and exam type.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-green-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl p-8 text-center text-white shadow-xl"
          >
            <h3 className="mb-4">Our Mission</h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-95">
              To empower every CMRIT student with easy access to previous question papers, 
              helping them prepare better and achieve academic excellence. Together, we build 
              a stronger student community through knowledge sharing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
