import React, { useState } from "react";
import ReactDOM from "react-dom";
import L1 from './payment.jpeg'
import Footer from './footer'
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
//  import './App.css';
import "./Form.css";
import reCAPTCHA from "react-google-recaptcha";
function App() {
  const [name, setName] = useState("");
  const [nae1, setNae1] = useState("");
  const [pHone,setpHone]=useState("")  
  const [pHone1,setpHone1]=useState("")  
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [cName, setcName] = useState("");
  const [year, setyear] = useState("");
  const [eName, seteName] = useState("");
  const [nName3,setnName3]=useState("");
  const [nName4,setnName4]=useState("");
  const [nName6,setnName6]=useState("");
  const [Ag61,setAg61]=useState("");
  const [coName,setcoName]=useState("");
  const [pHoto,setpHoto]=useState("");
  const [phOne,setphOne]=useState("");
  const [pAy,setpAy]=useState("")
  //const [Photo,setPhoto]=useState('');

  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value);
  };


  const handleeNameChange = (e) => {
    seteName(e.target.value);
  };
  const handleyearChange = (e) => {
    setyear(e.target.value);
  };
  const handlecNameChange = (e) => {
    setcName(e.target.value);
  };
  const handlepHoneChange = (e) => {
    setpHone(e.target.value);
  };
  const handlepHone1Change = (e) => {
    setpHone1(e.target.value);
  };
  const handleNameChange = (e) => {
    seteName(e.target.value);
  };
  // function to update state of age with value
  // enter by user in form
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlenName3Change= (e) => {
    setnName3(e.target.value);
  };
  const handlenName6Change= (e) => {
    setnName6(e.target.value);
  };
  const handleAg61Change= (e) => {
    setAg61(e.target.value);
  };
  const handlecoNameChange= (e) => {
    setcoName(e.target.value);
  };
  const handlenName4Change= (e) => {
    setnName4(e.target.value);
  };
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlepAyChange = (e) => {
    setpAy(e.target.value);
  };
  const handlephOneChange = (e) => {
    setphOne(e.target.value);
  };
  const handlepHotoChange = (e) => {
    setpHoto(e.target.value);
  };
  // function to update state of confirm password
  // with value enter by user in form
  const handleconfPasswordChange = (e) => {
    setconfPassword(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const guardarArchivo = (e) =>{
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbw6vRy-OWymJWXNzOmKjQswEDaKbUjTwyVaLOMp2juayCqdrGsLipAwurvz1w8mEtoc7w/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          console.log(a) //See response
        }).catch(e => console.log(e)) // Or Error in console
    }}
 
  const update = () => {
    fetch("https://sheetdb.io/api/v1/iqelgf13cqmwr", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            
            Name: { name },
            Name3 : { nName3 },
            Name4:{nName4},
            Nae1: { nae1 },
            Email: { email },
            Age: { age },
            Password: { password },
            Phone:{pHone},
            Phone1:{pHone1},
            "Confrim Password": { confPassword },
            "College Name": { cName },
            Year: { year },
            "Event Name": { eName },
            PhoneNumber:{phOne},
            Transtion:{pAy},
          }
        ],
      }),
    })
       
      .then((response) => response.json())
      .then((data) => console.log(data));
      alert('A form was submitted with Name :"' + name +
      '" ,Age :"'+age +'" and Email :"' + email + '"');
      
  };
  return (
    <div>
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="signin">
          <div class="content">
            <h2>Register</h2>
            <div class="form">
              <div class="inputBox">
                
              <label> Group Name:</label>
                <br />
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                
                <label>Name 1</label>
                <br />
                <input
                  type="text"
                  value={eName}
                  required
                  onChange={(e) => {
                    handleeNameChange(e);
                  }}
                />
                <br />

                <label>Age:</label>
                <br />
                <input
                  type="text"
                  value={age}
                  required
                  onChange={(e) => {
                    handleAgeChange(e);
                  }}
                />
                <br />
                {/*when user write in age input box , handleAgeChange()
               function will be called. */}
                <label>Email:</label>
                <br />
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                />
                <br />
                <label>Phone Number</label>
                <br />
                <input
                  type="text"
                  value={confPassword}
                  required
                  onChange={(e) => {
                    handleconfPasswordChange(e);
                  }}
                />
                <br />
                <label>Name 2:</label>
                <br />
                <input
                  type="text"
                  value={password}
                  required
                  onChange={(e) => {
                    handlePasswordChange(e);
                  }}
                />
                <br />
                
                <label>Name 3:</label>
                <br />
                <input
                  type="text"
                  value={nName3}
                  required
                  onChange={(e) => {
                    handlenName3Change(e);
                  }}
                />
                <br />
                <label>Name 4:</label>
                <br />
                <input
                  type="text"
                  value={pHone}
                  required
                  onChange={(e) => {
                    handlepHoneChange(e);
                  }}
                />
                <br />
                <label>Name 5:</label>
                <br />
                <input
                  type="text"
                  value={nName4}
                  required
                  onChange={(e) => {
                    handlenName4Change(e);
                  }}
                />
                <br />
                <label>Name 6:</label>
                <br />
                <input
                  type="text"
                  value={pHone1}
                  required
                  onChange={(e) => {
                    handlepHone1Change(e);
                  }}
                />
                <br />
                {/* when user write in email input box , handleEmailChange() 
              function will be called.*/}
                <label>College Name</label>
                <br />
                <input
                  type="text"
                  value={cName}
                  required
                  onChange={(e) => {
                    handlecNameChange(e);
                  }}
                />
                <br />
                
                  <label>Transaction Id</label>
                  <input
                    type="text"
                    value={pAy}
                    onChange={(e) => {
                    handlecNameChange(e);
                    }}
                    required
                    />
                    <br />
                

                {/* when user write in password input box ,
                  handlePasswordChange() function will be called.*/}

                {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called.*/}
              </div>
              <div>
              <img src={L1} alt="cur" className="center" style={{height:330,width:"100%",position:'center',margin:0}}/>
              <label>Payment SS</label>
              
                <br />
                <input
                  type="file"
                  
                  required
                  onChange={(e) =>  guardarArchivo(e)}
                  
                />
                <br />
              </div>
              <div class="links">
              <Link to='/events' className='btn btn-light my-3 text-dark' onClick={() => update() } >Submit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>

  );
}

export default App;
