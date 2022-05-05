import React  from "react";
import imgAvatar from "../images/Avatar-Img.png";
import TrashIcon from "../images/trash.svg";
import updateICon from "../images/check2-square.svg";
import {Link} from "react-router-dom";

const ContactCard = (props) => {

const {id, name, email} = props.contact;

    return(
        <>
 
        <div className="row p-1 listItem" key={id}>          
               <div className="col-1 pl-1 p-lg-0">
                   <img className="avatarbtn" src={imgAvatar} height="30" width="30" alt="person"/>
               </div>
               <div className="col-9 col-lg-10 text-left pl-3 pl-lg-0">
                  <span>{name}</span>  <br/> <span style={{fontSize: "16px", position: "absolute", bottom: "-2px", color:"#1434a4"}}>{email}</span> 
               </div>
               <div className="col-2 col-lg-1 p-0">
                  <Link to={`/EditContact/${id}`} state={{contact: props.contact}}>
                  <img className="imgbtn mr-1 color-blue" 
                  src={updateICon}
                   alt="update"
                   height="20" width="20"/>
                   </Link>
                   <Link to={`/DeleteContact/${id}`} state={{contact: props.contact}}>
                  <img className="imgbtn" 
                  src={TrashIcon}
                   alt="trash"
                   height="20" width="20"/>
                   </Link>                 
               </div>
               </div> 
        </>
    );
}

export default ContactCard;