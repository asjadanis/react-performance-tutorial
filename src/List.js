import AddItem from "./AddItem";

const List = (props) => {
  const { items } = props;

  console.log("List rendered: ", props.listKey);

  return (
    <>
      <AddItem onAddItem={props.onAddItem} placeholder="Add book" />
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
