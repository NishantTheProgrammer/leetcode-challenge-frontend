import ReactECharts from 'echarts-for-react'
import { useMemo } from 'react'

const Overall = () => {
  // Sample data - replace with your actual data
  const { dates, series } = useMemo(() => {
    const users = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']
    const dates = []
    const today = new Date()
    
    // Generate last 30 days
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      dates.push(date.toISOString().split('T')[0])
    }
    
    const series = users.map((user, userIndex) => ({
      name: user,
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: {
        width: 3,
      },
      data: dates.map((_, dateIndex) => {
        // Create increasing trend with some variation
        const baseValue = Math.floor((dateIndex / dates.length) * 20) + (userIndex * 3)
        const variation = Math.floor(Math.random() * 5) - 2 // -2 to +2 variation
        return Math.max(0, baseValue + variation)
      })
    }))
    
    return { dates, series }
  }, []) // Empty dependency array means this only runs once

  const option = {
    title: {
      text: 'User Submissions Over Time',
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
      data: dates,
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
          color: '#f3f4f6',
          type: 'dashed'
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
          color: '#f3f4f6',
          type: 'dashed'
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