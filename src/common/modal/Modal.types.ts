import React from "react";
import { Task } from "../../context/AuthContext.types";

export interface ModalProps {
  title: string;
  content?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  mode: "create" | "edit" | "delete";
  task?: Task;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handlePriorityChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
