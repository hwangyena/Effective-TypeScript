// 3. 다음을 오류가 없도록 해주세요.
const mycoffee: {
  name: string;
  price?: number;
  size?: string;
} = {
  name: 'mocha',
};
mycoffee.price = 6000;
mycoffee.size = 'Large';
