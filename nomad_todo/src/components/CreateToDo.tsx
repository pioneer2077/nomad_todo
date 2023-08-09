import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../recoil/todo.atom";
import { useForm } from "react-hook-form";
import { IForm } from "../interface/hookform.interface";

const CreateToDo = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
