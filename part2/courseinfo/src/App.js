import React from 'react'

const Header = ({courseName}) => {
  return (
    <div>
      <h1> {courseName} </h1>
    </div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = ({parts}) => {
  
  const renderParts = () => {
    return parts.map(part => (
      <Part key={part.id} part={part.name} exercise={part.exercises}/>
    ))
  }

  return (
    <div>
      {renderParts()}
    </div>
  )
}

const Total = ({parts}) => {
  const exercises =  parts.map(part => (part.exercises))
  const sum = exercises.reduce((accumulator, actual) => accumulator + actual)
  
  return (
    <div>
      <p>
        Total of {sum} exercises
      </p>
    </div>
  )
}

const Course = ({courses}) => {
  const renderCourses = () => {
    return courses.map(course => (
      <div key={course.id}>
        <Header courseName={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    ))
  }

  return (
    <>
      {renderCourses()}
    </>
  )
}

const App = () => {
    const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses}/>
    </div>
  )
}

export default App
