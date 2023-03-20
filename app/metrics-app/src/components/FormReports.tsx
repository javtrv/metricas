import { useReports } from '../hooks/useReports'
import { type MetricsArray, type FormReportsType } from '../types/types'

interface Props {
  updateMetrics: (metrics: MetricsArray, dateValue: FormReportsType) => void
}

const FormReports: React.FC<Props> = ({ updateMetrics }) => {
  const [formValues, setValue, getMetrics] = useReports()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    getMetrics().then((res) => {
      updateMetrics(res.data, formValues)
    }).catch((err) => {
      console.log('err', err)
    })
  }

  return (
    <form className='form-reports' onSubmit={handleSubmit} data-testid='form-reports'>
        <label htmlFor='startDate'>Start Date
          <input
            type='datetime-local'
            id='startDate'
            name='startDate'
            data-testid='start-date-reports'
            onChange={(e) => {
              setValue('startDate', e.target.value)
            }}
            value={formValues.startDate}
          />
        </label>
        <label htmlFor='endDate'>End Date
          <input
            type='datetime-local'
            id='endDate'
            name='endDate'
            data-testid='end-date-reports'
            min={formValues.startDate}
            onChange={(e) => {
              setValue('endDate', e.target.value)
            }}
            value={formValues.endDate}
          />
        </label>

      <button type='submit' data-testid='button-reports-submit'>Search</button>

    </form>
  )
}

export default FormReports
