import ReactECharts from 'echarts-for-react'
import { useTheme } from '../../contexts/ThemeContext'
import { getThemeColors } from './ThemeColors'

const WeeklyActivity = () => {
  const { isDarkMode } = useTheme()
  const colors = getThemeColors(isDarkMode)
  // Static sample data
  const data = {
    title: 'Weekly Submission Activity',
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    hours: Array.from({ length: 24 }, (_, i) => i),
    // Generate random activity data (0-8 submissions per hour)
    activity: Array.from({ length: 7 }, () => 
      Array.from({ length: 24 }, () => Math.floor(Math.random() * 9))
    )
  }

  const option = {
    title: {
      text: data.title,
      left: 'center',
      textStyle: {
        color: colors.text,
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      position: 'top',
      formatter: function (params) {
        return `${data.days[params.data[1]]} ${params.data[0]}:00<br>
                ${params.data[2]} submissions`
      }
    },
    grid: {
      top: '60',
      bottom: '10%',
      left: '15%',
      right: '15%'
    },
    xAxis: {
      type: 'category',
      data: data.hours.map(h => `${h}:00`),
      splitArea: {
        show: true
      },
      axisLabel: {
        color: '#6b7280'
      }
    },
    yAxis: {
      type: 'category',
      data: data.days,
      splitArea: {
        show: true
      },
      axisLabel: {
        color: '#6b7280'
      }
    },
    visualMap: {
      min: 0,
      max: 8,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
      textStyle: {
        color: '#6b7280'
      },
      inRange: {
        color: [isDarkMode ? '#1f2937' : '#eef6f6', colors.leetcode.easy]
      }
    },
    series: [{
      name: 'Submissions',
      type: 'heatmap',
      data: data.hours.flatMap(hour =>
        data.days.map((day, dayIndex) => [hour, dayIndex, data.activity[dayIndex][hour]])
      ),
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <ReactECharts 
        option={option} 
        style={{ height: '400px', width: '100%' }}
        className="dark:[&_.echarts-tooltip]:!bg-gray-800 dark:[&_.echarts-tooltip]:!border-gray-600"
      />
    </div>
  )
}

export default WeeklyActivity
