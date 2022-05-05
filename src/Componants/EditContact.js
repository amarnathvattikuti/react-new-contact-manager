import React from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";



class EditContact extends React.Component {
  
  constructor(props){
    super(props);
    const {id, name, email} = props.location.state.contact;

    this.state={
      id,
      name,
      email
    }
  }
  

  update = (e) => {
     e.preventDefault();  
       this.props.EditcontactsHandler(this.state);
       this.setState({name: "", email: ""});
       this.props.navigate("/");
       //console.log(this.props);
     
   }

   render(){
       return(
           <>
            <div className="container p-2 mb-5">
              
              <div className="row col-sm-12 ml-1">Update Contact</div>
                <center>
                  <form className="mt-5" onSubmit={this.update}>
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
                    <button className="btn btnRegular mt-4">Update</button>
                    <Link to="/">
                   <button className="btn btnRegular mt-4 ml-2" name="no">Cancel</button>
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
  const location = useLocation();
  // created Cust hook for access useNavigaet of v6 in class componant.

  return (
    <WrappedComponent
      {...props}
      navigate={navigate}
      location={location}
    />
  );
};

export default withRouter(EditContact);