let numArr = [123,48,839,55,8,7465]
let strArr = ['Door', 'Dog', 'Duck', 'Dave']

// numArr.forEach((ELEMENT, INDEX, ARRAY) => {

// }) TEMPLATE

numArr.forEach((num, i, array) => {
    //simply going to perform a series of tasks, doesn't return anything
    console.log(num)
})

let result = []

numArr.forEach((num, i, array) => {
    //simply going to perform a series of tasks, doesn't return anything
    if(num>500){
        result.push(num)
        console.log("thats a large purchase")
    } else {
        console.log('thats small')
    }
})

//----------forEach ^^------------

let newFilteredArray = strArr.filter((str, i, arr) => {
    // return str.includes('Do')
    if(i % 2 === 0) {
        return true
    }
    if(str.length > 3) {
        return true
    } else if(str.includes('g')) {
        return true ///main condition: has to return a conditional or T/F
    }
})

console.log(newFilteredArray)

//------------filter ^^----------------

let history = strArr.map((str, i, arr) => {
    // return `I bought ${str} and it was cool.`
    if(str === 'Dave') {
        return 'I met Dave, his is cool dude'
    } else {
        return `I bought a ${str}`
    }
})

// let history = strArr.map(function(str, i, arr) {

// }) (function declaration)

console.log(history)

//-----------whatever map returns becomes an array MAP^^----------

let total = numArr.reduce((acc, cur) => {
    // return acc + cur
    if(cur > 500) {
        return acc + cur
    } else {
        return acc
    }
}, 0)

console.log(total)

//-------complicated below--------

let employees = [
    {
        name: 'Brady',
        salary: 9001,
        isAdmin: false,
        trinkets: ['timer', 'pen', 'paper']
    },
    {
        name: 'Joely',
        salary: 1000,
        isAdmin: false,
        trinkets: ['cat', 'computer', 'food', 'thing']
    },
    {
        name: 'Jenny',
        salary: 110000,
        isAdmin: true,
        trinkets: ['cup', 'notebook', 'phone', 'water', 'pencil', 'stuff']
    },
    {
        name: 'India',
        salary: 10,
        isAdmin: false,
        trinkets: ['toy', 'snack']
    },
    {
        name: 'Corbin',
        salary: 80,
        isAdmin: false,
        trinkets: ['doritos', 'chips', 'candy', 'stuffie', 'computer', 'headphones']
    },
]

let deptCost = employees.reduce((acc, cur) => {
    return acc + cur.salary
}, 0)

console.log(deptCost)

let overpaidEmpl = employees.filter((emp, i, arr) => {
    if(emp.salary > 100000) {
        return true
    } else if(emp.trinkets.length > 3) {
        return true
    }
    // return emp.salary > 100000
})

console.log(overpaidEmpl)

overpaidEmpl.forEach((emp, i, arr) => {
    if(emp.salary > 100000 && emp.trinkets.length > 3) {
        console.log(`${emp.name} is overpaid and has a lot of trinkets. We suggest you chill out`)
    } else if(emp.salary > 1000) {
        console.log(`We suggest reducing ${emp.name}'s salary`)
    } else if (emp.trinkets.length > 3) {
        console.log(`Tell ${emp.name} to clean up their desk`)
    }
})

//-------forEach ^^------------

const introductions = employees.map((emp, i, arr) => {
    if(emp.isAdmin) {
        return `Hi, my name is ${emp.name}, and I'm an admin here.`
    } else {
        return `Hi, I'm ${emp.name}. I like soup.`
    }
})
console.log(introductions)

//----------MAP^^-----------

const discussion = employees
    .filter((emp, i, arr) => {
     return emp.trinkets.length > 3
})
    .map((emp, i, arr) => {
      return `${emp.name} is sharing all about their ${emp.trinkets.length} trinkets.`
})

console.log(discussion)