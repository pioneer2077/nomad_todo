import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../recoil/todo.atom";
import CreateToDo from "./CreateToDo";
import { Categories, IToDo } from "../interface/hookform.interface";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue<IToDo[]>(toDoState);
  console.log(toDos);
  const selectorOutPut = useRecoilValue(toDoSelector);
  console.log(
    "🚀 ~ file: TodoList.tsx:12 ~ ToDoList ~ selectorOutPut:",
    selectorOutPut
  );
  //아아. atom의 값을 어떤 순수함수에 넣어서 나온 값이 selector니까. 값이니까 useRecoilValue로 가지고 올 수 있었던거고.
  const categorizedValue = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setCategory(value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {categorizedValue?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
