console.log('Hello World from HTML')

let sum= (a, b) =>{
    return a + b;
}
console.log('check sum: 9 + 6 =', sum(6, 9))

let obj = {
    name: 'Eric',
    address: 'ha noi',
    getName: function (){
        return this.name;
    }
}
console.log('>>> get Name obj: ', obj.getName())
