import React  from "react"; 
//This is for 3D display
import ModelViewer from './ModelViewer';
import Navbar from "./Navbar";
//Image & pdf
import Nosa from './assets/NOSA.png'
import Dtr from './assets/DTR.png'
import Payslip from './assets/PAYSLIP.png'
import Aicc from './assets/AICC.png'
import EthicalHack from './assets/EthicalHacking.png'
import Medal from './assets/medals.jpg'
import Capstone from './assets/capstone.png'
import Cum from './assets/cum.jpg'
import Hack from './assets/hackathon.jpg'
import Leader from './assets/leadership.jpg'
import Outstanding from './assets/outstanding.jpg'
import Techno from './assets/techno.jpg'
import ProfilePic from "./assets/steve.png";
import "./css/Homepage.css"; // import CSS
//This is for the email sender first  npm install emailjs-com
import emailjs from "emailjs-com";
import ReactLogo from "./assets/react.svg"
import JavaLogo from "./assets/java.svg"
import PythonLogo from "./assets/python.svg"
import CLogo from "./assets/C.svg"
import CppLogo from "./assets/c++.svg"
import SpringLogo from "./assets/springboot.svg"
import MySqlLogo from "./assets/mysql.svg"
import MsSqlLogo from "./assets/mssql.svg"
import PhpLogo from "./assets/php.svg"
import HtmlLogo from "./assets/html.svg"
import JSLogo from "./assets/js.svg"
import CssLogo from "./assets/css.svg"
import AndroidLogo from "./assets/androidstudio.svg"
import NodeJSLogo from "./assets/nodejs.svg"
import PostmanLogo from "./assets/postman.svg"
import GitLogo from "./assets/git.svg"
import BlenderLogo from "./assets/blender.svg"
import FigmaLogo from "./assets/figma.svg"


