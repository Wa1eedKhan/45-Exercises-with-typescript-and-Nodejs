interface item{
    name: string
    price: number

}
//create two objects
const Book: item= {
    name: 'Essential Typescript',
    price : 400
}
const Car : item ={
name : 'Honda',
price  : 1000000
}
console.log(`Book Name  : ${Book.name}, price : ${Book.price}`)
console.log(`Car Name  : ${Car.name}, price : ${Car.price}`)