import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import api from "./api/contacts";
import Header from './Componants/Header';
import ContactList from './Componants/ContactList';
import AddContact from './Componants/AddContact';
import EditContact from './Componants/EditContact';
import DeleteContact from './Componants/DeleteContact';
import { v4 as uuidv4 } from "uuid";




function App() {
  const[contacts, setContacts] = useState([]);
 
   //retrive contacs json server contacts
   const retriveContacts = async () => {
       const response = await api.get("/contacts");
       return response.data; 
   }

  
  const contactsHandler = async(contact) => {  
     const request = {
       id: uuidv4(),
       ...contact
     };
     const response = await api.post("/contacts", request);   
      setContacts([...contacts, response.data]);
  }
  const EditcontactsHandler = async(contact) => {

    const response = await api.put(`/contacts/${contact.id}`, contact);

    const {id} = response.data;

    setContacts(contacts.map((contact) => {
      return contact.id === id ? response.data : contact;
    })
    );
   
 }

  const removeConatctHandler = async(id) => {
       await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => {
       return contact.id !== id;
      })

      setContacts(newContactList);
  }

  useEffect(() => {
      const getAllContacts = async() =>{
        const allContacts = await retriveContacts();
        if(allContacts) setContacts(allContacts);
      }
      getAllContacts();
    }, []);

  useEffect(() => {
   //localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
  }, [contacts]);

  

  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route  path="/" element={<ContactList  contacts={contacts} />}/>
          <Route path="AddContact"  element={<AddContact contactsHandler={contactsHandler}/>}/>
          <Route path="EditContact/:id"  element={<EditContact EditcontactsHandler={EditcontactsHandler}/>}/>
          <Route path='DeleteContact/:id' element={<DeleteContact contacts={contacts} getContectid={removeConatctHandler}/>}/>
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
