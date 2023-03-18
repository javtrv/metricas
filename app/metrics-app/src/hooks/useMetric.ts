import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../API'
import { type Metric } from '../types/types'

export const useMetric = () => {
  const INITIAL_STATE: Metric = { name: '', value: 0, date: '' }

  const [formValues, setFormValues] = useState<Metric>(INITIAL_STATE)
  const [message, setMessage] = useState<string>('')

  const checkFields = (): boolean => {
    if (formValues.name === '' || formValues.value === 0 || formValues.date === '') {
      setMessage('Please fill in all fields')
      return false
    } else {
      return true
    }
  }

  const addMetric = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (!checkFields()) return

    axios.post(`${API_URL}/metric`, formValues).then((res) => {
      setFormValues(INITIAL_STATE)
      setMessage(
        'Metric added successfully'
      )
    }).catch((err) => {
      console.log('err', err)
      setMessage(
        'Error adding metric'
      )
      throw new Error('Error adding metric')
    })
  }

  const setValue = (field: string, value: string): void => {
    setMessage('')
    setFormValues((prevState) => ({
      ...prevState,
      [field]: field === 'value' ? Number(value) : value
    }))
  }

  return [formValues, addMetric, setValue, message] as const
}
