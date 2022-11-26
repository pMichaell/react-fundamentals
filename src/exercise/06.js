// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from "react";

function UsernameForm(props, ref) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitUsername(ref.current.value);
    }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='input'>Username:</label>
        <input type="text" id='input' ref={ref}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const ForwardRefForm = React.forwardRef(UsernameForm);

function App() {
    const inputRef = useRef();
  const onSubmitUsername = username => {
      alert(`You entered: ${username}`)
      inputRef.current.value = '';
  }
  return <ForwardRefForm onSubmitUsername={onSubmitUsername} ref={inputRef}/>
}

export default App
