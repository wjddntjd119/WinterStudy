class Lecture {
    constructor(hasTutor, lectID, members) {
      this.hasTutor = hasTutor; //강사 유무
      this.lectID = lectID; //강의번호
      this.members = members; //학생 강사가존재하면 맨앞은 강사이름
    }
}
  
function getStudents(classRoom) {
    let {hasTutor, lectID, members} = classRoom;
    let tutor, students;
    //참이면 맨 앞은 강사이름으로 제외시켜버림. 거짓이면 모두 수강생이름
    hasTutor ? [tutor,...students] = members : [...students] = members;
    return students;
}
  
let class1 = new Lecture(false, 'L001', ["Ahn", "Han", "Park"]);
let class2 = new Lecture(true, 'L002', ["Lee", "Choi", "Kim"]);
  
console.log(`강의 : ${class1.lectID}, 수강생 : ${getStudents(class1)}`);
console.log(`강의 : ${class2.lectID}, 수강생 : ${getStudents(class2)}`);