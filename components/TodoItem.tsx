"use client";

import { MdDelete } from "react-icons/md";

type TodoItemProp = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  toggleCompleted: (id: string, completed: boolean) => void;
};

const TodoItem = ({
  id,
  title,
  description,
  completed,
  toggleCompleted,
}: TodoItemProp) => {
  return (
    <div className="flex items-center text-slate-100 justify-between my-3 p-2 px-4 rounded-2xl bg-slate-800">
      <div>
        <h1
          className={`text-2xl font-semibold ${
            completed ? "line-through text-slate-400" : ""
          }`}
        >
          {title}
        </h1>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="flex gap-3">
        <button className="p-2 font-semibold rounded-xl hover:text-slate-900 hover:bg-slate-200">
          Update
        </button>
        <input
          className="checked:text-slate-900 checked:bg-slate-100"
          type="checkbox"
          name="completed"
          id={id}
          defaultChecked={completed}
          onChange={(e) => toggleCompleted(id, e.target.checked)}
        />
        <button>
          <MdDelete className="bg-red-400 hover:bg-red-600 p-1 text-3xl rounded-xl" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
