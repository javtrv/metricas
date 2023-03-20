import '../assets/css/FormAddMetric.css'
import { useMetric } from '../hooks/useMetric'
import { metricsNames } from '../const'

const FormAddMetric: React.FC = () => {
  const [formValues, addMetric, setValue, message] = useMetric()

  return (
    <form onSubmit={addMetric} className='form-add-metric' data-testid='form-add-metric'>
      <label>Name:
        <select
          placeholder='Metric name'
          name='name'
          data-testid='select-metric-name'
          onChange={(e) => {
            setValue('name', e.target.value)
          }}
          value={formValues.name}
        >
          <option value=''>Select a metric</option>
          {metricsNames.map((name) => {
            return (
              <option key={name} value={name}>{name}</option>
            )
          })
          }
        </select>
      </label>
      <label>Value:
        <input
          type='number'
          min='0'
          placeholder='Metric value'
          name='value'
          data-testid='input-metric-value'
          onChange={(e) => {
            setValue('value', e.target.value)
          }}
          value={formValues.value}
          />
      </label>
      <label>Timestamp:
        <input
          type='datetime-local'
          placeholder='Metric timestamp'
          name='date'
          data-testid='input-metric-date'
          onChange={(e) => {
            setValue('date', e.target.value)
          }}
          value={formValues.date}
          />
      </label>
      <button data-testid='button-add-metric-submit' type='submit'>Add metric</button>
      <p data-testid='message-add-metric'>{message}</p>
    </form>
  )
}

export default FormAddMetric
