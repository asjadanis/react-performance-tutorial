import { useState } from "react";

const AddItem = (props) => {
  const [item, setItem] = useState("");

  const onChange = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    if (!item) {
      return;
    }
    props.onAddItem(item);
    setItem("");
  };

  return (
    <>
      <input
        value={item}
        onChange={onChange}
        type="text"
        placeholder={props.placeholder}
      />
      <button onClick={addItem}> Add </button>
    </>
  );
};

export default AddItem;
