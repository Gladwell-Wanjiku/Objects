const people = [
    {name:'Alice',age:17},
    {name:'Eunice',age:22},
    {name:'Charlie',age:14},
    {name:'Max',age:19},
];
function filterPeople(arr){
    return arr.filter(people => people.age >=18);

}
const adults = filterPeople(people)
console.log(adults)

//2
const products = [
    {name:'Laptop', price:1200, category:'Electronics'},
    {name:'Shirt', price:25, category:'Clothing'},
    {name:'Headphones', price:80, category:'Electronics'},
    {name:'Shoes', price:60, category:'Clothing'}
]
function groupProducts (products){
    return products.reduce((acc, curr)=>{
        if (!acc[curr.category]){
            acc[curr.category] = [];
        }
        acc[curr.category].push(curr);
        return acc;
    }, {});
};
console.log(products)

//3
const students = [
    {name:'John',scores:[90,80,85]},
    {name:'Jane',scores:[95,92,88]},
    {name:'Jim',scores:[70,80,75]},
    {name:'Jill',scores:[85,90,84]},
];
function studentsScore(arr){
     return arr.filter(students =>{
        const general = students.scores.reduce((acc, current)=>acc+current,)/students.scores.length
        return general >=85
     }).map(students=>students.name)
};
const generalMarks = studentsScore(students)
console.log(generalMarks)

//4
const car = {
    make: 'Ford',
    model:'Ranger',
    year: 2023,
    displayInfo: function(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
};
function addAge(car){
    car["age"]= (2024-car.year)
    console.log(car)
}
addAge(car)