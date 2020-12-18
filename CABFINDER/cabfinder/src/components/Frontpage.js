import React,{useState} from 'react';


export default function Frontpage() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  // if (details.value)
  // window.location.replace(details.value.url + "?id=" + details.value.id);
    const frontstyle ={
        textAlign:"center"
    };
    const cardStyle ={
        width:"500px",
        height:"500px",
        paddingTop:"70px",
        marginLeft:"500px",
        backgroundColor:"#FB9403"
    }
   
    return (
        <form action="/cdashboard"style={{opacity:"80%"}} >
        <div style ={frontstyle}>
         <div>
            <div className="row-md-100 mt-5">
            <div className="col-md-1000">
          <div className="card card-body" style={cardStyle}>
            <h1> Login</h1>
           <div className="form-group" >
                <span className="badge badge-danger m-2" >Email</span>
                <br />
                <input value={email} onChange={(e) =>setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-danger m-2" htmlFor="password">
                  Password
                </span>
                <br />
                <input value={password} onChange={(e) =>setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                />

            <button className="btn btn-primary
            btn-block" style={{width:"300px",marginLeft:"80px",marginTop:"50px",backgroundColor:"black"}}  
            link="true"
            
            type="submit">Login</button>
             <p className="lead mt-4">
              No Account? <a href="/register">Register</a>
            </p>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </form>
        
        
    )
}
