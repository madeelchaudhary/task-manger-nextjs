"use client";

import {
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  IconButton,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TodoAction = ({
  children,
  onDeleteItem,
  onStatusToggle,
}: {
  children: React.ReactNode;
  onDeleteItem(): void;
  onStatusToggle(): void;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  function deleteClickHandler() {
    onDeleteItem();
    onClose();
  }

  function statusClickHandler() {
    onStatusToggle();
    onClose();
  }

  return (
    <Popover
      placement="bottom"
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Actions</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <ButtonGroup spacing="2">
              <IconButton
                onClick={statusClickHandler}
                title="Mark Completed"
                colorScheme={"green"}
                size="sm"
                aria-label={"Mark Completed"}
                icon={<FaCheckCircle />}
              ></IconButton>
              <IconButton
                onClick={deleteClickHandler}
                title="Delete Todo"
                colorScheme={"red"}
                size="sm"
                aria-label={"Delete Todo"}
                icon={<AiFillDelete />}
              ></IconButton>
            </ButtonGroup>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default TodoAction;
