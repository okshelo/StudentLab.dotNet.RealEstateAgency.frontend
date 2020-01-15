import React from "react";
import Header from "../Header";
import RentalAnnouncementModel from "../RentalAnnouncementModel";

class AnnouncementPage extends React.Component {

  constructor() {
    super();
  }


  render(){

    let userModel =     
    {    
        Title : "Title Title Title Title Title TitleTitle",
        Description : "Simple  longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglonglonglong longlonglonglong ",
        Area : 228,
        Address : "Address Address Address Address Address Address",
        Cost: 1000,
        Location : [10,10],
        Images : "132435543345"
    };

    return(
        <React.Fragment>
            <Header isLoggedIn="false" />
            <RentalAnnouncementModel create={this.props.create} model={userModel}/>
        </React.Fragment>
    );
  }
}

export default AnnouncementPage;