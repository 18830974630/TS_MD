(function () {
    function greeter(person) {
        return 'Hello, ' + person;
    }
    var user = 'Yee';
    console.log(greeter(user));
})();
(function () {
    function greeter(person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }
    var user = {
        firstName: 'Yee',
        lastName: 'Huang'
    };
    console.log(greeter(user));
})();
