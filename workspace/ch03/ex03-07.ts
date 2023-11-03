(() => {
  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  type ArrayUser = {
    [Prop in keyof User]: string[];
  };

  const kim: User = {
    id: 'kim',
    name: '김철수',
    address: '서울시',
    phone: '01022..',
  };

  const lee: ArrayUser = {
    id: ['kim'],
    name: ['김철수'],
    address: ['서울시', '경기도'],
    phone: ['01022..'],
  };

  console.log(kim);
  console.log(lee);
})();
