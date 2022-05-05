import React from "react";
import {Link, useNavigate} from "react-router-dom";


class AddContact extends React.Component {
  
   state={
     name: "",
     email: ""
   }

   add = (e) => {
     e.preventDefault();
     if(this.state.name === "" || this.state.email === "") {
       alert("All fields are mandatory");
       return;
     }
     else
     {
       this.props.contactsHandler(this.state);
       this.setState({name: "", email: ""});
       this.props.navigate("/");
       //console.log(this.props);
     }
   }

   render(){
       return(
           <>
            <div className="container p-2 mb-5">
                <center>
                  <form className="mt-5" onSubmit={this.add}>
                    <div className="row col-sm-12">
                    <label className="text-left">Name</label><br/>
                    <input className="form-control" type="text" name="name"
                     placeholder="Enter Name" 
                     value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} /><br/>
                    </div>
                    <div className="row col-sm-12 mt-3">
                    <label>Email</label><br/>
                    <input className="form-control" type="text" name="email"
                     placeholder="Enter Email"
                     value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} /><br/>
                    </div>
                    <div className="col-sm-12 text-left">
                    <button className="btn btnRegular mt-4">Add</button>
                    <Link to="/">
                    <button className="btn btnRegular mt-4 ml-2">Cancel</button>
                    </Link>
                    </div>
                  </form>
                </center>           
            </div>
           </>
       );
   }
}

const withRouter = WrappedComponent => props => {
  const navigate = useNavigate();
  // created Cust hook for access useNavigaet of v6 in class componant.

  return (
    <WrappedComponent
      {...props}
      navigate={navigate}
    />
  );
};

export default withRouter(AddContact);