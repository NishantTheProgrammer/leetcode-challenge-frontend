import ReactECharts from 'echarts-for-react'
import { useTheme } from '../../contexts/ThemeContext'
import { getThemeColors } from './ThemeColors'

const TopicProgress = () => {
  const { isDarkMode } = useTheme()
  const colors = getThemeColors(isDarkMode)
  // Static sample data
  const data = {
    title: 'Topic Progress',
    topics: [
      { name: 'Arrays', solved: 85, total: 100 },
      { name: 'Dynamic Programming', solved: 45, total: 100 },
      { name: 'Trees', solved: 65, total: 100 },
      { name: 'Graphs', solved: 35, total: 100 },
      { name: 'Strings', solved: 75, total: 100 },
      { name: 'Binary Search', solved: 55, total: 100 },
      { name: 'Linked Lists', solved: 60, total: 100 },
      { name: 'Stack/Queue', solved: 70, total: 100 }
    ]
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
      trigger: 'axis'
    },
    legend: {
      data: ['Progress'],
      bottom: 0,
      textStyle: {
        color: '#6b7280'
      }
    },
    radar: {
      shape: 'circle',
      indicator: data.topics.map(topic => ({
        name: topic.name,
        max: topic.total,
        color: '#6b7280'
      })),
      splitArea: {
        areaStyle: {
          color: [
            `rgba(${isDarkMode ? '0,184,163' : '0,184,163'},0.05)`,
            `rgba(${isDarkMode ? '0,184,163' : '0,184,163'},0.1)`,
            `rgba(${isDarkMode ? '0,184,163' : '0,184,163'},0.05)`
          ]
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(107, 114, 128, 0.2)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(107, 114, 128, 0.2)'
        }
      }
    },
    series: [
      {
        name: 'Progress',
        type: 'radar',
        data: [
          {
            value: data.topics.map(topic => topic.solved),
            name: 'Progress',
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
              width: 2,
              color: '#00b8a3'  // LeetCode green
            },
            areaStyle: {
              color: 'rgba(0,184,163,0.2)'  // LeetCode green with opacity
            }
          }
        ]
      }
    ]
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

export default TopicProgress
