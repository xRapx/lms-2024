
import { useState } from 'react'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


const faqData= [
  {
    question: "What is React?",
    answer: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently."
  },
  {
    question: "What are the key features of React?",
    answer: "Some key features of React include: Virtual DOM for improved performance, component-based architecture, unidirectional data flow, JSX syntax, and a rich ecosystem of tools and libraries."
  },
  {
    question: "What is the difference between state and props in React?",
    answer: "State is mutable and managed within a component, while props are immutable and passed from parent to child components. State is used for data that can change over time, while props are used for passing data and callbacks between components."
  },
  {
    question: "What are React Hooks?",
    answer: "React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 and provide a more direct API to React concepts like state, context, and lifecycle methods."
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer: "useEffect is a Hook that allows you to perform side effects in functional components. It's commonly used for data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but can be optimized to run only when certain values change."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (value) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

