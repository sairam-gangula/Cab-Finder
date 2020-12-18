import React, { useContext, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
// import '../style.css';
import  './back.css'
export default function Customer() {
  const [ststate, setStstate] = useState("");
  const [stcity, setStcity] = useState("");
  const [ststreet, setStstreet] = useState("");
  const [endstate, setEndstate] = useState("");
  const [endcity, setEndcity] = useState("");
  const [endstreet, setEndstreet] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const { addRide } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newRide = {
      id: Math.floor(Math.random() * 100000000),
      ststate,
      stcity,
      ststreet,
      endstate,
      endcity,
      endstreet,
      date,
      time,
      type,
    };
    addRide(newRide);
    console.log("State:", ststate);
    console.log("City:", stcity);
    console.log("Street", ststreet);
    console.log("State:", endstate);
    console.log("City:", endcity);
    console.log("Street", endstreet);
    console.log("Date:", date);
    console.log("Time", time);
    console.log("Type:", type);
    window.location.replace("/NYCmap");
  };
 
  return (
    
    <form  onSubmit={onSubmit} style={{opacity:"80%"}} method="POST">
      {/* <img src ="/images/Taxi.jpeg" /> */}
      <div className="row-md-100 mt-5" >
        <div className="col-md-1000">
          <div >
            <div
              className="card card-body"
              style={{
                width: "500px",
                marginLeft: "500px",
                backgroundColor: "#FB9403",
              }}
            >
              <div>
                <label style={{ marginLeft: "133px", fontSize: "25px" }}>
                  Choose your Ride
                </label>
                <div >
                  <div className="form-group">
                  <span className="badge badge-danger m-2">Start State</span>
                  <br />
                  <input
                    value={ststate}
                    onChange={(e) => setStstate(e.target.value)}
                    type="text"
                    id="name"
                    name="text"
                    className="form-control"
                    placeholder="Enter your State"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2"> start City</span>
                  <br />
                  <input
                    value={stcity}
                    onChange={(e) => setStcity(e.target.value)}
                    type="text"
                    id="name"
                    name="text"
                    className="form-control"
                    placeholder="Enter your City"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2"> Start Street</span>
                  <br />
                  <input
                    value={ststreet}
                    onChange={(e) => setStstreet(e.target.value)}
                    type="text"
                    id="name"
                    name="text"
                    className="form-control"
                    placeholder="Enter your Street"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2">End State</span>
                  <br />
                  <input
                    value={endstate}
                    onChange={(e) => setEndstate(e.target.value)}
                    type="text"
                    id="name"
                    name="text"
                    className="form-control"
                    placeholder="Enter your State"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2">End City</span>
                  <br />
                  <input
                    value={endcity}
                    onChange={(e) => setEndcity(e.target.value)}
                    type="text"
                    id="name"
                    name="text"
                    className="form-control"
                    placeholder="Enter your City"
                  />
                </div>
                <div className="form-group">
                  <span className="badge badge-danger m-2">End Street </span>
                  <br />
                  <input
                    value={endstreet}
                    onChange={(e) => setEndstreet(e.target.value)}
                    type="text"
                    id="name"
                    name="text"
                    className="form-control"
                    placeholder="Enter your Street"
                  />
                </div>
                  <span
                    className="badge badge-danger m-2"
                    style={{ backgroundColor: "black" }}
                  >
                    Date
                  </span>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <span
                    className="badge badge-danger m-2"
                    style={{ backgroundColor: "black" }}
                  >
                    Time
                  </span>
                  <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <span
                    className="badge badge-danger m-2"
                    style={{ backgroundColor: "black" }}
                  >
                    Type
                  </span>
                  <input
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    type="text"
                    id="type"
                    name="type"
                    className="form-control"
                    placeholder="Enter type of car prefered"
                  />
                 
                  <Button
                    style={{
                      marginTop: "10px",
                      marginLeft: "133px",
                      backgroundColor: "black",
                      fontSize: "25px",
                      color:"white"
                    }}
                    link="true"
                    type="submit"
                    className="btn btn-outline-secondary"
                  >
                    Search for cabs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
