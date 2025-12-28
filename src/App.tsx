import { useState, type FormEvent } from 'react'
import './App.css'

interface ResultProps {
  name: string,
  age: number
}

function App() {

  const [name, setName] = useState("")
  const [birthYear, setBirthYear] = useState<number | "">(0)
  const [result, setResult] = useState<ResultProps | null>(null)


  function calculate(event: FormEvent) {
    event.preventDefault()

    const currentYear = new Date().getFullYear()
    const age = currentYear - Number(birthYear)

    setResult({
      name,
      age
    })
  }

  return (
    <div>
      <main className='container'>
        <h1 className='title'>Discover your age.</h1>
        <form className='form' onSubmit={calculate}>


          <label>Please enter your name: </label>
          <input className='input' value={name} onChange={(e) => setName(e.target.value)} placeholder='ex: Ewersson Silva' required />

          <label>Please enter your year of birth: </label>
          <input className='input' value={birthYear} onChange={(e) => setBirthYear(Number(e.target.value))} placeholder='ex: 2001' required />


          <input className='button' type='submit' value="Calculate" />

          {result && (
            <section className='result'>
              <p>
                {result.name}, you're {result.age} years old!
              </p>
            </section>
          )}
        </form>
      </main>
    </div>
  )
}

export default App
