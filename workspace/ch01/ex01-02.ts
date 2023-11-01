(() => {
  // string
  var str: string = 'hello';
  // number
  var age: number = 30;
  // boolean
  var done: boolean = true;
  // object
  var todo: object = { title: 'Typescript 공부', done: false };
  // Array
  var items: Array<string> = ['JS 공부', 'TS 공부'];
  var todoList: string[] = ['JS 프로젝트', 'TS 프로젝트'];
  // tuple
  var users: [string, number] = ['김철수', 30];
  // any
  var username: any = '이일구';
  // null
  var nullVal = null;
  // undefined
  var undefinedVal;

  console.log(
    str,
    age,
    done,
    todo,
    items,
    todoList,
    users,
    username,
    nullVal,
    undefinedVal
  );
  console.log(
    typeof str,
    typeof age,
    typeof done,
    typeof todo,
    typeof items,
    typeof todoList,
    typeof users,
    typeof username,
    typeof nullVal,
    typeof undefinedVal
  );
})();
