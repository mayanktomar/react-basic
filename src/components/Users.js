import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser } from "../redux/usersSlice";
import { useDispatch } from "react-redux";

let Users = () => {
    const userData = useSelector((state)=>state.users);
    // const [userData,setUserData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    //If dependency array is not given, useEffect will work every time the component is rendered (re-render case also)
    //If dependency array is empty, useEffect will work only for the first time when the component is rendered (when re-rendered, it wont work)
    //If there are few states given in dependency array, useEffect will work every time one of those states changes.
    
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("Inside Users useEffect")
        if (userData.length==0) {
            callApi();
        } else {
            setIsLoading(false);
        }
    },[])
    let callApi = async () => {
        //fetch is used to make api calls.
        let res = await fetch('https://reqres.in/api/users?page=2');
        let jsonResponse = await res.json();
        //console.log(await res.json());
        //Adding custom delay
        setTimeout(()=>{
            dispatch(addUser(jsonResponse.data));
            setIsLoading(false);
        },2000)
        console.log(userData);
    }
    return isLoading ? 
        (<div>
        <h4>Loading user data...</h4>
        </div>) 
        : 
        (
        <div>
            <h2 style={{textAlign:'center'}}>Founders</h2>
            <div className="dishes-container">
            {
                userData.map((user)=>{
                    return (
                        <div className="dish-card">
                            <Link to={"/founders/"+user.id}>
                                <img className="dish-card-image" src={user.avatar}/>
                                <p>{user.email}</p>
                                <p>{user.first_name}</p>
                                <p>{user.last_name}</p>
                            </Link>  
                        </div>
                    )
                })
            }
        </div>
        </div>
        
    )
}

export default Users;