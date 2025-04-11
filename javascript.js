//Student Object
const student = {
    name: "John Doe",
    age: 20,
    enrolled: true,
    courses: ["Math", "Science", "English"],
    displayInfo: function() {
      return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
  };

  // JSON Operations
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
const studentParsed = JSON.parse(studentJSON);
console.log(studentParsed);

// Destructuring Assignment
const { name, courses } = student;
console.log(name);
console.log(courses);