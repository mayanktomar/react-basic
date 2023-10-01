import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const UserDetailComponent = () => {

  const [user,setUser] = useState({});
  const [isLoading,setIsLoading] = useState(true);

  let params = useParams(); //{userId:'5'}

  useEffect(async ()=>{
    let apiResponse = await fetch('https://reqres.in/api/users/'+params.userId);
    apiResponse = await apiResponse.json();
    setUser(apiResponse.data);
    setIsLoading(false);
  },[])  

  return isLoading ? 
    (
        <div>User detail loading...</div>
    ) :
    (
        //Optional chaining.
        <div className='user-detail-page'>
            <div><img src={user?.avatar} className='user-detail-img'/></div>
            <div>
            <h4>User's first name: {user?.first_name}</h4>
            <h4>User's last nameL {user?.last_name}</h4>
            <h4>User's email: {user?.email}</h4>
            </div>
          
        </div>
    )
}

export default UserDetailComponent