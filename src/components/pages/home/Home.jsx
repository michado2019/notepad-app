import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

  const [ style, setStyle] = useState({
    opacity: 0,
    marginLeft: '0'
  })
 setInterval(() => {
  setStyle(
    {
      opacity: 1,
      marginLeft: '30px'
    }
  )
 }, 1000)
  return (
    <div className="homeWrapper">
      <h1 className="homeNoteTitle">Notes app</h1>
      <div className="homeFlex" >
      <p className="homeNoteDetails">
        This is the best note app on the internet, where you can write a note
        and keep for future reference.
        Your note is confidencial so we made sure it is only saved on your local
        machine. You can save your school notes on it. Notes from your
        devotional can also be saved on it for easy access and reference as you
        go on with your daily activities
      </p>
      <div className="homeCircle-div">
        <div className="homeCircle" style={{style}}>
          <h2 className="homeCircle-quick_note">Quick note?</h2>
          <Link to="/createNotes" className="homeCircle-link">
          <h2 className="homeCircle-click_me">Click me!</h2>
          </Link>
        </div>
      </div>
      </div>
      <p className="homeNote-copyright">Copyright: &copy; Michado2023</p>
    </div>
  );
};

export default Home;
