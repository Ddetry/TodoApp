import db from './firebase';
import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import { Button , FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //fires when the app loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => { //when something change in the database
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo : doc.data().todo}))) //return a flat array of strings
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //stop the refresh
    db.collection('todos').add({
      todo: input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTodos([...todos, input]) //copy the entire array of todo and append
    setInput('');
  }

  return (
    <div className="App">
      <h1> My To-Do App </h1>

      <form>
        <FormControl>
          <InputLabel> Write a Todo </InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled = {!input} variant="contained" color="primary" type = "submit" onClick = {addTodo} >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo = {todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
