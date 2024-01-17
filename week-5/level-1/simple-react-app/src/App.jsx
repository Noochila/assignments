import { useState } from 'react'

import './App.css'

import { Button } from './Component/Button'
import { Title } from './Component/Title'
import { Description } from './Component/Description'
import { Interest } from './Component/Interest'
import { Interest_items } from './Component/Interest_items'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">

        <div class="child">

          <Title title="Manoj N"></Title>
          <Description Description=" A student at 100xdevs" />
        </div>

        <div  class="child">
          <Interest Interest="Interest" />
          < Interest_items item={["ionic", "open-source", "sde"]} />
        </div>


        <div  class="child">
          <Button title="Linked-In" />
          <Button title="Twitter" />

        </div>


      </div>
    </>
  )
}

export default App
