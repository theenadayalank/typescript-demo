(function () {
    function greeter(fullName) {
        return "Hello " + fullName;
    }
    var fullName = {
        firstName: "Theena",
        lastName: "Dayalan"
    };
    document.textContent = greeter(fullName);
})();
(function () {
    var Student = /** @class */ (function () {
        function Student(firstName, middleName, lastName) {
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
            this.fullName = firstName + middleName + lastName;
        }
        return Student;
    }());
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    var user = new Student("Jane", "M.", "User");
    document.body.textContent = greeter(user);
})();
