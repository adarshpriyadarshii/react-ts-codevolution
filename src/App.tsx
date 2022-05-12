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
import { ThemeContextProvider } from './components/context/themeContext';
import {Box} from './components/context/box'
import {UserContextProvider} from './components/context/userContext'
import {ContextUser} from './components/context/user'
import { DomRef } from './components/ref/DomRef'
import { MutableRef } from './components/ref/MutableRef'
import { ClassCounter } from './components/class/counter'
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import {List} from './components/generics/List'
import { RandomNumber } from './components/restriction/RandomNumber'
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button'
import { Text } from './components/polymorphic/Text'
function App() {
  /*const personName={
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
  ]*/
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
    <LoggedIn/>
    <User/>
    <Counter/>
    <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider>
    <UserContextProvider>
      <ContextUser/>
    </UserContextProvider>
    <DomRef />
      <MutableRef />
      <ClassCounter message='The count value is ' />
      <Private isLoggedIn={true} Component={Profile}/>
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
      <RandomNumber value={10} isNegative />
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>*/}
      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  );
}

export default App;
