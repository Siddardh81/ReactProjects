function StudentCard({name,course,gpa}){
  return(
    <>
    <h2>{name}</h2>
    <p>Course: {course}</p>
    <p>GPA: {gpa}</p>
    </>
  );
}
export default StudentCard;