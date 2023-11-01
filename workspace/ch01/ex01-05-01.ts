// 유니언 타입
(() => {
  type Message = string | number | boolean;
  function print(msg: Message): void {
    if (typeof msg === 'string') { // 타입 가드 -> 이 변수가 명확히 어떤 타입인지 알 수 있게
      console.log(`${msg} 글자수 : ${msg.length}`);
    } else if (typeof msg === 'number') {
      console.log(`${msg} + 10 =  ${msg + 10}`);
    } else {
      console.log(`${msg}: ${msg ? '참' : '거짓'}`);
    }
  }
  print('world');
  print(200);
  print(false);
})();
