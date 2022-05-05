import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import imgAvatar from "../images/Avatar-Img.png";

const DeleteContact = (props) =>{
    const location = useLocation();
    const navigate = useNavigate();
    //console.log(location);

    const{id, email, name} = location.state.contact;

    const removeConatctHandler = (id) =>{
        props.getContectid(id);
        navigate("/");
    };
  
   return(
       <>
       <div className="container">
       <div className="row boxCont mt-2">
       <p className="pl-4 pt-2 mb-0"> Delete Contact</p>
      
           <div className="col-sm-12">
               <div className="bg-danger text-white p-2">
                   <p>Are you Sure! <br/> You want to delete this Contact ?</p>
               </div>
               <center style={{width: "360px"}}>
               <div className="row text-center">
               <div className="col-2 col-lg-12">
                   <img className="avatarbtn" src={imgAvatar} height="50" width="50" alt="person"/>
               </div>
               <div className="col-10 col-lg-12 text-left text-lg-center pt-2 pl-3"  key={id}>
                  <span>{name}</span>  <br/> {email}
               </div>
               </div>
               <div className="col-sm-12 mt-4 text-center text-lg-center">
                   
                   <button
                    className="btn btnRegular mr-2"
                     name="yes"
                     onClick={() => removeConatctHandler(id)}
                     >Yes</button>
                   <Link to="/">
                   <button className="btn btnRegular" name="no">No</button>
                   </Link>
               </div>
               </center>
           </div>
           
       </div>
       </div>
       </>
   );
}

export default DeleteContact;