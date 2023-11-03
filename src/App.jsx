import React from 'react'
import { PlateArangement, weights, weightVals, WeightPicker } from './Components'

const App = () => {
  const [weightArr, setWeightArr] = React.useState(weights[0])
  return (
    <main>
    <div className="header">
        <p className="title-text">
          Weight Calculator
        </p>
      </div>
      <WeightPicker onWeightChange={setWeightArr} />
      {/*
      <div className="text-out-box">
        <p>{"Small - " + plates.small}</p>
        <p>{"Medium - " + plates.medium}</p>
        <p>{"Large - " + plates.large}</p>
      </div>
    */}
      <PlateArangement weight_arr={weightArr} />
    </main>
  )
}



export default App