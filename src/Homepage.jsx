import React from "react";
import Navbar from "./Navbar";
//Image & pdf
import profilePic from "./assets/steve.png";
import "./css/Homepage.css"; // import CSS
//This is for the email sender first  npm install emailjs-com
import emailjs from "emailjs-com";



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
                    {/* col-12 → full width on small screens
                      col-md-6 → half width on medium+ screens
                      text-start → left align */}
              <p className="pgraph">Hello! It's me</p>
              <p className="DisplayName">STEVE CALVIN</p>
            <h3 className="tagline  ">An Aspiring Software Engineer</h3>          
            </div>
                 <p className="myself">
        IT graduate skilled in software/hardware troubleshooting, programming
        (Python, Java, C, SQL, PHP), and 3D modeling. Proficient in Microsoft Office
        with strong problem-solving skills and a commitment to continuous learning.
      </p>
      <div className="displayAccount">
            <a href="https://www.facebook.com/stevecalvinromano.barrera" target="_blank" className="nav-link">
            <i className="fa-brands fa-facebook" style={{ color: "white", fontSize: 30 }}></i>

           {/* <img src="./src/image/facebook.svg" alt="Facebook" width="40" height="40" class="d-inline-block align-text-top"/> */}
       </a> 
          <a href="https://www.facebook.com/stevecalvinromano.barrera" target="_blank" className="nav-link">
           {/* <img src="./src/image/insta.svg" alt="Facebook" width="40" height="40" class="d-inline-block align-text-top"/> */}
          <i className="fa-brands fa-instagram" style={{ color: "white", fontSize: 33 }}></i>
       </a> 
       <a href="https://www.facebook.com/stevecalvinromano.barrera" target="_blank" className="nav-link">
           <i className="fa-brands fa-tiktok" style={{ color: "white", fontSize: 25 }}></i>
           {/* <img src="./src/image/tiktok.svg" alt="Facebook" width="40" height="40" class="d-inline-block align-text-top"/> */}
       </a> 
          <a href="https://www.facebook.com/stevecalvinromano.barrera" target="_blank" className="nav-link">
          <i className="fa-brands fa-github" style={{ color: "white", fontSize: 30 }}></i>
           {/* <img src="./src/image/git.svg" alt="Facebook" width="40" height="40" class="d-inline-block align-text-top"/> */}
       </a> 
        

      </div>
     <a 
  className="resume-btn" 
  href={`${import.meta.env.BASE_URL}updated_resume.pdf`}  
  download="Steve_Calvin_Resume.pdf"
>
  Download Resume
</a>

      {/* <button className="resume-btn">Download Resume</button>  */}
    </div>

     <div className="col-12 col-md-6 d-none d-md-block"> 
         <div className="photo-wrapper">
        <img
          src={profilePic}   // change to your image path
          alt="Steve Calvin"
          className="profile-pic"
        />
    
      </div>      
          <div className="expertise">
            <p className="pgraph" >Set of Expertise</p>          
        </div>   
             <div className="program">
                 {/* <img src="./src/assets/react.svg" alt="Facebook" width="40" height="40" class="d-inline-block align-text-top"/>              */}
               {/* <i class="fa-brands fa-facebook" style="color: #ffffff;"></i> */}
                 {/* <img src="./src/image/php.svg" alt="Facebook" width="70" height="40" class="d-inline-block align-text-top"/>      
                  <img src="./src/image/java.svg" alt="Facebook" width="100" height="100" class="d-inline-block align-text-top"/>        */}

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
                  <img src={profilePic} className="card-img-top bgdis" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-award text-warning"></i> Hackathon-Champion</p>
                     <p className="card-text text-center">Likhamon Research Extension Development Innovation</p>
                  </div>
                </div>
              </div>
               <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={profilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-graduation-cap text-warning"></i> CUM LAUDE - Batch 2024</p>
                     <p className="card-text text-center">Romblon State University -San Fernando Romblon</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={profilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-graduation-cap text-warning"></i> Highest GWA / Valedictorian - Batch 2024</p>
                     <p className="card-text text-center">Romblon State University -San Fernando Romblon</p>
                  </div>
                </div>
              </div>
                    
               <div className="col-md-4 d-flex justify-content-center mb-4">
                <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={profilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                       <p className="card-text text-center fw-bold"><i className="fas fa-medal text-warning"></i> NCIII -Passer Java Programming</p>
                     <p className="card-text text-center">Joysis Techvoc</p>
                  </div>
                </div>
              </div>
                       <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={profilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i  className="fas fa-trophy text-warning"></i> Leadership Award</p>
                     <p className="card-text text-center">Romblon State University -San Fernando Romblon</p>
                  </div>
                </div>
              </div>  
              <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={profilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-laptop-code text-primary"></i>Outstanding Student Trainee</p>
                     <p className="card-text text-center">Department of Migrant Workers</p>
                  </div>
                </div>
              </div> 
              <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={profilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-chalkboard-teacher text-primary"></i>Techno Club President -2023</p>
                     <p className="card-text text-center">Romblon State University -San Fernando Romblon</p>
                  </div>
                </div>
              </div> 
                  <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={profilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-laptop-code text-primary"></i>Certificate of Commendation</p>
                     <p className="card-text text-center">Department of Migrant Workers</p>
                  </div>
                </div>
              </div> 
                  <div className="col-md-4 d-flex justify-content-center mb-4">
                 <div className="card h-100 imgBG" style={{ width: "18rem" }}>
                  <img src={profilePic} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text text-center fw-bold"><i className="fas fa-laptop-code text-primary"></i>Introduction to Ethical Hacking </p>
                     <p className="card-text text-center">Upskill Up Diliman </p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
      </section>

      <section id="project" className="section project">
        <h1>My Projects</h1>
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
          <button type="submit" className="btn btn-primary w-100">Submit</button>
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
