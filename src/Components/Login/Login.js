import { useState } from "react";

const Login = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[users,setUsers]=useState([]);

    const addUsers=(e)=>{
        e.preventDefault();
        setUsers([...users,{userName:name,userEmail:email,userPass:password}])
        setName('')
        setEmail('')
        setPassword('')
    }
  return (
    <>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name"/>
        </div>
        <div>
          <label>Email:</label>
          <input type="Email" value={email}onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"/>
        </div>
        <div>
          <label>Password</label>
          <input type="passwore" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your passwore"/>
        </div>
        <button onClick={addUsers}>Submit</button>
      </form>
      <div>
        <ul style={{listStyleType:'none'}} >
            {users.map((user)=>
            <li><b>Name :</b> {user.userName} ----- <b>Email :</b>{user.userEmail}</li>)}
        </ul>
      </div>
    </>
  );
}; 
export default Login;
