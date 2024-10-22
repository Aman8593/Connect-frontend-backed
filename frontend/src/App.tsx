
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  interface Joke {
    id: number;
    title: string;
    punchline: string;
  }
  const [jokes, setjokes] = useState<Joke[]>([]) 
useEffect(() => {
  axios.get('/api/jokes')
  .then(response => {
    setjokes(response.data)
  })
  .catch(error => {
    console.error(error)
  })
})

  return (
    <>
      <h1>Connect Frontend with Backend</h1>
      <p>Jokes: {jokes.length} </p>
      {
        jokes.map((joke) => {
          return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.punchline}</p>
            </div>
            )

        })
      }
    </>
  )
}

export default App
