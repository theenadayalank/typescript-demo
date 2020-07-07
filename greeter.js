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
