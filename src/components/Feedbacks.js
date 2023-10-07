import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addFeedback } from '../redux/feedbackSlice';
import { useDispatch } from 'react-redux';

const Feedbacks = () => {
  const feedbacks = useSelector((state)=>state.feedbacks);
  console.log("Feedbacks data...",feedbacks);

  const [feedbackGiven, setFeedbackGiven] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  function addFeedbackToStore() {
    let feedbackToAdd = {
        name: username,
        message: feedbackGiven
    }
    dispatch(addFeedback(feedbackToAdd));
    setFeedbackGiven('');
    setUsername('');
  }
  return (
    <div>
        <h2>Feedbacks</h2>
        <div className='feedbacks-container'>
        
        {
        feedbacks.map((feedback)=>{
            return(
                <div className='feecback-card'>
                    {feedback.message}
                    <br/>
                    Given by: {feedback.name}
                    </div>

            )
        })
    }

    </div>

    <br/><br/>
    name: <input type='text' value={username} onChange={(event)=>{setUsername(event.target.value)}}></input>
    <br/>
    message: <input type='textarea' value={feedbackGiven} onChange={(event)=>{setFeedbackGiven(event.target.value)}}></input>
    <button onClick={()=>{addFeedbackToStore()}}>Submit feedback</button>
    </div>

   
    
    
  )
}

export default Feedbacks