(function() {

  interface Person {
    firstName: string,
    lastName: string
  }

  function greeter(fullName: Person) {
    return "Hello " + fullName;
  }
  
  let fullName =  {
    firstName: "Theena",
    lastName: "Dayalan"
  };
  
  document.textContent = greeter(fullName);
})();



(function() {
  class Student {
      fullName: string;
      constructor(public firstName, public middleName, public lastName) {
          this.fullName = firstName + middleName + lastName;
      }
  }

  interface Person {
    firstName: string,
    lastName: string
  }

  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }

  let user = new Student("Jane", "M.", "User");

  document.body.textContent = greeter(user);
})();

