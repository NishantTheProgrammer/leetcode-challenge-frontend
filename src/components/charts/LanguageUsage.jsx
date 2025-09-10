import ReactECharts from 'echarts-for-react'
import { useTheme } from '../../contexts/ThemeContext'
import { getThemeColors } from './ThemeColors'

const LanguageUsage = () => {
  const { isDarkMode } = useTheme()
  const colors = getThemeColors(isDarkMode)
  // Static sample data
  const data = {
    title: 'Programming Language Usage',
    languages: [
      { name: 'Python3', count: 145, color: colors.languages.python },
      { name: 'JavaScript', count: 98, color: colors.languages.javascript },
      { name: 'Java', count: 76, color: colors.languages.java },
      { name: 'C++', count: 67, color: colors.languages.cpp },
      { name: 'TypeScript', count: 45, color: colors.languages.typescript },
      { name: 'Go', count: 23, color: colors.languages.go }
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
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        color: '#6b7280'
      },
      splitLine: {
        lineStyle: {
          color: colors.splitLine
        }
      }
    },
    yAxis: {
      type: 'category',
      data: data.languages.map(lang => lang.name),
      axisLabel: {
        color: '#6b7280'
      }
    },
    series: [
      {
        name: 'Submissions',
        type: 'bar',
        data: data.languages.map(lang => ({
          value: lang.count,
          itemStyle: {
            color: lang.color
          }
        })),
        label: {
          show: true,
          position: 'right',
          color: '#6b7280'
        }
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

export default LanguageUsage
