export interface Metric {
  name: string
  value: number
  date: string
}

export type MetricsArray = Metric[]

export interface FormReportsType {
  startDate: string
  endDate: string
}

export interface formatedChartData {
  name: string
  [key: string]: string
}
