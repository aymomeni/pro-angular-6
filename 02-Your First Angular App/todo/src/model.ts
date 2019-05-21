export class Model {
    user;
    items;
    
    constructor() {
        this.user = "Ali";
        this.items = [new TodoItem("Buy Flowers", false),
                      new TodoItem("Get Shoes", true),
                      new TodoItem("Collect Tickets", false),
                      new TodoItem("Study for the new Job", false)]
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}