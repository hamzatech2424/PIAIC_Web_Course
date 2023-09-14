
let todos:any[] = [];

const addTod = (todo) =>{
    todos.push(todo)
}


const removeToDo = (item) =>{
    todos = todos.filter((todo)=>todo._id != item._id)
}


const updateTodo = (item) => {
    todos = todos.map((todo)=>todo._id == item._id ? {...todo,name:"play cod 2"}:{...todo})
}

const idGenerator = Math.floor(Math.random()*12345)

// addTod({_id:1,name:'play cod 4',active:false})
// addTod({_id:2,name:'play cricket',active:false})
// removeToDo({_id:2,name:'play cricket',active:false})
// updateTodo({_id:1,name:'play cod 4',active:false})


// console.log("Todo Array =>",todos)


let person = {
    name:'Bilal',
    rollNo:1,
    degree:"BSCS"
}









