import React ,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//initial state

const login = {
    ldetails: [
        { id:1, email:"satish@gmail.com",password:"1234"},
        { id:2, email:"sairam@gmail.com",password:"9876"}
    ]
}
const register = {
    rdetails :[
        { id:1,name:"Satish", contact:1235689, age:20,gender:"M",email:"satish@gmail.com",password:"1234",state:"Ragunath Nagar",city:"NY",street:"VJTI" },
        { id:2,name:"Sairam", contact:1789465, age:20,gender:"M",email:"sairam@gmail.com",password:"9876",state:"Ragunath Nagar",city:"NY",street:"VJTI" },
        { id:2,name:"Sunny", contact:1546576, age:20,gender:"M",email:"sunny@gmail.com",password:"7542",state:"Ragunath Nagar",city:"NY",street:"VJTI" }
    ]
}         

const ride = {
    rideDetails:[
            {id:1,state:"Ragunath Nagar",city:"NY",street:"VJTI",date:"20-12-2020",time:"21:15",type:"SUV"}
    ]
}



//Create context
export const GlobalContext = createContext(login);
export const rGlobalContext = createContext(register);
export const rideGlobalContext = createContext(ride);

//Provider

export const GlobalProvider = ({ children }) =>{
    const [state,dispatch]= useReducer(AppReducer,login);
    const [rstate,rdispatch] = useReducer(AppReducer,register);
    const [ridestate,ridedispatch] = useReducer(AppReducer,ride);
    //Actions
    async function addUser(rdetails){
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          try{
            const res = await axios.post("/register", rdetails, config)
            rdispatch({
                type: 'ADD_USER',
                payload:rdetails,
            });
          }catch(err){
              console.log(err);
          }
       
    }
   async function addRide(rideDetails){
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          try{
            const ride = await axios.post("/cdashboard",rideDetails, config)
            // const getride = await axios.get("/cdashboard", rideDetails, config)d
            ridedispatch({
                type: 'ADD_RIDE',
                payload:rideDetails
            });
          }catch(err){
              console.log(err);
          }
          
    }
   
    return(
       <GlobalContext.Provider value ={{
           ldetails:state.ldetails,
           rdetails:rstate.rdetails,
           rideDetails:ridestate.rideDetails,
           addUser,
           addRide
       }}>
           {children}
       </GlobalContext.Provider>);
}
