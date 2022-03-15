const Scores = (props) => {
  return (
    <>
     {props.scores.map ((score)=> <div>
              <p>date {score.date}</p>
              <p>score {score.score}</p>
              </div>)}
      
          
        
     
      
    </>
  );
};

export default Scores;
