import React from "react";
import { useRef } from "react";

interface ToDoFormProps {
  onAdd(title: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const KeyPressHendler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // value={title}
        // onChange={changeHendler}
        ref={ref}
        onKeyPress={KeyPressHendler}
        type="text"
        id="title"
        placeholder="Please, input the business"
      />
      <label
        htmlFor="title"
        className="active"
        placeholder="Please, input the business"
      >
        Please, input the business
      </label>
    </div>
  );
};
