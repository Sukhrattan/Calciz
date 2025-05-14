import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <body>
        <main>
            <div class = "calculator">
                <div class="screen"></div>
                <div class ="functions">
                    {/* <div class = "func"><img src = "assets/"></div>
                    <div class = "func"><img src = "assets/"></div> */}
                    <div class = "func">4</div>
                </div>
                <div class ="divider"></div>
                <button class = "symbol">AC</button>
                <button class = "symbol">C</button>
                <button class = "symbol">/</button>
                <button class = "symbol">%</button>
                <button class = "number">7</button>
                <button class = "number">8</button>
                <button class = "number">9</button>
                <button class = "symbol">*</button>
                <button class = "number">4</button>
                <button class = "number">5</button>
                <button class = "number">6</button>
                <button class = "symbol">+</button>
                <button class = "number">1</button>
                <button class = "number">2</button>
                <button class = "number">3</button>
                <button class = "symbol">#</button>
                <button class = "number">00</button>
                <button class = "number">0</button>
                <button class = "symbol">.</button>
                <button class = "symbol">=</button>
                
                
            </div>
        </main>
        <script type = "module" src="scripts/events.js" async defer></script>
        <script type = "module" src="scripts/tokenizer.js"></script>
        <script src = "scripts/calculation.js"></script>
        <script src = "scripts/operator.js"></script>
        

    </body>

    </>
  )
}

export default App
