"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { IconCode, IconStar, IconGitFork, IconFolder, IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface GitHubData {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  languages: { [key: string]: number };
}

const COLORS = ['#4F46E5', '#6366F1', '#818CF8', '#A5B4FC', '#C7D2FE'];

const GitHubPage = () => {
  const [githubData, setGitHubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/itzrahul02'
        );
        const reposResponse = await axios.get(
          'https://api.github.com/users/itzrahul02/repos'
        );

        const languages: { [key: string]: number } = {};
        let totalStars = 0;
        let totalForks = 0;

        reposResponse.data.forEach((repo: any) => {
          totalStars += repo.stargazers_count;
          totalForks += repo.forks_count;
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        setGitHubData({
          totalRepos: response.data.public_repos,
          totalStars,
          totalForks,
          languages,
        });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <p className="text-gray-300 text-center py-8">Loading...</p>;
  if (error) return <p className="text-red-400 text-center py-8">Error: {error}</p>;

  const pieData = Object.keys(githubData?.languages || {}).map((key) => ({
    name: key,
    value: githubData?.languages[key],
  }));

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
            GitHub Analytics
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Detailed insights into my open-source contributions
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: IconFolder,
              title: "Total Repos",
              value: githubData?.totalRepos,
              color: "text-blue-400"
            },
            {
              icon: IconStar,
              title: "Total Stars",
              value: githubData?.totalStars,
              color: "text-purple-400"
            },
            {
              icon: IconGitFork,
              title: "Total Forks",
              value: githubData?.totalForks,
              color: "text-indigo-400"
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-200">{stat.title}</h2>
                  <p className={`text-4xl font-bold ${stat.color} mt-2`}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Languages Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <IconCode className="h-6 w-6 text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-200">
              Languages Used
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
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button
            className="px-8 py-4 text-lg bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-gray-900 font-bold rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-blue-400/20"
            onClick={() => window.open('https://github.com/coderkaushik', '_blank')}
          >
            <IconExternalLink className="mr-2 h-5 w-5" />
            Explore My GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubPage;