import React from 'react'

const App = () => {
  const [inputText, setInputText] = React.useState("")
  const [plates, setPlates] = React.useState({large:0, medium:0, small:0})
  const getPlateNumber = (num) => {
    num -= 6
    var large = 0
    var medium = 0
    var small = 0
    console.log(num % 10)
    console.log(num % 2)
    
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
    </main>
  )
}




export default App