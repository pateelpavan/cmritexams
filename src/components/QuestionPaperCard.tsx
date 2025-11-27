import React from 'react';
import { motion } from 'motion/react';
import { Eye, Download, FileText } from 'lucide-react';

type ExamType = 'mid1' | 'mid2' | 'sem';
type Branch = 'CSE' | 'CSM' | 'IT' | 'ECE' | 'EEE';

interface QuestionPaper {
  id: string;
  subject: string;
  year: string;
  semester: string;
  examType: ExamType;
  pdfUrl: string;
  branch: Branch;
}

interface QuestionPaperCardProps {
  paper: QuestionPaper;
  index: number;
}

export const QuestionPaperCard: React.FC<QuestionPaperCardProps> = ({ paper, index }) => {
  const getExamTypeLabel = (type: ExamType): string => {
    switch (type) {
      case 'mid1':
        return 'Mid 1';
      case 'mid2':
        return 'Mid 2';
      case 'sem':
        return 'Semester';
    }
  };

  const getExamTypeColor = (type: ExamType): string => {
    switch (type) {
      case 'mid1':
        return 'bg-green-100 text-green-700';
      case 'mid2':
        return 'bg-orange-100 text-orange-700';
      case 'sem':
        return 'bg-blue-100 text-blue-700';
    }
  };

  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    alert(`Downloading ${paper.subject} - ${getExamTypeLabel(paper.examType)}`);
  };

  const handleView = () => {
    // Open the PDF URL in a new tab
    if (paper.pdfUrl && paper.pdfUrl !== '#') {
      window.open(paper.pdfUrl, '_blank');
    } else {
      // Placeholder alert if no URL is provided
      alert(`PDF link not available for ${paper.subject}. Please add the PDF URL in the code.`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="p-6">
        {/* Icon Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-orange-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Year {paper.year}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Sem {paper.semester}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {paper.branch}
            </span>
          </div>
        </div>

        {/* Subject Name */}
        <h3 className="text-gray-900 mb-3 min-h-[3rem] line-clamp-2">
          {paper.subject}
        </h3>

        {/* Exam Type Badge */}
        <div className="mb-4">
          <span className={`px-3 py-1 rounded-full text-sm ${getExamTypeColor(paper.examType)}`}>
            {getExamTypeLabel(paper.examType)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.button
            onClick={handleView}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye className="w-4 h-4" />
            View Paper
          </motion.button>
          <motion.button
            onClick={handleDownload}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" />
            Download
          </motion.button>
        </div>
      </div>

      {/* Gradient Bottom Border on Hover */}
      <div className="h-1 bg-gradient-to-r from-green-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
};