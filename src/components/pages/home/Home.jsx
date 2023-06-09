import React from "react";
import "./Home.css";
import homeNoteImg from './assets/main note.jpg'
const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeFlex">
        <div className="homeNote-div">
        <h1 className="homeNoteTitle">Create free notes. Your note is confidencial so we
          ensure it is only saved on your local machine</h1>
        <p className="homeNoteDetails">
          This is the best note app on the internet, where you can write a note
          and keep for future reference. You can save your school
          notes on it. Notes from your devotional can also be saved on it for
          easy access and reference as you go on with your daily activities
        </p>
      <p className="homeNote-copyright">Copyright: &copy; Michado2023</p>
        </div>
        <div className="homeImg-div">
           <img src={homeNoteImg} alt="img" className="homeNote-img" />
        </div>
      </div>
    </div>
  );
};
export default Home;
