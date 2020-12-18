import React, { useContext, useEffect } from "react";
import { GlobalContext, GlobalState } from "../context/GlobalState"

function Custprofile() {
  const { rdetails } = useContext(GlobalContext);
  return (
    <div style={{ marginTop: "50px" ,opacity:"80%"}}>
      <h3
        style={{
          marginLeft: "650px",   
          marginTop: "50px",
          fontSize: "25px",
          backgroundColor: "#FB9403",
        }}
        className="badge"
      >
        Your Profile
      </h3>
      <h1>
        {" "}
        {rdetails.map((rdetail) => (
          <div className="row-md-100 mt-5">
            <div className="col-md-1000">
              <div
                style={{ marginLeft: "350px", width: "800px",backgroundColor:"#FB9403" }}
                className="card card-body "
              >
                <label style={{ fontSize: "25px", backgroundColor: "white",color:"black" }}>
                  ID:
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                  {rdetail.id}
                </h6>

                <label style={{ fontSize: "25px", backgroundColor: "white",color:"black" }}>
                  Name:
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                  {rdetail.name}
                </h6>

                <label style={{ fontSize: "25px", backgroundColor: "white",color:"black" }}>
                  Phonenumber
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                  {rdetail.contact}
                </h6>

                <label style={{ fontSize: "25px", backgroundColor: "white",color:"black" }}>
                  Age:
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                  {rdetail.age}
                </h6>
                <label style={{ fontSize: "25px", backgroundColor: "white",color:"black" }}>
                  Gender
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "15px" }}>
                  {rdetail.gender}
                </h6>

                <label style={{ fontSize: "25px", backgroundColor: "white",color:"black" }}>
                  Email:
                </label>

                <h6 style={{ fontSize: "25px", marginBottom: "10px" }}>
                  {rdetail.email}
                </h6>
                {/* <label style={{ fontSize: "25px", backgroundColor: "white",color:"black" }}>
                  Price:
                </label> */}
              </div>
            </div>
          </div>
        ))}
      </h1>
    </div>
  );
}

export default Custprofile;
