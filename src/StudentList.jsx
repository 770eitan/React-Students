import Student from "./Student";
const StudentList = (props) => {
    return ( 
        props.studentsArray.map((student)=><Student student={student} />)
     );
}
 
export default StudentList;