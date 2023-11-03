(() => {
  interface Todo {
    _id: string;
    title: string;
    content: string;
  }

  const todo1: Readonly<Todo> = {
    _id: '1',
    title: '할일 1',
    content: '내용 1',
  };

  console.log(todo1.content.substring(1, 2));
})();
