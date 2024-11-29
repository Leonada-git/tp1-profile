import React from "react";
import Nav_bar from "./components/header/header";
import Profile_body from "./components/content/profil";
import Footer from "./components/footer/footer";
import "./App.css";

const Page=()=>{
  return (<div>
    <Nav_bar/>
    <Profile_body/>
    <Footer/>
  </div>)
}

const App = () => {
  return (
    <div>
      <Page/>
    </div>
  );
};

export default App;
