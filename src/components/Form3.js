import React, { useState } from "react";
import L1 from "./payment.jpeg";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import { Button, Form } from "react-bootstrap";
function Form3() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [cName, setcName] = useState("");
  const [year, setyear] = useState("");
  const [eName, seteName] = useState("");
  const [pHoto, setpHoto] = useState("");
  const [pAy, setpAy] = useState("");
  //const [Photo,setPhoto]=useState('');

  // function to update state of name with
  // value enter by user in form
  const guardarArchivo = (e) => {
    var file = e.target.files[0]; //the file
    var reader = new FileReader(); //this for convert to Base64
    reader.readAsDataURL(e.target.files[0]); //start conversion...
    reader.onload = function (e) {
      //.. once finished..
      var rawLog = reader.result.split(",")[1]; //extract only thee file data part
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      }; //preapre info to send to API
      fetch(
        "https://script.google.com/macros/s/AKfycbzVom5ENeCXrYYmlpZ21U9AxWVXu_uMS3Nsr1NWBxuBtoLp7uIV3BbihW-BjAbGMLyi/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((a) => {
          console.log(a); //See response
        })
        .catch((e) => console.log(e)); // Or Error in console
    };
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handlepHotoChange = (e) => {
    setpHoto(e.target.value);
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
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlepAyChange = (e) => {
    setpAy(e.target.value);
  };
  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  // const handleSubmit = (e) => {
  //   if (password != confPassword) {
  //     // if 'password' and 'confirm password'
  //     // does not match.
  //     alert("password Not Match");
  //   } else {
  //     // display alert box with user
  //     // 'name' and 'email' details .
  //     alert(
  //       'A form was submitted with Name :"' +
  //         name +
  //         '" ,Age :"' +
  //         age +
  //         '" and Email :"' +
  //         email +
  //         '"'
  //     );
  //   }
  //   e.preventDefault();
  //   };
  const update = () => {
    fetch("https://sheetdb.io/api/v1/ziepb6hbktcxh", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Name: { name },
            Email: { email },
            age: { age },
            Password: { password },
            "Confrim Password": { confPassword },
            "College Name": { cName },
            Year: { year },
            "Event Name": { eName },
            Photo: { pHoto },
            Transtion: { pAy },
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    alert(
      'A form was submitted with Name :"' +
        name +
        '" ,Age :"' +
        age +
        '" and Email :"' +
        email +
        '"'
    );
  };
  const [validated, setValidated] = useState(false);

  const handleSubmit =  (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (pAy === "") {
      setValidated(true);
    } else {
      update();
      navigate("/events");
    }
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div class="form">
                <div class="inputBox">
                  <label>Name:</label>
                  <br />
                  <input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => {
                      handleChange(e);
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
                  {/* when user write in email input box , handleEmailChange() 
              function will be called.*/}
                  <br />
                  <label>Phone Number</label>
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
                  <label>Year</label>
                  <br />
                  <input
                    type="text"
                    value={year}
                    required
                    onChange={(e) => {
                      handleyearChange(e);
                    }}
                  />
                  <br />
                  <label>College name</label>
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

                  <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Transaction Id</Form.Label>
                    <Form.Control
                      required
                      value={pAy}
                      onChange={(e) => setpAy(e.target.value)}
                      type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                      Transaction Id Required !
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* when user write in password input box ,
                  handlePasswordChange() function will be called.*/}

                  {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called.*/}
                </div>
                <div>
                  <img
                    src={L1}
                    alt="cur"
                    className="center"
                    style={{ height: 375, position: "center", margin: 0 }}
                  />
                  <label>Payment SS</label>

                  <br />
                  <input
                    type="file"
                    required
                    onChange={(e) => guardarArchivo(e)}
                  />
                  <br />
                </div>
                <div class="links">
                  <Button
                    type="submit"
                    className="btn btn-light my-3 text-dark"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form3;
