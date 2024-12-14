/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function QuestionComponent({ question, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedAnswer) {
      onAnswer(selectedAnswer)
      setSelectedAnswer(null)
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Question {question.id}</h2>
      <p className="mb-4">{question.text}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <RadioGroup onValueChange={setSelectedAnswer} value={selectedAnswer || undefined}>
          {question?.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label
                htmlFor={`option-${index}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {String.fromCharCode(65 + index)}. {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <Button type="submit" disabled={!selectedAnswer}>
          Submit Answer
        </Button>
      </form>
    </div>
  )
}

