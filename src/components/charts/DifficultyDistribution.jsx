import ReactECharts from 'echarts-for-react'
import { useTheme } from '../../contexts/ThemeContext'
import { getThemeColors } from './ThemeColors'

const DifficultyDistribution = () => {
  const { isDarkMode } = useTheme()
  const colors = getThemeColors(isDarkMode)
  // Static sample data
  const data = {
    title: 'Problem Difficulty Distribution',
    difficulties: [
      { name: 'Easy', value: 45, color: colors.leetcode.easy },
      { name: 'Medium', value: 35, color: colors.leetcode.medium },
      { name: 'Hard', value: 20, color: colors.leetcode.hard }
    ]
  }

  const option = {
    title: {
      text: data.title,
      left: 'center',
      top: 20,
      textStyle: {
        color: colors.text,
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle',
      textStyle: {
        color: colors.subtext
      }
    },
    series: [
      {
        name: 'Difficulty',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['60%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: isDarkMode ? '#1f2937' : '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: '{b}\n{c} ({d}%)',
          color: colors.text
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true
        },
        data: data.difficulties.map(d => ({
          value: d.value,
          name: d.name,
          itemStyle: {
            color: d.color
          }
        }))
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

export default DifficultyDistribution
