import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Register() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
 

  const { addUser } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 100000000),
      name,
      contact,
      age,
      gender,
      email,
      password,
      state,
      city,
      street
      
    };
    addUser(newUser);
    console.log("Name:", name);
    console.log("Phone Number", contact);
    console.log("Age:", age);
    console.log("Gender", gender);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("State:", state);
    console.log("Street:", street);
    console.log("City:", city);
    window.location.replace("/cdashboard");
  };
  const cardStyle = {
    width: "550px",
    marginLeft: "500px",
    opacity:"80%",
    backgroundColor:"#FB9403"
  };
  return (
    <form onSubmit={onSubmit} method="POST">
      <div>
        <div>
          <div className="row-md-100 mt-5">
            <div className="col-md-1000">
              <div className="card card-body" style={cardStyle}>
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <div className="form-group">
                  <span className="badge badge-danger m-2">name</span>
                  <br />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2">Phone Number</span>
                  <br />
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    type="number"
                    id="contact"
                    name="contact"
                    className="form-control"
                    placeholder="Enter your Contact number"
                  />
                </div>

                <div className="form-group">
                  <span className="badge badge-danger m-2">Age</span>
                  <br />
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    id="age"
                    name="age"
                    className="form-control"
                    placeholder="Enter your age"
                  />
                </div>

                <div className="form-group">
                  <span
                    className="badge badge-danger m-2"
                    style={{ backgroundColor: "#E72178" }}
                  >
                    Gender
                  </span>
                  <br />
                  <input
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    type="text"
                    id="text"
                    name="gender"
                    className="form-control"
                    placeholder="Enter your Gender"
                  />
                </div>

                <div className="form-group">
                  <span className="badge badge-danger m-2">Email</span>
                  <br />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2" htmlFor="password">
                    State
                  </span>
                  <br />
                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    id="text"
                    name="state"
                    className="form-control"
                    placeholder="Enter your state"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2" htmlFor="password">
                    City
                  </span>
                  <br />
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    id="text"
                    name="city"
                    className="form-control"
                    placeholder="Enter City"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2" htmlFor="password">
                    Street
                  </span>
                  <br />
                  <input
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    type="text"
                    id="text"
                    name="street"
                    className="form-control"
                    placeholder="Enter Street"
                  />
                </div>
                <button
                  className="btn btn-primary
            btn-block"
                  style={{
                    backgroundColor:"black",
                    width: "300px",
                    marginLeft: "100px",
                    marginTop: "50px",
                  }}
                  link="true"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
