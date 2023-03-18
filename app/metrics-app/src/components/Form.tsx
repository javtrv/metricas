import '../assets/css/Form.css'
import { useMetric } from '../hooks/useMetric'

const Form: React.FC = () => {
  const [formValues, addMetric, setValue, message] = useMetric()

  return (
    <form onSubmit={addMetric} className='form-add-metric'>
      <label>Name:
        <select
          placeholder='Metric name'
          name='name'
          onChange={(e) => {
            setValue('name', e.target.value)
          }}
          value={formValues.name}
        >
          <option value=''>Select a metric</option>
          <option value='click'>Clikc</option>
          <option value='update'>Update</option>
          <option value='change'>Change</option>
        </select>
      </label>
      <label>Value:
        <input
          type='number'
          placeholder='Metric value'
          name='value'
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
          onChange={(e) => {
            setValue('date', e.target.value)
          }}
          value={formValues.date}
          />
      </label>
      <button type='submit'>Add metric</button>
      <p>{message}</p>
    </form>
  )
}

export default Form
