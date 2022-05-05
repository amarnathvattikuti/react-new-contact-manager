import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import searchICon from "../images/search.svg";
import crossICon from "../images/cross.svg";



const ContactList = (props) => {
    const [searchCont, setSearchCont] = useState('');

const ContactListview = props.contacts.filter((contact) => contact.name.toLowerCase().includes(searchCont)).map((contact) => {
     return(   
         <>        
         <ContactCard contact={contact} key={contact.id}/>
         </> 
     );
})
  
  //show searchBar condition
 const searchValue = (e) => {
     e.preventDefault();
 let crossimg = document.querySelector('.searchBtn img');
       crossimg.src = crossICon;
 crossimg.addEventListener('click', function(){
    setSearchCont('');
    crossimg.src = searchICon;
 });

     setSearchCont(e.target.value);
 }
//display search area
const [displaySearchArea, setDisplaySearchArea] = useState(false);
const displaySearchAreafunc = () => {
    let listItems = document.getElementsByClassName('listItem');
    if(listItems.length > 5){
        setDisplaySearchArea(true);
    }
}
 useEffect(() =>{
    let listItems = document.getElementsByClassName('listItem');
    if(listItems.length > 5){
        setDisplaySearchArea(true);
    }
    displaySearchAreafunc();
 }, []);

 return(
     <>
     <div className="container mobCont">
        <div className="row mt-3 mb-3 "> 
        <div className="col-12">
        <Link to="AddContact">
        <button className="btn btnAdd float-right mr-2">+</button>
        </Link>     
        </div>
        {displaySearchArea && 
        <div className="col-12 mt-3 p-0 serach-area">
        <div className="input-group mb-3">
        <input className="form-control mb-3" type="text" placeholder="Search..." value={searchCont} onChange={searchValue} />
        <div className="input-group-append">
        <button className="btn searchBtn" type="submit"><img src={searchICon} alt="search-icon" /></button>
        </div>
        </div>   
        </div>
        }
        </div>
        
        <div className="row"> 
       <div className="col-12">
        {ContactListview}
       </div>    
       </div>
     </div>
     </>
 );
}
export default ContactList;