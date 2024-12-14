import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import QuestionComponent from './question-component'

const questions = [
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      text: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      id: 3,
      text: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
  ]
  

function StudentExercisePage () {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [showResults, setShowResults] = useState(false)
  
    const handleAnswer = (answer) => {
      setUserAnswers([...userAnswers, answer])
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResults(true)
      }
    }
  
    const calculateScore = () => {
      return questions.reduce((score, question, index) => {
        return score + (question.correctAnswer === userAnswers[index] ? 1 : 0)
      }, 0)
    }
  
    if (showResults) {
      const score = calculateScore()
      return (
        <Card className="max-w-md mx-auto mt-8">
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">You scored {score} out of {questions.length}</p>
            {questions.map((question, index) => (
              <div key={question.id} className="mb-4">
                <p className="font-semibold">{question.text}</p>
                <p className="text-sm">Your answer: {userAnswers[index]}</p>
                <p className="text-sm">Correct answer: {question.correctAnswer}</p>
                <p className={`text-sm ${userAnswers[index] === question.correctAnswer ? "text-green-600" : "text-red-600"}`}>
                  {userAnswers[index] === question.correctAnswer ? "Correct!" : "Incorrect"}
                </p>
              </div>
            ))}
            <Button onClick={() => {
              setCurrentQuestion(0)
              setUserAnswers([])
              setShowResults(false)
            }} className="mt-4">
              Restart Quiz
            </Button>
          </CardContent>
        </Card>
      )
    }
  
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <QuestionComponent
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </CardContent>
      </Card>
    )
}

export default StudentExercisePage