import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter } from 'lucide-react';
import { QuestionPaperCard } from './QuestionPaperCard';

type ExamType = 'mid1' | 'mid2' | 'sem';
type Branch = 'CSE' | 'CSM' | 'CSD' | 'ECE' | 'AI&ML';

interface QuestionPaper {
  id: string;
  subject: string;
  year: string;
  semester: string;
  examType: ExamType;
  pdfUrl: string;
  branch: Branch;
}

type QuestionPaperSeed = Omit<QuestionPaper, 'branch'> & { branch?: Branch };

const DEFAULT_BRANCH: Branch = 'CSE';

// Mock data for question papers
const questionPaperSeed: QuestionPaperSeed[] = [
  // 1st Year - CSE,CSM,CSD,ECE,AI&ML
  //CSM
  { id: '1', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '2', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '3', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '2', subject: 'Applied Physics', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '3', subject: 'Applied Physics', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '4', subject: 'Applied Physics', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '3', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '4', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '5', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '4', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '5', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '6', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '5', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '6', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '7', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '8', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '9', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '10', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '11', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '12', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '13', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '14', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '15', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '16', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '17', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '18', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '19', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '20', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '21', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  //CSE
  { id: '1', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '2', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '3', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '2', subject: 'Applied Physics', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '3', subject: 'Applied Physics', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '4', subject: 'Applied Physics', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '3', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '4', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '5', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '4', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '5', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '6', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '5', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '6', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '7', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '8', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '9', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '10', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '11', subject: 'Engineering Chemistry', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '12', subject: 'Engineering Chemistry', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '13', subject: 'Engineering Chemistry', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '14', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '15', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '16', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '17', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '18', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '19', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '20', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '21', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  //CSD
  { id: '1', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '2', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '3', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '2', subject: 'Applied Physics', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '3', subject: 'Applied Physics', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '4', subject: 'Applied Physics', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '3', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '4', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '5', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '4', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '5', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '6', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '5', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '6', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '7', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '8', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '9', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '10', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '11', subject: 'Engineering Chemistry', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '12', subject: 'Engineering Chemistry', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '13', subject: 'Engineering Chemistry', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '14', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '15', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '16', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '17', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '18', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '19', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '20', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '21', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
//ECE
{ id: '1', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '2', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '3', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '2', subject: 'Applied Physics', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '3', subject: 'Applied Physics', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '4', subject: 'Applied Physics', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '3', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '4', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '5', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '4', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '5', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '6', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '5', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '6', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '7', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '8', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '9', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '10', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '11', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '12', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '13', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '14', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '15', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '16', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '17', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '18', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '19', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '20', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'ECE' },
{ id: '21', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'ECE' },
{ id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
{ id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'ECE' },
//AI&ML
{ id: '1', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '2', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '3', subject: 'Matrices and Calculus', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '2', subject: 'Applied Physics', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '3', subject: 'Applied Physics', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '4', subject: 'Applied Physics', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '3', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '4', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '5', subject: 'English for Skill Enhancement', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '4', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '5', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '6', subject: 'Programming for Problem Solving', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '5', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '6', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '7', subject: 'Elements of Computer Science & Engineering', year: '1', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '8', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '9', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '10', subject: 'Ordinary Differential Equations and Vector Calculus', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '11', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '12', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '13', subject: 'Engineering Chemistry', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '14', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '15', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '16', subject: 'Basic Electrical & ElectronicsEngineering', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '17', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '18', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '19', subject: 'Data Structures through Python', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '20', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'AI&ML' },
{ id: '21', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'AI&ML' },
{ id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
{ id: '22', subject: 'Environmental Science & Disaster Management', year: '1', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'AI&ML' },
  // 2nd Year - CSE,CSM,CSD,ECE,AI&ML
  //CSM
  { id: '23', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '24', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '25', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '26', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '27', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '28', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '29', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '30', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '31', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '32', subject: 'OOP through Java', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '33', subject: 'OOP through Java', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '34', subject: 'OOP through Java', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '35', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '37', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '38', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '39', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '40', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '41', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '42', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '43', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '44', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '45', subject: 'Computer Networks', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '46', subject: 'Computer Networks', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '47', subject: 'Computer Networks', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '48', subject: 'Operating Systems', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '49', subject: 'Operating Systems', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '50', subject: 'Operating Systems', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '51', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '52', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '53', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  //CSE
  { id: '23', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '24', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '25', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '26', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '27', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '28', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'sem', pdfUrl: 'https://t.me/cmritexam/16', branch: 'CSE' },
  { id: '29', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '30', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '31', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '32', subject: 'OOP through Java', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '33', subject: 'OOP through Java', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '34', subject: 'OOP through Java', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '35', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '37', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '38', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '39', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '40', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '41', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '42', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '43', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '44', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '45', subject: 'Computer Networks', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '46', subject: 'Computer Networks', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '47', subject: 'Computer Networks', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '48', subject: 'Operating Systems', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '49', subject: 'Operating Systems', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '50', subject: 'Operating Systems', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '51', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '52', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '53', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  //CSD
  { id: '23', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '24', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '25', subject: 'Statistical Foundations for Computer Science', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '26', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '27', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '28', subject: 'Digital Logic Design and Computer Organization', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '29', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '30', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '31', subject: ' Software Design and Engineering ', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '32', subject: 'OOP through Java', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '33', subject: 'OOP through Java', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '34', subject: 'OOP through Java', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '35', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '37', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '38', subject: 'Database Management Systems', year: '2', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '39', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '40', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '41', subject: 'Discrete Mathematics & Graph Theory', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '42', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '43', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '44', subject: 'Design and Analysis of Algorithms', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '45', subject: 'Computer Networks', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '46', subject: 'Computer Networks', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '47', subject: 'Computer Networks', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '48', subject: 'Operating Systems', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '49', subject: 'Operating Systems', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '50', subject: 'Operating Systems', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '51', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '52', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '53', subject: 'Full Stack Development', year: '2', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },

  // 3rd Year - CSE,CSM,CSD,ECE,AI&ML
  //CSM
  { id: '54', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '55', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '56', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '57', subject: 'Artificial Intelligence and Machine Learning', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '58', subject: 'Artificial Intelligence and Machine Learning', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '59', subject: 'Artificial Intelligence and MachineLearning', year: '3', semester: '1', examType: 'sem', pdfUrl: 'https://t.me/cmritexam/2', branch: 'CSM' },
  { id: '60', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '61', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '62', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '63', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '64', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '65', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '66', subject: 'Digital marketing', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '67', subject: 'Digital marketing', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '68', subject: 'Digital marketing', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '69', subject: 'Soft Computing', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '70', subject: 'Soft Computing', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '71', subject: 'Soft Computing', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '72', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '73', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '74', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '75', subject: 'Image Processing', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '76', subject: 'Image Processing', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '77', subject: 'Image Processing', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '78', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '79', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '80', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '81', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '82', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '83', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '84', subject: 'Natural Language Processing ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '85', subject: 'Natural Language Processing ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '86', subject: 'Natural Language Processing ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '87', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '88', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '89', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '90', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '91', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '92', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '93', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '94', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '95', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '96', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '97', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '98', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '99', subject: 'E-Commerce', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '100', subject: 'E-Commerce', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '101', subject: 'E-Commerce', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  //CSE
  { id: '54', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '55', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '56', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '57', subject: 'Artificial Intelligence and Machine Learning', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '58', subject: 'Artificial Intelligence and Machine Learning', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '59', subject: 'Artificial Intelligence and MachineLearning', year: '3', semester: '1', examType: 'sem', pdfUrl: 'https://t.me/cmritexam/2', branch: 'CSE' },
  { id: '60', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '61', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '62', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '63', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '64', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '65', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '66', subject: 'Digital marketing', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '67', subject: 'Digital marketing', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '68', subject: 'Digital marketing', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '69', subject: 'Soft Computing', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '70', subject: 'Soft Computing', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '71', subject: 'Soft Computing', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '72', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '73', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '74', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '75', subject: 'Image Processing', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '76', subject: 'Image Processing', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '77', subject: 'Image Processing', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '78', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '79', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '80', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '81', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '82', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '83', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '84', subject: 'DevOps', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '85', subject: 'DevOps', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '86', subject: 'DevOps ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '87', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '88', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '89', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '90', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '91', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '92', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '93', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '94', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '95', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '96', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '97', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '98', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '99', subject: 'E-Commerce', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '100', subject: 'E-Commerce', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '101', subject: 'E-Commerce', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
  //CSD
  { id: '54', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '55', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '56', subject: 'Automata and Compiler Design', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '57', subject: 'Artificial Intelligence and Machine Learning', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '58', subject: 'Artificial Intelligence and Machine Learning', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '59', subject: 'Artificial Intelligence and MachineLearning', year: '3', semester: '1', examType: 'sem', pdfUrl: 'https://t.me/cmritexam/2', branch: 'CSD' },
  { id: '60', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '61', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '62', subject: 'Data Mining and Data Analytics', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '63', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '64', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '65', subject: 'Information and Cyber Security ', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '66', subject: 'Digital marketing', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '67', subject: 'Digital marketing', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '68', subject: 'Digital marketing', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '69', subject: 'Data Warehousing and Business Intelligence', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '70', subject: 'Data Warehousing and Business Intelligence', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '71', subject: 'Data Warehousing and Business Intelligence', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '72', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '73', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '74', subject: 'Middleware Technologies', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '75', subject: 'Image Processing', year: '3', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '76', subject: 'Image Processing', year: '3', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '77', subject: 'Image Processing', year: '3', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '78', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '79', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '80', subject: 'IoT and Cloud Computing', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '81', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '82', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '83', subject: 'Robotic Process Automation ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '84', subject: 'DevOps', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '85', subject: 'DevOps', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '86', subject: 'DevOps ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '87', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '88', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '89', subject: 'Data Science and Big Data Analytics ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '90', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '91', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '92', subject: 'Knowledge representation and Reasoning ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '93', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '94', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '95', subject: 'Advanced Machine Learning ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '96', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '97', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '98', subject: 'Blockchain and Cryptocurrency ', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '99', subject: 'E-Commerce', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '100', subject: 'E-Commerce', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '101', subject: 'E-Commerce', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '101', subject: 'Agile Methodologies', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
  { id: '101', subject: 'Electronic Sensors', year: '3', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
   // 4th Year - CSE,CSM,CSD,ECE,AI&ML
   //CSM
  { id: '103', subject: 'CManagement, Economics and Accountancy', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '104', subject: 'CManagement, Economics and Accountancy', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '105', subject: 'CManagement, Economics and Accountancy', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '106', subject: 'Neural Networks and Deep Learning', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '107', subject: 'Neural Networks and Deep Learning', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '108', subject: 'Neural Networks and Deep Learning', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '109', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '110', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '112', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '112', subject: 'Document Analysis and Speech Recognition', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '113', subject: 'Document Analysis and Speech Recognition', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '114', subject: 'Document Analysis and Speech Recognition', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '115', subject: 'Human Computer Interaction', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '116', subject: 'Human Computer Interaction', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '117', subject: 'Human Computer Interaction', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '118', subject: 'Machine Learning for Hackers', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '119', subject: 'Machine Learning for Hackers', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '120', subject: 'Machine Learning for Hackers', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '121', subject: 'Genetic Algorithms and Applications', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '122', subject: 'Genetic Algorithms and Applications', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '123', subject: 'Genetic Algorithms and Applications', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '124', subject: 'Pattern Recognition and Anomaly Detection', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '125', subject: 'Pattern Recognition and Anomaly Detection', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '126', subject: 'Pattern Recognition and Anomaly Detection', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '127', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '128', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '129', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '130', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '131', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '132', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '133', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '134', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '135', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '136', subject: 'Chatbots', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '137', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '138', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '139', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '149', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '141', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '142', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '143', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '144', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '145', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '146', subject: 'Artificial Neural Systems ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '147', subject: 'Artificial Neural Systems ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '148', subject: 'Artificial Neural Systems ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '149', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '150', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '151', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '152', subject: 'AI in Healthcare  ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '153', subject: 'AI in Healthcare  ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '154', subject: 'AI in Healthcare  ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '155', subject: 'Cognitive Computing ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '156', subject: 'Cognitive Computing ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '157', subject: 'Cognitive Computing ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '158', subject: 'Artificial Immune System', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '159', subject: 'Artificial Immune System', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '160', subject: 'Artificial Immune System', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '161', subject: 'AI in Robotics', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '162', subject: 'AI in Robotics', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '163', subject: 'AI in Robotics', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '164', subject: 'Drones ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '165', subject: 'Drones ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '166', subject: 'Drones ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '167', subject: 'Game Developmen', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '168', subject: 'Game Developmen', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '169', subject: 'Game Developmen', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '170', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '171', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '172', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
  { id: '173', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSM' },
  { id: '174', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSM' },
  { id: '175', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSM' },
//CSE
{ id: '103', subject: 'CManagement, Economics and Accountancy', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '104', subject: 'CManagement, Economics and Accountancy', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '105', subject: 'CManagement, Economics and Accountancy', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '106', subject: 'Go Programming', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '107', subject: 'Go Programming', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '108', subject: 'Go Programming', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '109', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '110', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '112', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '112', subject: 'Document Analysis and Speech Recognition', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '113', subject: 'Document Analysis and Speech Recognition', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '114', subject: 'Document Analysis and Speech Recognition', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '115', subject: 'Human Computer Interaction', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '116', subject: 'Human Computer Interaction', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '117', subject: 'Human Computer Interaction', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '118', subject: 'Machine Learning for Hackers', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '119', subject: 'Machine Learning for Hackers', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '120', subject: 'Machine Learning for Hackers', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '121', subject: 'Genetic Algorithms and Applications', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '122', subject: 'Genetic Algorithms and Applications', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '123', subject: 'Genetic Algorithms and Applications', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '124', subject: 'Pattern Recognition and Anomaly Detection', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '125', subject: 'Pattern Recognition and Anomaly Detection', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '126', subject: 'Pattern Recognition and Anomaly Detection', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '127', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '128', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '129', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '130', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '131', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '132', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '133', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '134', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '135', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '136', subject: 'Chatbots', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '137', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '138', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '139', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '149', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '141', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '142', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '143', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '144', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '145', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '146', subject: 'Advanced Algorithms', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '147', subject: 'Advanced Algorithms', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '148', subject: 'Advanced Algorithms ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '149', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '150', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '151', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '152', subject: 'Computer Forensics ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '153', subject: 'Computer Forensics', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '154', subject: 'Computer Forensics', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '155', subject: 'Cognitive Computing ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '156', subject: 'Cognitive Computing ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '157', subject: 'Cognitive Computing ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '158', subject: 'Distributed Systems ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '159', subject: 'Distributed Systems ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '160', subject: 'Distributed Systems ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '161', subject: 'Vehicular ad-hoc Networks ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '162', subject: 'Vehicular ad-hoc Networks ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '163', subject: 'Vehicular ad-hoc Networks ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '164', subject: 'Drones ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '165', subject: 'Drones ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '166', subject: 'Drones ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '167', subject: 'Game Developmen', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '168', subject: 'Game Developmen', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '169', subject: 'Game Developmen', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '170', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '171', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '172', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
{ id: '173', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSE' },
{ id: '174', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSE' },
{ id: '175', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSE' },
//CSD
{ id: '103', subject: 'Management, Economics and Accountancy', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '104', subject: 'Management, Economics and Accountancy', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '105', subject: 'Management, Economics and Accountancy', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '106', subject: 'Predictive Analytics', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '107', subject: 'Predictive Analytics', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '108', subject: 'Predictive Analytics', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '109', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '110', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '112', subject: 'Computer Vision and Robotics ', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '112', subject: 'Information Storage and Retrieval', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '113', subject: 'Information Storage and Retrieval', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '114', subject: 'Information Storage and Retrieval', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '115', subject: 'Web and Database Security', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '116', subject: 'Web and Database Security', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '117', subject: 'Web and Database Security', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '118', subject: 'Data Science for Business', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '119', subject: 'Data Science for Business', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '120', subject: 'Data Science for Business', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '121', subject: 'Mining Massive Datasets ', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '122', subject: 'Mining Massive Datasets ', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '123', subject: 'Mining Massive Datasets ', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '124', subject: 'Data Optimization Techniques', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '125', subject: 'Data Optimization Techniques', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '126', subject: 'Data Optimization Techniques', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '127', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '128', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '129', subject: 'Quantum Computing', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '130', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '131', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '132', subject: ' Software Process & Project Management', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '133', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '134', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '135', subject: 'Chatbots', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '136', subject: 'Chatbots', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '137', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '138', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '139', subject: 'Multimedia and Animation', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '149', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '141', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '142', subject: 'Embedded Systems ', year: '4', semester: '1', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '143', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '144', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '145', subject: 'Augmented and Virtual Reality', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '146', subject: 'Data Streaming Techniques', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '147', subject: 'Data Streaming Techniques', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '148', subject: 'Data Streaming Techniques ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '149', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '150', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '151', subject: 'Nature Inspired Computing ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '152', subject: 'Healthcare Data Analytics', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '153', subject: 'Healthcare Data Analytics', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '154', subject: 'Healthcare Data Analytics', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '155', subject: 'Video Analytics', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '156', subject: 'Video Analytics ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '157', subject: 'Video Analytics ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '158', subject: 'Computational Biology', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '159', subject: 'Computational Biology ', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '160', subject: 'Computational Biology ', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '161', subject: 'Time Series Analysis and Forecasting', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '162', subject: 'Time Series Analysis and Forecasting', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '163', subject: 'Time Series Analysis and Forecasting', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '164', subject: 'Privacy Preserving in Data Mining', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '165', subject: 'Privacy Preserving in Data Mining', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '166', subject: 'Privacy Preserving in Data Mining', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '167', subject: 'Game Developmen', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '168', subject: 'Game Developmen', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '169', subject: 'Game Developmen', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '170', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '171', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '172', subject: 'Precision Agriculture', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
{ id: '173', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'mid1', pdfUrl: '#', branch: 'CSD' },
{ id: '174', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'mid2', pdfUrl: '#', branch: 'CSD' },
{ id: '175', subject: 'Electronics for Health Care', year: '4', semester: '2', examType: 'sem', pdfUrl: '#', branch: 'CSD' },
];
const mockQuestionPapers: QuestionPaper[] = questionPaperSeed.map((paper) => ({
  ...paper,
  branch: paper.branch ?? DEFAULT_BRANCH,
}));

export function QuestionPaperSection() {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [selectedExamType, setSelectedExamType] = useState<ExamType | ''>('');
  const [selectedBranch, setSelectedBranch] = useState<Branch | ''>('');
  const [filteredPapers, setFilteredPapers] = useState<QuestionPaper[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!selectedYear || !selectedSemester || !selectedExamType || !selectedBranch) {
      return;
    }

    const filtered = mockQuestionPapers.filter(
      (paper) =>
        paper.year === selectedYear &&
        paper.semester === selectedSemester &&
        paper.examType === selectedExamType &&
        paper.branch === selectedBranch
    );

    setFilteredPapers(filtered);
    setHasSearched(true);
  };

  const getExamTypeLabel = (type: ExamType | ''): string => {
    switch (type) {
      case 'mid1':
        return 'Mid 1';
      case 'mid2':
        return 'Mid 2';
      case 'sem':
        return 'Semester';
      default:
        return '';
    }
  };

  return (
    <section id="question-papers" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Find Your <span className="text-green-600">Question</span>{' '}
            <span className="text-orange-500">Paper</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use the filters below to search for your specific question papers
          </p>
        </motion.div>

        {/* Filter Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-green-600" />
            <h3 className="text-gray-900">Filter Question Papers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Year Selection */}
            <div>
              <label className="block text-gray-700 mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-all"
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>

            {/* Semester Selection */}
            <div>
              <label className="block text-gray-700 mb-2">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-all"
              >
                <option value="">Select Semester</option>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
              </select>
            </div>

            {/* Branch Selection */}
            <div>
              <label className="block text-gray-700 mb-2">Branch</label>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value as Branch | '')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-all"
              >
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="CSM">CSM</option>
                <option value="CSD">CSD</option>
                <option value="ECE">ECE</option>
                <option value="AI&ML">AI&ML</option>
              </select>
            </div>

            {/* Exam Type Selection */}
            <div>
              <label className="block text-gray-700 mb-2">Exam Type</label>
              <select
                value={selectedExamType}
                onChange={(e) => setSelectedExamType(e.target.value as ExamType | '')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white transition-all"
              >
                <option value="">Select Exam Type</option>
                <option value="mid1">Mid 1</option>
                <option value="mid2">Mid 2</option>
                <option value="sem">Semester</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <motion.button
                onClick={handleSearch}
                disabled={
                  !selectedYear || !selectedSemester || !selectedExamType || !selectedBranch
                }
                className="w-full bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={
                  selectedYear && selectedSemester && selectedExamType && selectedBranch
                    ? { scale: 1.02 }
                    : {}
                }
                whileTap={
                  selectedYear && selectedSemester && selectedExamType && selectedBranch
                    ? { scale: 0.98 }
                    : {}
                }
              >
                <Search className="w-5 h-5" />
                Search Papers
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredPapers.length > 0 ? (
                <>
                  <div className="mb-6 text-center">
                    <p className="text-gray-600">
                      Found <span className="text-green-600">{filteredPapers.length}</span>{' '}
                      question paper{filteredPapers.length !== 1 ? 's' : ''} for{' '}
                      <span className="text-gray-900">
                        Year {selectedYear}, Semester {selectedSemester},{' '}
                        {getExamTypeLabel(selectedExamType)} ({selectedBranch})
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPapers.map((paper, index) => (
                      <QuestionPaperCard
                        key={paper.id}
                        paper={paper}
                        index={index}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl shadow-lg p-12 text-center"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-gray-900 mb-2">No Papers Found</h3>
                  <p className="text-gray-600">
                    No question papers found for the selected criteria. Try different filters.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Question Paper Modal - REMOVED */}
        {/* <QuestionPaperModal
          paper={selectedPaper}
          onClose={() => setSelectedPaper(null)}
        /> */}
      </div>
    </section>
  );
}
