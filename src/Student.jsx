import Scores from "./Scores";

const Student = (props) => {
    return (
    <>
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
      <Scores scores = {props.student.scores}/>
    </>
  );
};

export default Student;