function Homepage() {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
         "service_hcgb2pj",      // replace with your EmailJS service ID
        "template_yyy",     // replace with your EmailJS template ID
        e.target,               // the form element
        "TrL2go7gORASqo75F"       // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully")
          e.target.reset();
        },
        (error) =>{
          alert("Failed to Send Message");
          console.log(error.text)
        }
      );
      };

  







  return (
<div>
  <Navbar />

  <section id="home" className="section home">
    <div className="container-fluid">
      <div className="row no-gutters">
        {/* Left Column - Text */}
        <div className="col-12 col-md-6">
          <p className="pgraph">Hello! It's me</p>
          <p className="DisplayName">STEVE CALVIN</p>
          <h3 className="tagline">An Aspiring Software Engineer</h3>

          <p className="myself">
            IT graduate skilled in software/hardware troubleshooting, programming
            (Python, Java, C, SQL, PHP), and 3D modeling. Proficient in Microsoft Office
            with strong problem-solving skills and a commitment to continuous learning.
          </p>

          <div className="d-flex flex-column flex-md-row ms-4">
            {/* Social Icons */}
            <div className="displayAccount d-flex mb-3 mb-md-0">
              <a href="https://www.facebook.com/stevecalvinromano.barrera" target="_blank" className="nav-link">
                <i className="fa-brands fa-facebook" style={{ color: "white", fontSize: 30 }}></i>
              </a>
              <a href="https://www.instagram.com/stevecalvinromano.barrera" target="_blank" className="nav-link">
                <i className="fa-brands fa-instagram" style={{ color: "white", fontSize: 33 }}></i>
              </a>
              <a href="https://www.tiktok.com" target="_blank" className="nav-link">
                <i className="fa-brands fa-tiktok" style={{ color: "white", fontSize: 25 }}></i>
              </a>
              <a href="https://github.com" target="_blank" className="nav-link">
                <i className="fa-brands fa-github" style={{ color: "white", fontSize: 30 }}></i>
              </a>
        
            </div>

            {/* Resume Button */}
  <a
  className="resume-btn ms-md-3"
  href='update_resume.pdf'
  download="Steve_Calvin_Resume.pdf"
>
  Download CV
</a>

          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-12 col-md-6">
          <div className="photo-wrapper">
            <img
              src={ProfilePic} // change to your image path
              alt="Steve Calvin"
              className="profile-pic"
            />
          </div>
          <div className="program">
            <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={ReactLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={JavaLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div>  
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={PythonLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div>   
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={CLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={CppLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={SpringLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
          </div>
           <div className="program">
            <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={NodeJSLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={PhpLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div>  
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={MySqlLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div>   
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={MsSqlLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={AndroidLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
          </div>
            <div className="program">
            <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={HtmlLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={CssLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div>  
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={JSLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div>   
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={GitLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
          </div>
           <div className="program">
            <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={FigmaLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div> 
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={BlenderLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div>  
              <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                  <img src={PostmanLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
              </div>   
          </div>
        </div>
      </div>
    </div>
  
  </section>



      <section id="achievement" className="section achievement">
            <div className="container-fluid"> 
            <div className="row justify-content-center imgDisplay">
            <div className="col-md-12 text-center displayAchievement"> 
         <h3  className="">
           <i className="fas fa-trophy text-warning"></i>  My Achievements and Certifications <i className="fas fa-certificate text-warning"></i></h3> 
            </div>
            <div>
            </div>
              <div className="col-md-4 d-flex justify-content-center mb-4">
                <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={Hack} className="card-img-top bgdis" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-award text-warning"></i> Hackathon-Champion</p>
                     <p className="card-text text-center">Likhamon Research Extension Development Innovation</p>
                  </div>
                </div>
              </div>
               <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={Cum} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-graduation-cap text-warning"></i> CUM LAUDE - Batch 2024</p>
                     <p className="card-text text-center">Romblon State University -San Fernando Romblon</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={ProfilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-graduation-cap text-warning"></i> Highest GWA / Valedictorian - Batch 2024</p>
                     <p className="card-text text-center">Romblon State University -San Fernando Romblon</p>
                  </div>
                </div>
              </div>
                    
               <div className="col-md-4 d-flex justify-content-center mb-4">
                <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={ProfilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                       <p className="card-text text-center fw-bold"><i className="fas fa-medal text-warning"></i> NCIII -Passer Java Programming</p>
                     <p className="card-text text-center">Joysis Techvoc</p>
                  </div>
                </div>
              </div>
                       <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={Leader} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i  className="fas fa-trophy text-warning"></i> Leadership Award</p>
                     <p className="card-text text-center">Romblon State University -San Fernando Romblon</p>
                  </div>
                </div>
              </div>  
              <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={Outstanding} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-laptop-code text-warning"></i>Outstanding Student Trainee</p>
                     <p className="card-text text-center">Department of Migrant Workers</p>
                  </div>
                </div>
              </div> 
              <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={Techno} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-chalkboard-teacher text-warning"></i>Techno Club President -2022</p>
                     <p className="card-text text-center">Romblon State University -San Fernando Romblon</p>
                  </div>
                </div>
              </div> 
                  <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={ProfilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold "><i className="fas fa-laptop-code text-warning"></i>Certificate of Commendation</p>
                     <p className="card-text text-center">Department of Migrant Workers</p>
                  </div>
                </div>
              </div> 
                  <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={EthicalHack} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-laptop-code text-warning"></i>Introduction to Ethical Hacking </p>
                     <p className="card-text text-center">Upskill Up Diliman </p>
                  </div>
                </div>
              </div> 
            </div>
          </div>

    
      </section>

     <section id="project" className="section project">
  <div className="container-fluid ">
    <div className="row justify-content-center">
      
      {/* Left Side - Large Project Card */}
      {/* <div className="col-12 col-md-6 d-flex justify-content-center mb-4"> */}
        {/* <div 
          className="card h-100 imgBG"  */}
          {/* style={{ width: "28rem", height: "32rem" }} // ⬅️ Increased width & height */}
        {/* > */}

          {/* <ModelViewer/> */}
          {/* <img 
            src={ProfilePic} 
            className="card-img-top bgdis" 
            alt="..." 
            style={{ height: "60%", objectFit: "cover" }} // ⬅️ Made image take up more space and scale nicely
          /> */}
          {/* <div className="card-body"> */}
            {/* <p className="card-text text-center fw-bold">
              <i className="fas fa-award text-warning"></i> 
              Digitalization of Traditional Fishing Gear System
            </p> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      
      {/* Right Side - Other Projects */}
      {/* <div className="col-12 "> */}
      {/* <div className="col-12 col-md-6"> */}
        {/* <div className="container-fluid"> */}
        <div className="container-fluid" style={{ marginTop: "5rem" }}>

            {/* <div className="row justify-content-center imgDisplay">
            <div className="col-md-12 text-center displayAchievement">  */}



          <div className="row justify-content-center imgDisplay">
            <div className="col-md-12 text-center displayAchievement"> 
              <h3 >My Projects</h3> 
            </div>

            {/* Smaller cards */}
            <div className="col-md-6 d-flex justify-content-center mb-4">
              <div className="card h-100 imgBG" style={{ width: "25rem" }}>
                <img src={Dtr} className="card-img-top bgdis" alt="..."/>
                <div className="card-body">
                  <h5 className="card-text text-center fw-bold">
                    <i className="fas fa-award text-warning"></i> DTR Generator System
                  </h5>
                   <div className="card-body">
            
                     <p className="card-text text-center">This is my personal project at DMW, designed to help the HR department generate reports from the biometrics device. <br/> <b>Note: </b> <u>I only used MSAccess and Macros</u></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center mb-4">
              <div className="card h-100 imgBG" style={{ width: "25rem" }}>
                <img src={Payslip} className="card-img-top bgdis" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-center fw-bold">
                    <i className="fas fa-award text-warning"></i> Payslip Generator System
                  </p>
                      <p className="card-text text-center">This is my personal project at DMW, a system that helps generate employee payslips. <br/> <b>Note: </b> <u>I only used MSAccess and Macros</u></p>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center mb-4">
              <div className="card h-100 imgBG" style={{ width: "25rem" }}>
                <img src={Nosa} className="card-img-top bgdis" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-center fw-bold">
                    <i className="fas fa-award text-warning"></i> NOSA Generator System
                  </p>
                 <p className="card-text text-center">
                  This is my personal project at DMW. The system is used to handle salary adjustments for employees and includes an email function that sends notifications directly to them. <br/> 
                  <b>Note:</b> <u>Developed using MS Access and Macros</u>
                </p>
                                
                </div>
              </div>
            </div>

             <div className="col-md-6 d-flex justify-content-center mb-4">
              <div className="card h-100 imgBG" style={{ width: "25rem" }}>
                <img src={Aicc} className="card-img-top bgdis" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-center fw-bold">
                    <i className="fas fa-award text-warning"></i> Inventory System Project
                  </p>
                  <p className="card-text text-center">
                 My Personal Project for inventory Stock and producing reports <br/> 
                </p>
               <div className="program">
                    <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                          <img src={HtmlLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
                      </div> 
                      <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                          <img src={CssLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
                      </div>  
                      <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                          <img src={CssLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
                      </div>  
                      <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                          <img src={CssLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
                      </div>  
                  </div>         
                </div>
              </div>
            </div>

               <div className="col-md-6 d-flex justify-content-center mb-4">
              <div className="card h-100 imgBG" style={{ width: "25rem" }}>
                <img src={Capstone} className="card-img-top bgdis" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-center fw-bold">
                    <i className="fas fa-award text-warning"></i> Traditional Fishing Gear Preservation System
                  </p>
                  <p className="card-text text-center">
                    This system is my Capstone Project, designed to preserve the traditional fishing gear of our province, Romblon. It documents step-by-step procedures and includes a 3D model for an enhanced viewing experience.
                  </p>

               <div className="program">
                    <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                          <img src={HtmlLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
                      </div> 
                      <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                          <img src={CssLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
                      </div>  
                      <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                          <img src={CssLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
                      </div>  
                      <div className="card h-10 imgBG d-flex justify-content-center align-items-center" style={{ width: "3rem", height: "3rem" }}>
                          <img src={CssLogo} className="card-img-top "  style ={{width: "2rem"}}  alt="..."/>
                      </div>  
                  </div>         
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> 

    {/* </div>
  </div> */}

  </div>
</section>


      <section id="about" className="section about">
        <h1>About Me</h1>
      </section>

<section id="contact" className="section contact">
<div className="container my-5">
  <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "700px"}}>
    <div className="row g-4 align-items-center justify-content-center">

      {/* Left Side - Form */}
      <div className="col-md-12 d-flex flex-column justify-content-center">
      {/* <div className="col-md-6 d-flex flex-column justify-content-center"> */}
        <h4 className="mb-3 text-center">Contact Me</h4>
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text"  name="name" className="form-control form-control-sm" placeholder="Enter Full Name"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control form-control-sm" placeholder="Enter Email"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-control form-control-sm" rows="3" placeholder="Type your message"></textarea>
          </div>
          <button type="submit" className="btn submitbtn w-100 ">Submit</button>
        </form>
      </div>

      {/* Right Side - Image */}
      {/* <div className="col-md-4 d-none d-md-flex align-items-center justify-content-center">
        <img 
          src={profilePic} 
          className="img-fluid rounded" 
          alt="Preview" 
          style={{ maxWidth: "500px" }}
        />
      </div> */}

    </div>
  </div>
</div>


</section>

    </div>
  );
}



export default Homepage;
