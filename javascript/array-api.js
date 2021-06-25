// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const a1 = fruits.join(' ');
    console.log('a1 : ' + a1);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const a2 = fruits.split(', ');
    console.log('fruits : ' + fruits);
    console.log('a2 : ' + a2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    // const a3 = array.sort((a, b) => b-a);
    const a3 = array.reverse();
    console.log('array : ' + array); // reverse는 원본도 바꿈
    console.log('a3 : ' + a3);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const a4 = array.slice(2, 5); // 2이상 5미만
    console.log('array : ' + array); // reverse는 원본도 바꿈
    console.log('a4 : ' + a4);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    console.log('a5 : ' + students[2]);
  }
  
  // Q6. make an array of enrolled students
  {
    const a6 =  students.filter((v, i) => {
      return v.enrolled;
    })
    console.log('a6 : ' + a6);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const a7 =  students.map((v, i) => {
      return v.score;
    })
    console.log('a7 : ' + a7);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const a8 =  students.filter((v, i) => {
      return v.score < 50;
    })
    console.log('a8 : ' + a8);
  }
  
  // Q9. compute students' average score
  {
    const a9 = students.reduce((acc, cur) => {
        return acc + cur.score;
    }, 0);
    console.log('a9 : ' + a9/students.length );
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const a10 = students.map((v, i) => {
      return v.score;
    }).join(', ');
    console.log('a10 : ' + a10);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const a10 = students.map((v, i) => {
      return v.score;
    }).join(', ');
    const a11 = a10.split(', ').sort((a, b) => a - b);
    console.log('a11 : ' + a11);
  }