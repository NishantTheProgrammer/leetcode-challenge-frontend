import ReactECharts from 'echarts-for-react'
import { useTheme } from '../../contexts/ThemeContext'
import { getThemeColors } from './ThemeColors'

const SolveTime = () => {
  const { isDarkMode } = useTheme()
  const colors = getThemeColors(isDarkMode)
  // Static sample data
  const data = {
    title: 'Problem Solve Time Distribution',
    difficulties: ['Easy', 'Medium', 'Hard'],
    // For each difficulty: [min, Q1, median, Q3, max] in minutes
    timeData: [
      {
        name: 'Easy',
        data: [5, 15, 25, 35, 60],
        color: '#00b8a3'  // LeetCode green
      },
      {
        name: 'Medium',
        data: [15, 30, 45, 60, 90],
        color: '#ffc01e'  // LeetCode yellow
      },
      {
        name: 'Hard',
        data: [30, 60, 90, 120, 180],
        color: '#ff375f'  // LeetCode red
      }
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
      trigger: 'item',
      formatter: function(params) {
        if (params.seriesName === 'Time Distribution') {
          const values = params.data
          return `${params.name}<br/>
                  Min: ${values[0]} min<br/>
                  Q1: ${values[1]} min<br/>
                  Median: ${values[2]} min<br/>
                  Q3: ${values[3]} min<br/>
                  Max: ${values[4]} min`
        }
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '15%'
    },
    xAxis: {
      type: 'category',
      data: data.difficulties,
      boundaryGap: true,
      nameGap: 30,
      splitArea: {
        show: false
      },
      axisLabel: {
        color: '#6b7280'
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: 'Time (minutes)',
      splitArea: {
        show: true
      },
      axisLabel: {
        color: '#6b7280'
      }
    },
    series: [
      {
        name: 'Time Distribution',
        type: 'boxplot',
        data: data.timeData.map((item, index) => ({
          value: item.data,
          itemStyle: {
            color: item.color,
            borderColor: item.color
          }
        })),
        tooltip: {
          formatter: function(param) {
            return [
              'Time Distribution: ' + param.name,
              'Maximum: ' + param.data[4] + ' min',
              'Q3: ' + param.data[3] + ' min',
              'Median: ' + param.data[2] + ' min',
              'Q1: ' + param.data[1] + ' min',
              'Minimum: ' + param.data[0] + ' min'
            ].join('<br/>')
          }
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

export default SolveTime
