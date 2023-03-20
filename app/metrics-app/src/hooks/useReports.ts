import axios, { type AxiosStatic } from 'axios'
import { useState } from 'react'
import { API_URL } from '../API'
import { type FormReportsType } from '../types/types'

export const useReports = () => {
  const INITIAL_STATE = { startDate: '', endDate: '' }

  const [formValues, setFormValues] = useState<FormReportsType>(INITIAL_STATE)

  const getMetrics = async (): Promise<AxiosStatic> => {
    return await axios.get(`${API_URL}/metrics/${formValues.startDate}/${formValues.endDate}`)
      .then((res) => {
        return res.data
      }).catch((err) => {
        console.log(err)
        throw new Error('Error reporting metric')
      }).finally(() => {
        setFormValues(INITIAL_STATE)
      })
  }

  const setValue = (field: string, value: string): void => {
    setFormValues((prevState) => ({
      ...prevState,
      [field]: value
    }))

    if (field === 'startDate') {
      setFormValues((prevState) => ({
        ...prevState,
        endDate: ''
      }))
    }
  }

  return [formValues, setValue, getMetrics] as const
}
