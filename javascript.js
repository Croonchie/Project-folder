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
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore);

//Spread Operator
const clonedStudent = { ...student, graduationYear: 2024 };
console.log(clonedStudent);

const newCourses = ["History", "Art"];
const allCourses = [...student.courses, ...newCourses];
console.log(allCourses);