"use client";

import TodoContext from "@/context/TodoContext";
import { Todo } from "@/types/todo";
import {
  VStack,
  Select,
  Input,
  FormControl,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { FormEvent, ChangeEvent, useContext, useState } from "react";

const TodoForm = ({ onModalClose }: { onModalClose(): void }) => {
  const [, dispatch] = useContext(TodoContext);
  const [textInput, setTextInput] = useState("");
  const [additionalInput, setAdditionalInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [isTextInvalid, setIsTextInvalid] = useState(false);
  const [isAdditionalInvalid, setIsAdditionalInvalid] = useState(false);
  const [isCategoryInvalid, setIsCategoryInvalid] = useState(false);

  function categoryChangeHandler(e: ChangeEvent) {
    setCategoryInput((e.target as HTMLSelectElement).value);
    setIsCategoryInvalid(!(e.target as HTMLSelectElement).value);
  }

  function textChangeHandler(e: ChangeEvent) {
    setTextInput((e.target as HTMLInputElement).value);
    setIsTextInvalid(!(e.target as HTMLInputElement).value);
  }

  function additionalTextChangeHandler(e: ChangeEvent) {
    setAdditionalInput((e.target as HTMLInputElement).value);
    setIsAdditionalInvalid(!(e.target as HTMLInputElement).value);
  }

  function TodoSubmitHandler(e: FormEvent) {
    e.preventDefault();
    if (
      !textInput ||
      !additionalInput ||
      !categoryInput ||
      additionalInput.length > 50
    ) {
      if (!textInput) {
        setIsTextInvalid(true);
      }
      if (!additionalInput || additionalInput.length > 50) {
        setIsAdditionalInvalid(true);
      }
      if (!categoryInput) {
        setIsCategoryInvalid(true);
      }
      return;
    }

    const todo: Todo = {
      id: Date.now().toString() + Math.random().toString(),
      date: new Date().toString(),
      status: "ongoing",
      text: textInput,
      additionals: additionalInput,
      category: categoryInput as "work" | "personal",
    };

    dispatch({
      type: "ADD",
      item: todo,
    });

    onModalClose();
  }

  return (
    <>
      <form onSubmit={TodoSubmitHandler}>
        <VStack spacing="5">
          <FormControl isInvalid={isCategoryInvalid}>
            <Select
              placeholder="Category"
              value={categoryInput}
              variant="flushed"
              onChange={categoryChangeHandler}
            >
              <option value="personal">Personal</option>
              <option value="work">Work</option>
            </Select>
            <FormErrorMessage>Category is required.</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={isTextInvalid}>
            <Input
              type="text"
              placeholder="Your task"
              variant="flushed"
              value={textInput}
              onChange={textChangeHandler}
            ></Input>
            <FormErrorMessage>Task can&quot;t be empty.</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={isAdditionalInvalid}>
            <Input
              value={additionalInput}
              type="text"
              placeholder="More about task"
              variant="flushed"
              onChange={additionalTextChangeHandler}
            ></Input>
            <FormErrorMessage>
              Describe your task. No more than 50ch .
            </FormErrorMessage>
          </FormControl>

          <Button
            disabled={
              categoryInput && textInput && additionalInput ? true : false
            }
            type="submit"
            width="full"
            borderRadius="0"
            py="7"
            textTransform="uppercase"
            fontSize="md"
            fontWeight="500"
            bgColor="cyan.600"
          >
            Add your task
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default TodoForm;
