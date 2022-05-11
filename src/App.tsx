import React from 'react';
import './App.css';
import { Greet } from './components/greet';
import { Person } from './components/person';
import { PersonList } from './components/personlist';
import { Status } from './components/status';
import { Heading } from './components/heading';
import { Oscar } from './components/oscar';
import { Button } from './components/button';
import { Input } from './components/input';
import { Container } from './components/container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/user';
import { Counter } from './components/state/counter';

function App() {
  const personName={
    first:'Adarsh',
    last:'Priyadarshi',
  }

  const nameList=[
    {
      id:1,
      first:'Bruce',
      last:'Wayne'
    },
    {
      id:2,
      first:'Clarke',
      last:'Kent'
    },
    {
      id:3,
      first:'Tony',
      last:'Stark'
    },
  ]
  return (
    <div className="App">
      {/*<h1>Hellooo</h1>
      <Greet name="adarsh" msgCount={5} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leo!</Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log('Button Clicked',event,id)
      }}
      />
      <Input value='' handleChange={(event)=>console.log(event)}/>
    <Container styles={{border:'5px solid black', padding:'1rem'}}/>
    <LoggedIn/>*/}
    <User/>
    <Counter/>
    </div>
  );
}

export default App;
