(() => {
    function greeter(person) {
        return 'Hello, ' + person
    }

    let user = 'Yee'

    console.log(greeter(user))
})();

(() => {
    interface Person {
        firstName: string
        lastName: string
    }

    function greeter(person: Person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName
    }

    let user = {
        firstName: 'Yee',
        lastName: 'Huang'
    }

    console.log(greeter(user))
})()
