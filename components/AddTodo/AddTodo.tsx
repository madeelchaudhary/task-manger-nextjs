"use client";

import { BiPlus } from "react-icons/bi";
import {
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import TodoForm from "./TodoForm";

const AddTodo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box pos={"absolute"} right="4" top={"75%"}>
        <IconButton
          onClick={onOpen}
          boxShadow={"dark"}
          borderRadius={"full"}
          aria-label="Add Todo"
          boxSize={"80px"}
          bgColor={"cyan.600"}
          icon={<BiPlus size={"40"} color="white" />}
        ></IconButton>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          color={"gray.50"}
          bg="facebook.500"
          borderRadius={0}
          my={{ base: "0", sm: "16" }}
          maxW={{ base: "100vw", sm: "md" }}
          h={{ base: "100vh", sm: "auto" }}
        >
          <ModalHeader textAlign="center" mt="5" fontWeight="400">
            Add new task
          </ModalHeader>
          <ModalCloseButton right={"auto"} left="6" top="8" />
          <ModalBody py={8}>
            <TodoForm onModalClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTodo;
