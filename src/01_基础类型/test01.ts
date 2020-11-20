(() => {
//    布尔值
    let isDone: boolean = false;
    isDone = true;

//    数字

})();
(() => {
    interface ICRUD<T> {
        data: Array<T>

        save(item: T): number

        getById(id: number): T
    }

    class User {
        id?: number;
        name: string;
        age: number;

        constructor(name, age) {
            this.name = name;
            this.age = age
        }
    }

    const user1 = new User('hahah', 13);
    const user2 = new User('haha', 13);

    class UserCRUD implements ICRUD<User> {
        data: Array<User> = [];

        save(item: User): number {
            const id = Date.now();
            item.id = id;
            this.data.push(item);
            return -1
        }

        getById(id: number): User {
            return this.data.find(item => item.id === id)
        }
    }


})();

