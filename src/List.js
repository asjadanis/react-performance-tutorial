import { memo } from "react";
import AddItem from "./AddItem";

const List = (props) => {
  const { items, onClick } = props;

  const removeItem = (item) => {
    onClick(item);
  };

  console.log("List rendered: ", props.listKey);

  return (
    <>
      <AddItem onAddItem={props.onAddItem} placeholder="Add book" />
      <ul>
        {items.map((item) => {
          return (
            <li
              onClick={(e) => {
                removeItem(item.item);
              }}
              key={item.id}
            >
              {item.item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default memo(List);
