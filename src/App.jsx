import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Myname from './Myname';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 3)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
      <div className='header1'>
      <header>
        <h1>Header Section</h1>
        <Myname />
      </header>
      <main className='content1'>
        <p>
          สวัสดีครับ ผมศุภชัย สกุลปั่น นักเรียนเขียนโค๊ดJava Script สถาบัน Tech Up
        </p>
      </main>
      <footer className='footer1'>
        <h1>Footer Section</h1>
        <Myname />
      </footer>
    </div>
  )
}


export default App
