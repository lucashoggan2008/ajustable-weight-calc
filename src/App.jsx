import React from 'react'

const PlateArangement = ({plates}) => {
  
  const smallPlate = (
    <div class="plate small-plate">
      <h1>S</h1>
    </div>
  )
  const mediumPlate = (
    <div className="plate medium-plate">
      <h1>M</h1>
    </div>
  )

  const largePlate = (
    <div className="plate large-plate">
      <h1>L</h1>
    </div>
  )

  const determineSides = (plates) => {
    var side1 = []
    var side2 = []
    var nextSide = 1;
    var tempPlates = {
      small:plates.small,
      medium:plates.medium,
      large:plates.large
    }

    const addToSides = (val) => {
      if (nextSide === 1) {
        side1.push(val)
        nextSide = 2
      } else {
        side2.push(val)
        nextSide = 1
      }
    }

    const repeate = (val, n) => {
      var a = []

      for (var i=1;i<=n;i++) {
        a.push([val])
      }

      return a
    }

    if (plates.small % 2 === 0 && plates.small !== 0) {
      side1.push(repeate(smallPlate, plates.small/2))
      side2.push(repeate(smallPlate, plates.small/2))
      tempPlates.small = 0
    } else if (plates.small > 2) {
      side1.push(repeate(smallPlate, Math.floor(plates.small/2)))
      side2.push(repeate(smallPlate, Math.floor(plates.small/2)))
      tempPlates.small -= Math.floor(plates.small/2) * 2
    }
    while(tempPlates.small > 0) {
      addToSides(smallPlate)
      tempPlates.small -= 1
    }
    if (plates.medium % 2 === 0 && plates.medium !== 0) {
      side1.push(repeate(mediumPlate, plates.medium/2))
      side2.push(repeate(mediumPlate, plates.medium/2))
      tempPlates.medium = 0

    } else if (plates.medium > 2) {
      side1.push(repeate(mediumPlate, Math.floor(plates.medium/2)))
      side2.push(repeate(mediumPlate, Math.floor(plates.medium/2)))
    }
    while(tempPlates.medium > 0) {
      addToSides(mediumPlate)
      tempPlates.medium -= 1
    }
    if (plates.large % 2 === 0 && plates.large !== 0) {
      side1.push(repeate(largePlate, plates.large/2))
      side2.push(repeate(largePlate, plates.large/2))
      tempPlates.large = 0
    } else if (plates.large > 2) {
      side1.push(repeate(largePlate, Math.floor(plates.large/2)))
      side2.push(repeate(largePlate, Math.floor(plates.large/2)))
      tempPlates.large -= Math.floor(plates.large/2) * 2
    }
    while(tempPlates.large > 0) {
      addToSides(largePlate)
      tempPlates.large -= 1
    }

    return [side1, side2.reverse()]
    }
    var sides = determineSides(plates)
    return (
      <div className="plate-arangment">{sides[0]}<div className="vertical-seperator"></div>{sides[1]}</div>
    )
  
  }  
  
  

const App = () => {
  const [inputText, setInputText] = React.useState("")
  const [plates, setPlates] = React.useState({large:0, medium:0, small:0})
  const getPlateNumber = (num) => {
    num -= 6
    var large = 0
    var medium = 0
    var small = 0
    
    if (num >= 20) {
      large = Math.floor(num/10)
      num -= large * 10
    }
    while (num > 2) {
      medium += 1
      num -= 2
    }
    small = num
    return {
      large, medium, small
    }
  }

  


  const whenTextFieldUpdate = (e) => {
    var text = e.target.value
    if (text === "") {
      setInputText(text)
    } else {  
      var num = Number(text)
      if (isNaN(num) || num < 6) {
        setPlates({large:0, medium:0, small:0})
      }
      else {
        var plates = getPlateNumber(num)
        setPlates(plates)
      }
      
      setInputText(text)}
  }

  return (
    <main>
    <div className="header">
        <p className="title-text">
          Weight Calculator
        </p>
      </div>
      <input type="text" value={inputText} onInput={whenTextFieldUpdate}/>
      <div className="text-out-box">
        <p>{"Small - " + plates.small}</p>
        <p>{"Medium - " + plates.medium}</p>
        <p>{"Large - " + plates.large}</p>
      </div>
      <h2>Realistic Value: {6 + plates.small * 1.1 + plates.medium * 2.2 + plates.large * 10.2}Kg</h2>
      <PlateArangement plates={plates} />
    </main>
  )
}



export default App