import React, { useState } from "react";

export interface TodoListProps {
  direction?: "row" | "column";
  listIcon?: "circle" | "dot";
}

export interface ListProps {
  listData: { key: string; value: string }[];
  listIcon?: "circle" | "dot";
  width?: string;
  height?: string;
  fontSize?: string;
  onDelete?: (key: string) => any;
}

export interface AddTodoProps {
  onAdd: (value: string) => any;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    if (value.trim() !== "") {
      onAdd(value);
      setValue("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "5px",
      }}
    >
      <input style={{ flex: 1 }} value={value} onChange={handleChange}></input>
      <button onClick={handleClick} style={{ backgroundColor: "white" }}>
        ADD
      </button>
    </div>
  );
};

const List: React.FC<ListProps & React.HTMLAttributes<HTMLElement>> = ({
  onDelete,
  listData = [],
  listIcon = "dot",
  fontSize = "16px",
}) => {
  const handleClick = (key: string) => {
    onDelete && onDelete(key);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "300px",
        border: "1px solid black",
        borderRadius: " 5px  5px 10px 10px",
        padding: "10px",
      }}
    >
      {listData.map((item) => {
        return (
          <div
            key={item.key}
            onClick={() => {
              handleClick(item.key);
            }}
            style={{
              fontSize: fontSize,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <svg
              className="icon"
              aria-hidden="true"
              style={{ width: "25px", marginRight: "10px" }}
            >
              <use xlinkHref="#icon-peach"></use>
            </svg>
            <div>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export const TodoList: React.FC<
  TodoListProps & React.HTMLAttributes<HTMLElement>
> = ({}) => {
  const [list, setList] = useState<{ key: string; value: string }[]>([]);
  const onAdd = (value: string) => {
    setList([...list, { key: `${+new Date()}`, value: value }]);
  };
  const onDelete = (key: string) => {
    setList((list) => {
      list = list.filter((item) => item.key !== key);
      return [...list];
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "300px",
      }}
    >
      <AddTodo onAdd={onAdd} />

      <List listData={list} onDelete={onDelete} />
    </div>
  );
};
