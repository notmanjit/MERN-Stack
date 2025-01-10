let todo = [];

// console.log(req);

while (true) {
    let req = prompt("Enter your request");
    if (req == "quit") {
        console.log("You quit");
        break;
    }
    else if (req == "list") {
        console.log("List");
        console.log(todo);
        console.log("------------------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------------------------");
    }
    else if (req == "add") {
        let task = prompt("Enter the task to add");
        todo.push(task);
        console.log("Task added successfully");
    }
    else if (req == "remove") {
        let task = prompt("Enter the task to remove");
        for (let i = 0; i < todo.length; i++) {
            if (task == todo[i]) {
                todo.splice(i, 1);
            }
        }
        console.log("Task removed successfully");
    }
    else {
        console.log("Enter a valid request");
    }
}