// Shared theme colors for charts
export const getThemeColors = (isDarkMode) => ({
  text: isDarkMode ? '#e5e7eb' : '#374151',
  subtext: isDarkMode ? '#9ca3af' : '#6b7280',
  splitLine: isDarkMode ? 'rgba(243, 244, 246, 0.1)' : 'rgba(148, 163, 184, 0.1)',
  axisLine: isDarkMode ? '#374151' : '#e5e7eb',
  tooltip: {
    background: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    border: isDarkMode ? '#374151' : '#e5e7eb',
    text: isDarkMode ? '#e5e7eb' : '#374151'
  },
  // LeetCode specific colors (these don't change with theme)
  leetcode: {
    easy: '#00b8a3',      // Green
    medium: '#ffc01e',    // Yellow
    hard: '#ff375f',      // Red
  },
  // Language colors (these don't change with theme)
  languages: {
    python: '#3572A5',
    javascript: '#f7df1e',
    java: '#b07219',
    cpp: '#f34b7d',
    typescript: '#2b7489',
    go: '#00ADD8'
  },
  // Chart series colors
  series: [
    isDarkMode ? '#60a5fa' : '#3b82f6', // Blue
    isDarkMode ? '#f87171' : '#ef4444', // Red  
    isDarkMode ? '#34d399' : '#10b981', // Green
    isDarkMode ? '#fbbf24' : '#f59e0b', // Yellow
    isDarkMode ? '#a78bfa' : '#8b5cf6', // Purple
    isDarkMode ? '#f472b6' : '#ec4899', // Pink
    isDarkMode ? '#22d3ee' : '#06b6d4', // Cyan
    isDarkMode ? '#a3e635' : '#84cc16'  // Lime
  ]
})
