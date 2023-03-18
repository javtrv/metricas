import { useState } from 'react'
import './assets/css/App.css'
import Form from './components/Form'

const App: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(true)
  return (
    <div className="App">
      <header>
        <h1>Metrics</h1>
      </header>
      <main>
        <section className='section-buttons'>
          <button onClick={() => { setShowForm(true) }}>Add metrics</button>
          <button onClick={() => { setShowForm(false) }}>Reports</button>
        </section>
        <section className='section-main'>
          {showForm
            ? (<section className='section-form'>
                <h2>Add metrics</h2>
                <Form/>
              </section>
              )
            : 'table'}
        </section>
      </main>

    </div>
  )
}

export default App
