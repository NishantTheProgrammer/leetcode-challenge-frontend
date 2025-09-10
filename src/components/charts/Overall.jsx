import ReactECharts from 'echarts-for-react'
import { useTheme } from '../../contexts/ThemeContext'
import { getThemeColors } from './ThemeColors'
import { users as staticUsers } from '../../data/users'

const Overall = () => {
  const { isDarkMode } = useTheme()
  const colors = getThemeColors(isDarkMode)
  
  // Static dates for the last 30 days
  const dates = [
    '2024-08-12', '2024-08-13', '2024-08-14', '2024-08-15', '2024-08-16',
    '2024-08-17', '2024-08-18', '2024-08-19', '2024-08-20', '2024-08-21',
    '2024-08-22', '2024-08-23', '2024-08-24', '2024-08-25', '2024-08-26',
    '2024-08-27', '2024-08-28', '2024-08-29', '2024-08-30', '2024-08-31',
    '2024-09-01', '2024-09-02', '2024-09-03', '2024-09-04', '2024-09-05',
    '2024-09-06', '2024-09-07', '2024-09-08', '2024-09-09', '2024-09-10'
  ]
  
  // Static submission data for each user
  const userData = [
    // Nishant's data - steady progress
    [0, 1, 1, 2, 3, 3, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    // Pushpa's data - bursts of activity
    [0, 0, 1, 1, 1, 4, 4, 4, 7, 7, 7, 7, 10, 10, 10, 13, 13, 13, 16, 16, 16, 19, 19, 19, 22, 22, 22, 25, 25, 26],
    // Suraj's data - consistent high performer
    [1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 28, 29, 29, 30, 30, 30],
    // Bharat's data - weekend warrior
    [0, 0, 0, 3, 3, 3, 3, 3, 6, 6, 6, 9, 9, 9, 9, 12, 12, 12, 15, 15, 15, 18, 18, 18, 21, 21, 21, 24, 24, 25],
    // Harshit's data - late starter with strong finish
    [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 30]
  ]
  
  // Create submission data using our static users
  const submissionsData = {
    title: 'User Submissions Over Time',
    dates: dates,
    users: staticUsers.slice(0, 5).map((user, index) => ({
      name: user.name,
      data: userData[index]
    }))
  }

  // Adapt API shape into ECharts series config
  const series = submissionsData.users.map((u) => ({
    name: u.name,
    type: 'line',
    smooth: false,
    symbol: 'circle',
    symbolSize: 8,
    lineStyle: { 
      width: 3,
      type: 'solid',
      opacity: 0.8
    },
    emphasis: {
      focus: 'series',
      symbolSize: 12,
      lineStyle: {
        width: 4,
        opacity: 1
      }
    },
    data: u.data
  }))

  const option = {
    title: {
      text: submissionsData.title,
      left: 'center',
      textStyle: {
        color: colors.text,
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: colors.tooltip.background,
      borderColor: colors.tooltip.border,
      borderWidth: 1,
      textStyle: {
        color: colors.tooltip.text,
        fontSize: 12
      },
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: colors.splitLine,
          type: 'dashed'
        }
      },
      formatter: function (params) {
        let result = `<div style="font-weight: bold; margin-bottom: 4px;">${params[0].axisValue}</div>`
        params.forEach(param => {
          result += `<div style="display: flex; align-items: center; margin-bottom: 2px;">
            <span style="display: inline-block; width: 10px; height: 10px; background-color: ${param.color}; border-radius: 50%; margin-right: 8px;"></span>
            <span style="margin-right: 8px;">${param.seriesName}:</span>
            <span style="font-weight: bold;">${param.value} submissions</span>
          </div>`
        })
        return result
      }
    },
    legend: {
      data: series.map(s => s.name),
      top: 40,
      textStyle: {
        color: colors.subtext,
        fontSize: 12
      },
      itemWidth: 15,
      itemHeight: 10,
      itemGap: 25,
      icon: 'roundRect'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '20%',
      containLabel: true,
      show: true,
      backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.2)' : 'rgba(241, 245, 249, 0.3)'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: submissionsData.dates,
      axisLine: {
        lineStyle: {
          color: '#e5e7eb'
        }
      },
      axisLabel: {
        color: colors.subtext,
        formatter: function (value) {
          const date = new Date(value)
          // Only show every 3rd date to avoid crowding
          const index = submissionsData.dates.indexOf(value)
          if (index % 3 !== 0) return ''
          return `${date.getMonth() + 1}/${date.getDate()}`
        },
        interval: 0,
        align: 'center',
        fontSize: 11
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colors.splitLine,
          type: 'dashed',
          width: 1,
          opacity: 0.3
        }
      },
      axisPointer: {
        show: true,
        type: 'line',
        lineStyle: {
          type: 'dashed',
          width: 1
        }
      }
    },
    yAxis: {
      type: 'value',
      name: 'Number of Submissions',
      nameLocation: 'middle',
      nameGap: 50,
      nameTextStyle: {
        color: '#6b7280',
        fontSize: 12
      },
      axisLine: {
        lineStyle: {
          color: '#e5e7eb'
        }
      },
      axisLabel: {
        color: colors.subtext,
        fontSize: 11
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(148, 163, 184, 0.1)',
          type: 'dashed',
          width: 1
        }
      }
    },
    series: series,
    color: colors.series
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

export default Overall