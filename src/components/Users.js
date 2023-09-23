import { useEffect, useState } from "react";

let Users = () => {

    const [userData,setUserData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        callApi();
    },[])
    let callApi = async () => {
        //fetch is used to make api calls.
        let res = await fetch('https://reqres.in/api/users?page=2');
        let jsonResponse = await res.json();
        //console.log(await res.json());
        //Adding custom delay
        setTimeout(()=>{
            setUserData(jsonResponse.data);
            setIsLoading(false);
        },5000)
        console.log(userData);
    }
    return isLoading ? 
        (<div>
        <h4>Loading user data...</h4>
        </div>) 
        : 
        (
        <div>
            <h2 style={{textAlign:'center'}}>Users</h2>
            <div className="dishes-container">
            {
                userData.map((user)=>{
                    return (
                        <div className="dish-card">
                            <img className="dish-card-image" src={user.avatar}/>
                            <p>{user.email}</p>
                            <p>{user.first_name}</p>
                            <p>{user.last_name}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
        
    )
}

export default Users;