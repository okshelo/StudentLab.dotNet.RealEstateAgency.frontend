import React from "react";
import Header from "../../Containers/HeaderContainer";
import SearchForm from "../../Containers/SearchFormContainer";

// All pages are the same except page content. You can add <Header/> to <App/> and remove all these pages components

class AdvertismentsPage extends React.Component {

  render(){
    return(
      <React.Fragment>
        <Header/>
        <SearchForm/>
      </React.Fragment>
    );
  }
}

export default AdvertismentsPage;