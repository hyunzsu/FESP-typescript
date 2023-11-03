(() => {
  interface Todo {
    _id: number;
    title: string;
  }

  type OptionalTodo = {
    // [P in '_id' | 'title']?: Todo[P];
    [P in keyof Todo]?: Todo[P];
  };

  const todo1: Todo = {
    _id: 1,
    title: '할일 1',
  };

  const todo2: OptionalTodo = {
    title: '할일 1',
  };
  console.log(todo1, todo2);
})();
