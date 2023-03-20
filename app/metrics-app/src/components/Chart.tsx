import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { metricsNames, metricsColors } from '../const'
import { type formatedChartData } from '../types/types'

interface Props {
  formatedChartData: formatedChartData | any
}

const Chart: React.FC<Props> = ({ formatedChartData }) => {
  return (

        <LineChart
          width={1000}
          height={500}
          data={formatedChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {metricsNames.map((metric) => {
            return (
              <Line
                key={metric}
                type="monotone"
                dataKey={metric}
                stroke={metricsColors[metric]} activeDot={{ r: 8 }} />
            )
          })
          }

        </LineChart>
  )
}

export default Chart
