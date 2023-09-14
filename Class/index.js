var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todos = [];
var addTod = function (todo) {
    todos.push(todo);
};
var removeToDo = function (item) {
    todos = todos.filter(function (todo) { return todo._id != item._id; });
};
var updateTodo = function (item) {
    todos = todos.map(function (todo) { return todo._id == item._id ? __assign(__assign({}, todo), { name: "play cod 2" }) : __assign({}, todo); });
};
var idGenerator = Math.floor(Math.random() * 12345);
// addTod({_id:1,name:'play cod 4',active:false})
// addTod({_id:2,name:'play cricket',active:false})
// removeToDo({_id:2,name:'play cricket',active:false})
// updateTodo({_id:1,name:'play cod 4',active:false})
// console.log("Todo Array =>",todos)
var person = {
    name: 'Bilal',
    rollNo: 1,
    degree: "BSCS"
};
console.log(person.name);
console.log(person["name"]);
