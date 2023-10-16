var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var QuestionText = /** @class */ (function () {
    function QuestionText() {
    }
    return QuestionText;
}());
// enum Dificulty {
//     None = 0,
//     Easy = 1,
//     Medium = 2,
//     Hard = 3 
// }
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
//Andrei's work
var QuestionView = /** @class */ (function () {
    function QuestionView(repository) {
        this.repository = repository;
    }
    QuestionView.prototype.loadAllQuestions = function () {
        var allQuestions = this.repository.getAllQuestions();
        //For testing pupose I would use hardcoded questions, until getAllQuestions is implemented;
        for (var _i = 0, allQuestions_1 = allQuestions; _i < allQuestions_1.length; _i++) {
            var question = allQuestions_1[_i];
            //display in the UI; DOM Manipulation
        }
    };
    return QuestionView;
}());
//Andreea's work
var LocalRepository = /** @class */ (function () {
    function LocalRepository() {
    }
    // getQuestionsByDifficulty() {
    //     throw new Error("Method not implemented.");
    // }
    // insertQuestion(question: Question) {
    //     throw new Error("Method not implemented.");
    // }
    LocalRepository.prototype.getAllQuestions = function () {
        console.log("Inside getAllQuestions from LocalRepository");
        //Call to db.json to load all questions.
        //See Ajax and promises course.
        return [];
    };
    return LocalRepository;
}());
//Raluca's work
var ThirdPartyRepository = /** @class */ (function () {
    function ThirdPartyRepository() {
    }
    ThirdPartyRepository.prototype.getAllQuestions = function () {
        console.log("Inside getAllQuestions from ThirdPartyRepository");
        //Call to third party api to load all questions.
        //See Ajax and promises course.
        //Map what you get from third party to Question
        return [];
    };
    return ThirdPartyRepository;
}());
var questionView = new QuestionView(new ThirdPartyRepository());
questionView.loadAllQuestions();
var Address = /** @class */ (function () {
    function Address(country, city, addressLine1) {
        this.country = country;
        this.city = city;
        this.addressLine1 = addressLine1;
    }
    Address.description = "Here you can find all RO addresses";
    return Address;
}());
var Person = /** @class */ (function () {
    function Person(name, uniqueIdentifier, address) {
        this.name = name;
        this.uniqueIdentifier = uniqueIdentifier;
        this.address = address;
    }
    Person.prototype.changeAddress = function (newAddress) {
        this.address = newAddress;
        //Save it to db;
    };
    return Person;
}());
// interface ITest {
//     loginX(username: string, password: string): void;
// }
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(username, password, name, uniqueIdentifier, address) {
        var _this = _super.call(this, name, uniqueIdentifier, address) || this;
        _this.username = username;
        _this.password = password;
        return _this;
    }
    // loginX(username: string, password: string): void {
    //     throw new Error("Method not implemented.");
    // }
    User.prototype.login = function (username, password) {
        if (this.validateUser(username, password))
            console.log("Login successfully");
        else
            console.log("Login failed");
    };
    //Either a settter on password or a function;
    User.prototype.updatePassword = function (username, oldPassword, newPassword) {
        var isUserValid = this.validateUser(username, oldPassword);
        if (!isUserValid)
            return;
        var isPasswordValid = this.validatePassword(newPassword);
        if (!isPasswordValid)
            return;
        this.password = newPassword;
        console.log("Password changed");
    };
    User.prototype.validateUser = function (username, password) {
        var isValid = username === this.username && password === this.password;
        if (!isValid)
            console.log("Invalid user!");
        return isValid;
    };
    User.prototype.validatePassword = function (password) {
        if (password.length < 6) {
            console.log("Minimum characters length: 6");
            return false;
        }
        return true;
    };
    return User;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(username, password, name, uniqueIdentifier, address) {
        return _super.call(this, username, password, name, uniqueIdentifier, address) || this;
    }
    Admin.prototype.login = function (username, password) {
        console.log("Admin login");
        _super.prototype.login.call(this, username, password);
    };
    Admin.prototype.removeUser = function (username) {
        console.log("User removed");
    };
    return Admin;
}(User));
var admin1 = new Admin("andrei.dascal", "password.123", "Andrei Dascal", "123445567", new Address("Romania", "Cluj-Napoca", "Str. ..."));
function logUser(user) {
    console.log(user.username);
}
var person1 = admin1;
logUser(admin1);
logUser(person1);
//# sourceMappingURL=oop.js.map