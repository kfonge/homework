import { useState, useEffect } from "react"

function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [category, setCategory] = useState("")
  const [points, setPoints] = useState("")
  const [showAnswer, setShowAnswer] = useState(false)

  const getQuestion = () => {
    fetch("http://jservice.io/api/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].question)
        setQuestion(data[0].question)
        setPoints(data[0].value)
        setCategory(data[0].category.title)
        setAnswer(data[0].answer)
        console.log(data[0].answer)
      })
  }

  return (
    <div className="container">
      <div className="scope">
        <button onClick={getQuestion}>Get Question</button>
        <h3>Category:</h3> <span> {category}</span>
        <h3>Points: </h3> <span>{points}</span>
        <h3>Question: </h3> <span>{question}</span>
        <br></br>
      </div>

      <div>
        {showAnswer ? (
          <div>
            <h3>Answer:</h3> <span>{answer}</span>
          </div>
        ) : (
          <button onClick={() => setShowAnswer(!showAnswer)}>
            Show Answer
          </button>
        )}
      </div>
    </div>
  )
}

export default App
