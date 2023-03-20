import { useState } from 'react'
import { type formatedChartData, type FormReportsType, type MetricsArray } from '../types/types'
import { formatData, getDatesArray } from '../helpers/helpers'
import FormReports from './FormReports'
import Chart from './Chart'
import Table from './Table'
import '../assets/css/Reports.css'

const Reports: React.FC = () => {
  const [reportedMetrics, setReportedMetrics] = useState<MetricsArray>([])
  const [formatedChartData, setFormatedChartData] = useState<formatedChartData>()
  const [showReports, setShowReports] = useState<boolean>(false)
  const [datesToSearch, setDatesToSearch] = useState<FormReportsType>({ startDate: '', endDate: '' })

  const updateMetrics = (metrics: MetricsArray, dateValue: FormReportsType): void => {
    const time = getDatesArray(dateValue.startDate, dateValue.endDate)
    setDatesToSearch(dateValue)
    setReportedMetrics(metrics)
    const finalData = formatData(metrics, time)
    setFormatedChartData(finalData)
    setShowReports(true)
  }

  return (
    <>
      <section className='section-form-reports'>
        <FormReports updateMetrics={updateMetrics}/>
      </section>
      {showReports && (
        <>
          <section>
            <h2>Metrics chart: {}</h2>
            <Chart formatedChartData={formatedChartData}/>
          </section>
          <section className='section-table-metrics'>
            <h2>Metrics table: {}</h2>
            <Table reportedMetrics={reportedMetrics} datesToSearch={datesToSearch}/>
          </section>
        </>
      )}
    </>
  )
}

export default Reports
