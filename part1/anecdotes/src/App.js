import React, {useState} from 'react';
import './App.css';


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}> {text} </button>
  ) 
}

const Anecdote = ({anecdote, votes}) => {
  return (
    <>
      <h1> Anecdote of the day </h1>
      <p> {anecdote} </p>
      <p> {votes ? `votes: ${votes}`  : 'No Votes'} </p>
    </>
  ) 
}

const MostVoted = ({votes, anecdotes}) => {
  const arrayCopy = [...votes]
  const mostVoted = votes.indexOf(arrayCopy.sort((a, b) => a - b )[votes.length - 1])
  const bestAnecdote = anecdotes[mostVoted]

  if (!votes.every(value => value === 0)) {
    return (
      <>
        <h1> Anecdote with most votes </h1>
        <p> {bestAnecdote} </p>
      </>
    )
  }
  return ( <> No anecdotes with votes yet </>)
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  // create an array filled of zeros
  const votesArr = new Uint16Array(anecdotes.length)
  const [votes, setVotes ] = useState(votesArr)

  if(selected >= anecdotes.length) {
    setSelected(0)
  }
  
  const nextAnecdote = () => {
    setSelected(selected + 1)
  }

  const randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber)
  }

  const voteAnecdote = () => {
    // always remember to copy the array or object
    // and not mutate directly
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy) 
  }

  const returnMostVoted = () => {
    const myArray = [...votes]
    const mostVoted = votes.indexOf(myArray.sort((a, b) => a - b )[votes.length - 1])
    return mostVoted
  }

  

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <MostVoted votes={votes} anecdotes={anecdotes}/>
      <br/>
      <br/>
      <Button onClick={nextAnecdote} text="next anecdote"/>      
      <Button onClick={randomAnecdote} text="random anecdote"/>
      <Button onClick={voteAnecdote} text="vote"/>
    </div>
  )
}

export default App;
