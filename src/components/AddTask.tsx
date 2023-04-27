import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AddTaskProps {
  isOpen: boolean
  onClose(): void
}

export default function AddTask({ isOpen, onClose}: AddTaskProps) {
  const [title, setTitle] = useState<string>('')
  const [task, setTask] = useState<string>('')

  const notifySuccess = () => toast.success("TEST Task added! 🙃");
  const notifyError = () => toast.error("TEST Something went wrong! 😭");

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  
    try {
      console.table({title: title, task: task});
      notifySuccess()
      onClose()
    } catch (err) {
      console.log('Error: ' + err);
      notifyError()
    }
  }

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={onSubmitHandler}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input onChange={(e) => setTitle(e.target.value)} type='text' mb={4} />
            </FormControl>
            <FormControl>
              <FormLabel>Task</FormLabel>
              <Textarea mb={4} onChange={(e) => setTask(e.target.value)}></Textarea>
            </FormControl>
            <Button type='submit' colorScheme='purple' mb={2}>Add Task</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
    <ToastContainer />
    </>
  )
}
