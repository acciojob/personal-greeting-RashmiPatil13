
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText] = useState("") // ab

    console.log("text",text) // a

    function getValue(event){
        
         setText(event.target.value) //ab
    }
  return (
    <div>
        {/* Do not remove the main div */}
        
            <form>
                <h1>Enter your name :</h1>
                <input type="text" onChange={getValue}/>
            </form>
            <p> Hello &nbsp;{text}</p>
        
    </div>
  )
}

export default App
