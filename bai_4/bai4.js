function sum(a, b) {
    return a + b;
}

console.log('sum a + b =',sum(6,3));

function isPrime(num) {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}
console.log(isPrime(7));

function tinhcuvihinhvuong(canh) {
  return 4 * canh;
}

function tinhdientichhinhvuon(canh) {
  return canh * canh;
}

console.log(tinhcuvihinhvuong(5)); 
console.log(tinhdientichhinhvuon(5));

function tinhchuvihinhchunhat(chieudai, chieurong) {
  return 2 * (chieudai + chieurong);
}
function dientichhinhchunhat(chieudai, chieurong) {
  return chieudai * chieurong;
}
console.log(tinhchuvihinhchunhat(5, 3)); 
console.log(dientichhinhchunhat(5, 3)); 

const PI = Math.PI;
function tinhChuViHinhTron(radius) {
    return 2 * PI * radius;
}
function tinhDienTichHinhTron(radius) {
    return PI * radius * radius;
}
console.log(tinhChuViHinhTron(3));
console.log(tinhDienTichHinhTron(3)); 



//Hàm trong JavaScript giúp chia nhỏ bài toán thành các khối mã có thể tái sử dụng.
//Cú pháp của hàm đơn giản và dễ hiểu, với khả năng nhận tham số và trả về giá trị.