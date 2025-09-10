import ReactECharts from 'echarts-for-react'

const Overall = () => {
  // Static sample data shaped like a typical API response
  const submissionsData = {
    title: 'User Submissions Over Time',
    dates: [
      '2024-12-12', '2024-12-13', '2024-12-14', '2024-12-15', '2024-12-16',
      '2024-12-17', '2024-12-18', '2024-12-19', '2024-12-20', '2024-12-21',
      '2024-12-22', '2024-12-23', '2024-12-24', '2024-12-25', '2024-12-26',
      '2024-12-27', '2024-12-28', '2024-12-29', '2024-12-30', '2024-12-31',
      '2025-01-01', '2025-01-02', '2025-01-03', '2025-01-04', '2025-01-05',
      '2025-01-06', '2025-01-07', '2025-01-08', '2025-01-09', '2025-01-10'
    ],
    users: [
      { name: 'Alice', data: [0, 1, 1, 2, 2, 3, 3, 5, 5, 6, 7, 7, 9, 10, 10, 12, 13, 13, 14, 15, 17, 17, 18, 19, 21, 21, 23, 24, 26, 27] },
      { name: 'Bob', data: [0, 0, 0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10, 12, 12, 13, 14, 15, 16, 16, 18, 19, 20, 22, 23, 26] },
      { name: 'Charlie', data: [1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 28, 29, 29, 30, 30, 30] },
      { name: 'Diana', data: [0, 0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10, 12, 12, 13, 14, 15, 16, 17, 19, 19, 20, 22, 23, 24, 26] },
      { name: 'Eve', data: [0, 0, 0, 0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10, 12, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 25] }
    ]
  }

  // Adapt API shape into ECharts series config
  const series = submissionsData.users.map((u) => ({
    name: u.name,
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 6,
    lineStyle: { width: 3 },
    data: u.data
  }))

  const option = {
    title: {
      text: submissionsData.title,
      left: 'center',
      textStyle: {
        color: '#374151',
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      textStyle: {
        color: '#374151'
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
        color: '#6b7280'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      top: '20%',
      containLabel: true
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
        color: '#6b7280',
        formatter: function (value) {
          const date = new Date(value)
          return `${date.getMonth() + 1}/${date.getDate()}`
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(148, 163, 184, 0.1)',
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
        color: '#6b7280'
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
    color: [
      '#3b82f6', // Blue
      '#ef4444', // Red  
      '#10b981', // Green
      '#f59e0b', // Yellow
      '#8b5cf6', // Purple
      '#ec4899', // Pink
      '#06b6d4', // Cyan
      '#84cc16'  // Lime
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

export default Overall