import { useState } from 'react'
import { Box, Heading } from '@chakra-ui/react';
import './App.css'
import Header from './components/Header'
import TaskCard from './components/TaskCard';

function App() {

  const [tasks, setTasks] = useState<{title: string, task: string}[]>([
    {
      title: "title",
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias nulla blanditiis autem eos praesentium animi laboriosam voluptatum nobis consectetur ea tempora nam, minus sint asperiores ducimus saepe totam hic?'
    },
    {
      title: "title",
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias nulla blanditiis autem eos praesentium animi laboriosam voluptatum nobis consectetur ea tempora nam, minus sint asperiores ducimus saepe totam hic?'
    },
    {
      title: "title",
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias nulla blanditiis autem eos praesentium animi laboriosam voluptatum nobis consectetur ea tempora nam, minus sint asperiores ducimus saepe totam hic?'
    },
  ])

  return (
    <div className='app'>
      <Header />

      <Box bg={'gray.50'} minH={'100vh'} pb={7}>
        <Box maxW={700} ml={'auto'} mr={'auto'} pt={32}>
          <Heading mb={10}>Tasks: <span className='countOfTasks'>{tasks.length}</span></Heading>
          {tasks.map((task, id) => (
            <TaskCard key={id} count={id} title={task.title} desc={task.task}  />
          ))}
        </Box>

      </Box>
    </div>
  )
}

export default App
