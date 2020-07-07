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

