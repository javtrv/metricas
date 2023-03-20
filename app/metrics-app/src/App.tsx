import { useState } from 'react'
import './assets/css/App.css'
import FormAddMetric from './components/FormAddMetric'
import Reports from './components/Reports'

const App: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(true)
  return (
    <div className="App">
      <header>
        <h1>Metrics</h1>
      </header>
      <main>
        <section className='section-buttons'>
          <button data-testid='button-add-metrics' onClick={() => { setShowForm(true) }}>Add metrics</button>
          <button data-testid='button-reports' onClick={() => { setShowForm(false) }}>Reports</button>
        </section>
        <section className='section-main'>
          {showForm
            ? (<section className='section-form'>
                <h2>Add metrics</h2>
                <FormAddMetric/>
              </section>
              )
            : (<section className='section-reports'>
                <h2>Reports</h2>
                <Reports/>
              </section>
              )
          }
        </section>
      </main>

    </div>
  )
}

export default App
