import { useEffect, useState } from 'react'
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const [boards, setBoards] = useState([
    {id: 1, title: "Todo", items: [{id: 1, title: "Do something"}, {id: 2, title: "Buy Some stuff"}]},
    {id: 2, title: "In Process", items: [{id: 4, title: "Go outside"}]},
    {id: 3, title: "Completed", items: []}
  ])

  const [selectedId, setSelectedId] = useState<string | null>()
  const [selected, setSelected] = useState<{title: string}>()

  function selectedTodo() {
    let selectedTodos = []
    for (let i = 0; i < boards.length; i++) {
      for (let j = 0; j < boards[i].items.length; j++) {
        selectedTodos.push(boards[i].items[j])
      }
    }
    setSelected(selectedTodos.find(i => i.id === Number(selectedId)))
  }
  
  useEffect(() => {
    selectedTodo()
  }, [selectedId])


  return (
    <div className='app'>
      <Header />

      <Box bg={'gray.50'} minH={'100vh'} pb={7}>
        <Box maxW={1200} px={12} ml={'auto'} mr={'auto'} pt={32}>
          <Heading mb={10}>Tasks: <span className='countOfTasks'>{tasks.length}</span></Heading>
          {/* {tasks.map((task, id) => (
            <TaskCard key={id} count={id} title={task.title} desc={task.task}  />
          ))} */}
          <Flex justifyContent='space-between' gap={3}>
            {boards.map(board => (
              <Box flex={'1'} key={board.id}>
                <Heading as='h3' size='md' px={3} py={1} borderRadius={'6'} border='1px' borderColor='gray.200' background={'white'} fontWeight={500}>{board.title}</Heading>
                <Box>
                  {board.items.map(item => (
                    <motion.div 
                      key={item.id} 
                      className='card'
                      layoutId={String(item.id)} onClick={() => setSelectedId(String(item.id))}
                    >
                      <Text color='black' fontSize="14">4 May 2032</Text>
                      <Heading as='h4' size='lg' mt={2} fontWeight={500}>
                        {item.title}
                      </Heading>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>

      </Box>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className='fullCard'>
              <Text color='black' fontSize="16">4 May 2032</Text>
              <Heading as={'h2'} fontSize={'4xl'} fontWeight={500}>{selected?.title}</Heading>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
