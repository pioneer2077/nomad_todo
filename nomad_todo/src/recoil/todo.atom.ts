import { atom, selector } from "recoil";
import { Categories, IToDo } from "../interface/hookform.interface";
import { recoilPersist } from "recoil-persist";

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});

export const toDoState = atom<IToDo[]>({
  key: "todos",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
//배열을 객체의 특정 값을 기준으로 나눠서, 3개의 배열로 나눠서 리턴했다.
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
