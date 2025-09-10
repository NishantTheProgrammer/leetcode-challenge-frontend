import ReactECharts from 'echarts-for-react'
import { useTheme } from '../../contexts/ThemeContext'
import { getThemeColors } from './ThemeColors'
import { useMemo } from 'react'

const YearlyContribution = () => {
  const { isDarkMode } = useTheme()
  const colors = getThemeColors(isDarkMode)

  const generateYearData = useMemo(() => {
    const currentYear = new Date().getFullYear()
    const data = []

    // Helper function to get random value with weighted probability
    const getRandomValue = (dayOfWeek) => {
      const rand = Math.random()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
      
      // Lower activity probability on weekends
      if (isWeekend) {
        if (rand < 0.6) return 0 // 60% chance of no activity
        if (rand < 0.8) return Math.floor(Math.random() * 8) // 20% chance of 1-7
        if (rand < 0.95) return Math.floor(Math.random() * 8) + 8 // 15% chance of 8-15
        return Math.floor(Math.random() * 15) + 16 // 5% chance of 16-30
      }
      
      // Higher activity on weekdays
      if (rand < 0.3) return 0 // 30% chance of no activity
      if (rand < 0.6) return Math.floor(Math.random() * 8) // 30% chance of 1-7
      if (rand < 0.9) return Math.floor(Math.random() * 8) + 8 // 30% chance of 8-15
      return Math.floor(Math.random() * 15) + 16 // 10% chance of 16-30
    }

    // Generate data for each day
    const today = new Date()
    const startDate = new Date(currentYear, 0, 1)
    let currentDate = new Date(startDate)
    let streak = 0
    let isInStreak = false

    while (currentDate <= today) {
      // Start a new streak randomly
      if (!isInStreak && Math.random() < 0.1) {
        isInStreak = true
        streak = Math.floor(Math.random() * 5) + 3 // 3-7 days streak
      }

      let value
      if (isInStreak && streak > 0) {
        value = Math.floor(Math.random() * 15) + 16 // 16-30 contributions
        streak--
        if (streak === 0) isInStreak = false
      } else {
        value = getRandomValue(currentDate.getDay())
      }

      // Format date as YYYY-MM-DD
      const dateStr = currentDate.toISOString().split('T')[0]
      data.push([dateStr, value])

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return data
  }, [])

  const option = {
    tooltip: {
      position: 'top',
      formatter: function (params) {
        if (!params.data) return 'No contributions yet'
        const [dateStr, value] = params.data
        if (value === 0) return `No contributions on ${new Date(dateStr).toLocaleDateString('en-US', { 
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}`
        return `${value} contribution${value === 1 ? '' : 's'} on ${new Date(dateStr).toLocaleDateString('en-US', { 
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}`
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: 30,
      calculable: false,
      orient: 'horizontal',
      left: 'center',
      inRange: {
        color: [
          isDarkMode ? '#1f2937' : '#ebedf0',  // No contributions
          isDarkMode ? '#0e4429' : '#9be9a8',  // 1-7 contributions
          isDarkMode ? '#006d32' : '#40c463',  // 8-15 contributions
          isDarkMode ? '#26a641' : '#30a14e',  // 16-23 contributions
          isDarkMode ? '#39d353' : '#216e39'   // 24-30 contributions
        ]
      }
    },
    calendar: {
      top: 25,
      left: 35,
      right: 15,
      cellSize: [13, 13], // Increased cell size
      gap: 6, // Increased gap between cells
      range: new Date().getFullYear(),
      itemStyle: {
        borderWidth: 0,
        borderRadius: 2
      },
      yearLabel: { show: false },
      dayLabel: {
        firstDay: 0,
        nameMap: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        show: true,
        margin: 8, // Increased margin
        color: colors.subtext,
        fontSize: 9,
        position: 'left',
        align: 'left'
      },
      monthLabel: {
        show: true,
        nameMap: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        margin: 8, // Increased margin
        color: colors.subtext,
        fontSize: 10,
        position: 'top',
        align: 'left'
      },
      splitLine: {
        show: false
      }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 0,
      data: generateYearData,
      label: {
        show: false
      },
      itemStyle: {
        borderRadius: 2
      }
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="text-sm font-medium text-gray-900 dark:text-white mb-4">
        {new Date().getFullYear()} Contribution Activity
      </div>
      <ReactECharts 
        option={option} 
        style={{ height: '160px', width: '100%' }} // Increased height
        className="dark:[&_.echarts-tooltip]:!bg-gray-800 dark:[&_.echarts-tooltip]:!border-gray-600"
      />
      <div className="flex items-center justify-end gap-3 mt-4 text-xs text-gray-500 dark:text-gray-400">
        <span>Less</span>
        {[0, 7, 15, 23, 30].map((level, i) => (
          <div 
            key={i}
            className={`w-3 h-3 rounded-sm ${
              isDarkMode
                ? i === 0 ? 'bg-[#1f2937]' 
                : i === 1 ? 'bg-[#0e4429]'
                : i === 2 ? 'bg-[#006d32]'
                : i === 3 ? 'bg-[#26a641]'
                : 'bg-[#39d353]'
                : i === 0 ? 'bg-[#ebedf0]'
                : i === 1 ? 'bg-[#9be9a8]'
                : i === 2 ? 'bg-[#40c463]'
                : i === 3 ? 'bg-[#30a14e]'
                : 'bg-[#216e39]'
            }`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}

export default YearlyContribution