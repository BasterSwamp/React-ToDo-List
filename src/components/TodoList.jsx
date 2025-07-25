import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, selectedTab } = props;

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            // todoIndex={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            {...props}
            todo={todo}
          />
        );
      })}
    </>
  );
}
