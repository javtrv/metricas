import { differenceInDays, differenceInHours, differenceInMinutes, eachDayOfInterval, format } from 'date-fns'
import { es } from 'date-fns/locale'
import { metricsNames } from '../const'
import { type MetricsArray } from '../types/types'

export function formatDates (startDate: string, endDate: string): Date[] {
  return [new Date(startDate), new Date(endDate)]
}

export function getDatesQuantity (startDate: string, endDate: string): number[] {
  const [start, end] = formatDates(startDate, endDate)
  const days = differenceInDays(end, start)
  const hours = differenceInHours(end, start)
  const minutes = differenceInMinutes(end, start)
  return [minutes, hours, days]
}

export function getDatesArray (startDate: string, endDate: string): string[] {
  const [start, end] = formatDates(startDate, endDate)
  const dates = eachDayOfInterval({ start, end })
  const formatedDates = dates.map((date) => {
    const formatedDate = format(date, 'dd/MM/yyyy', { locale: es })
    return formatedDate
  })
  return formatedDates
}

export const getTotalByDay = (metric: string, time: string, data: MetricsArray): number => {
  const total = data.reduce((acc, item) => {
    if (item.name === metric && item.date === time) {
      acc += item.value
    }
    return acc
  }, 0)
  return total
}

export const formatData = (data: MetricsArray, time: string[]): any => {
  const dataFormatedDate = data.map((metric) => {
    const { name, value, date } = metric
    const datetime = new Date(date)
    const newDate = format(datetime, 'dd/MM/yyyy', { locale: es })

    const formatedMetric = {
      name,
      value,
      date: newDate
    }
    return formatedMetric
  })

  const finalData: any = []

  time.forEach((time) => {
    finalData.push(
      {
        name: time
      }
    )
  })

  metricsNames.forEach((metric) => {
    finalData.forEach((item: any) => {
      const total = getTotalByDay(metric, item.name, dataFormatedDate)
      item[metric] = total
    })
  })

  return finalData
}
