import React, { useState } from 'react'

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)

const StatisticsLine = ({text, value}) => {
  return (
    <tr> 
      <td>
        {text} 
      </td>
      <td>
        {value} 
      </td>
    </tr>)
}

const Statistics = ({reviews}) => {
  const countAll = () => {
    return Object.values(reviews).reduce(
      (number, accumulator) => number + accumulator, 0
    )
  }

  const average = () => {
    const reviewsAverage = (reviews.good - reviews.bad) / 3
    return reviewsAverage
  }

  const positivePercentage = () => {
    return (reviews.good / countAll()) * 100 || 0
  }


  if (countAll() === 0) {
    return (
      <div>
        <h1>Satistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <StatisticsLine text="Good" value={reviews.good}/>
          <StatisticsLine text="Neutral" value={reviews.neutral}/>
          <StatisticsLine text="Bad" value={reviews.bad}/>
          <StatisticsLine text="All" value={countAll()}/>
          <StatisticsLine text="Average" value={average()}/>
          <StatisticsLine text="Positive" value={positivePercentage() + '%'}/>
        </tbody>
      </table>

    </div>
  )
} 

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral:0,
    bad: 0
  })

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => {setReviews({...reviews, good: reviews.good + 1})}} text="good"/>
      <Button onClick={() => {setReviews({...reviews, neutral: reviews.neutral + 1})}} text="neutral"/>
      <Button onClick={() => {setReviews({...reviews, bad: reviews.bad + 1})}} text="bad"/>

      <Statistics reviews={reviews}/>
    </div>
  );
}

export default App;
