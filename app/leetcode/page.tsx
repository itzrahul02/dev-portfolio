"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { IconChartBar, IconChartPie, IconCheck, IconPercentage, IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface ProfileData {
  totalSolved: number;
  acceptanceRate: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
}

const COLORS = ['#4F46E5', '#6366F1', '#818CF8'];

const LeetCodePage = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.get(
          'https://leetcode-stats-api.herokuapp.com/Master_Chief_117J'
        );
        setProfileData(response.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  if (loading) return <p className="text-gray-300 text-center py-8">Loading...</p>;
  if (error) return <p className="text-red-400 text-center py-8">Error: {error}</p>;

  const chartData = [
    { name: 'Easy', Solved: profileData?.easySolved, Total: profileData?.totalEasy },
    { name: 'Medium', Solved: profileData?.mediumSolved, Total: profileData?.totalMedium },
    { name: 'Hard', Solved: profileData?.hardSolved, Total: profileData?.totalHard },
  ];

  const pieData = [
    { name: 'Easy', value: profileData?.easySolved },
    { name: 'Medium', value: profileData?.mediumSolved },
    { name: 'Hard', value: profileData?.hardSolved },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            LeetCode Analytics
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Detailed breakdown of my problem-solving journey
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="group relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <IconCheck className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-200">Total Solved</h2>
                <p className="text-4xl font-bold text-blue-400 mt-2">
                  {profileData?.totalSolved}
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <IconPercentage className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-200">Acceptance Rate</h2>
                <p className="text-4xl font-bold text-purple-400 mt-2">
                  {profileData?.acceptanceRate}%
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <IconChartBar className="h-6 w-6 text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-200">
              Problems Solved by Difficulty
            </h2>
          </div>
          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#4F46E5" />
                <YAxis stroke="#4F46E5" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                <Legend />
                <Bar dataKey="Solved" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Total" fill="#374151" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="group relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <IconChartPie className="h-6 w-6 text-purple-400" />
            <h2 className="text-xl font-semibold text-gray-200">
              Solved Problems Distribution
            </h2>
          </div>
          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    borderColor: '#374151',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button
            className="px-8 py-4 text-lg bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-gray-900 font-bold rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-blue-400/20"
            onClick={() => window.open('https://leetcode.com/Master_Chief_117J', '_blank')}
          >
            <IconExternalLink className="mr-2 h-5 w-5" />
            View Full Profile
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LeetCodePage;