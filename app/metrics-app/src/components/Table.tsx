import { type FormReportsType, type MetricsArray } from '../types/types'
import { metricsNames } from '../const'
import { getDatesQuantity } from '../helpers/helpers'

interface Props {
  reportedMetrics: MetricsArray
  datesToSearch: FormReportsType
}
const Table: React.FC<Props> = ({ reportedMetrics, datesToSearch }) => {
  const [minutes, hours, days] = getDatesQuantity(datesToSearch?.startDate, datesToSearch?.endDate)

  const metricsAvg = metricsNames.map((metric) => {
    const total = reportedMetrics.reduce((acc, item) => {
      if (item.name === metric) {
        acc += item.value
      }
      return acc
    }, 0)

    return {
      name: metric,
      avgPerMinute: (total / minutes).toFixed(6),
      avgPerHour: (total / hours).toFixed(6),
      avgPerDay: (total / days).toFixed(6),
      total
    }
  })

  return (
    <>
      <table data-testid='table-reports'>
        <thead>
          <tr>
            <th></th>
            <th>Average per Minute</th>
            <th>Average per Hour</th>
            <th>Average per Day</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {metricsAvg.map((metric) => {
            return (
              <tr key={metric.name}>
                <td>{metric.name}</td>
                <td>{metric.avgPerMinute}</td>
                <td>{metric.avgPerHour}</td>
                <td>{metric.avgPerDay}</td>
                <td>{metric.total}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table
