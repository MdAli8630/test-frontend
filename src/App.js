import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    residentialAddress: {
      street1: "",
      street2: "",
    },
    permanentAddress: {
      street1: "",
      street2: "",
    },
    sameAsResidential: false,
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [residentailAddressStreet1, setResidentailAddressStreet1] =
    useState("");
  const [residentailAddressStreet2, setResidentailAddressStreet2] =
    useState("");
  const [sameAsResidential, setSameAsResidential] = useState(false);
  const [permanentAddressStreet1, setPermanentAddressStreet1] = useState("");
  const [permanentAddressStreet2, setPermanentAddressStreet2] = useState("");

  //Error handler
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [dateOfBirthErr, setDateOfBirthErr] = useState("");
  const [residentailAddressStreet1Err, setResidentailAddressStreet1Err] =
    useState("");
  const [residentailAddressStreet2Err, setResidentailAddressStreet2Err] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      dateOfBirth: dateOfBirth,
      residentialAddress: {
        street1: residentailAddressStreet1,
        street2: residentailAddressStreet2,
      },
      permanentAddress: {
        street1: sameAsResidential
          ? residentailAddressStreet1
          : permanentAddressStreet1,
        street2: sameAsResidential
          ? residentailAddressStreet2
          : permanentAddressStreet2,
      },
      sameAsResidential: sameAsResidential,
    };

    if (validationForm()) {
      console.log("formData----->>", formData);
    }
  };

  const validationForm = () => {
    let formIsValid = true;
    const validEmailRegex = RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (firstName === "") {
      formIsValid = false;
      setFirstNameErr("Please Enter firstName");
    }
    if (lastName === "") {
      formIsValid = false;
      setLastNameErr("Please Enter firstName");
    }
    if (email === "") {
      formIsValid = false;
      setEmailErr("Please Enter Email");
    }
    if (email !== "" && !validEmailRegex.test(email)) {
      formIsValid = false;
      setEmailErr("Please Enter valid Email");
    }
    if (dateOfBirth === "") {
      formIsValid = false;
      setDateOfBirthErr("Please Enter DOB");
    }
    if (residentailAddressStreet1 === "") {
      formIsValid = false;
      setResidentailAddressStreet1Err("Please Enter Street 1");
    }
    if (residentailAddressStreet2 === "") {
      formIsValid = false;
      setResidentailAddressStreet2Err("Please Enter Street 1");
    }
    return formIsValid;
  };
  const sameAsResidentialChange = (e) => {
    setSameAsResidential(e.target.checked);
  };

  const lastNameHandlerChange = (e) => {
    if (e.target.value.length > 3) {
      setLastNameErr("");
    }
    setLastName(e.target.value);
  };
  const firstNameHandlerChange = (e) => {
    if (e.target.value.length > 3) {
      setFirstNameErr("");
    }
    setFirstName(e.target.value);
  };
  const emailHandlerChange = (e) => {
      if (e.target.value.length > 3) {
        setEmailErr("");
      }
    setEmail(e.target.value);
  };
  const dateOfBirthHandlerChange = (e) => {
     if (e.target.value.length > 3) {
       setDateOfBirthErr("");
     }
    setDateOfBirth(e.target.value);
  };
  const residentailAddressStreetChange1 = (e) => {
     if (e.target.value.length > 3) {
       setResidentailAddressStreet1Err("");
     }
    setResidentailAddressStreet1(e.target.value);
  };
  const residentailAddressStreetChange2 = (e) => {
    if (e.target.value.length > 3) {
      setResidentailAddressStreet2Err("");
    }
    setResidentailAddressStreet2(e.target.value);
  };

  return (
    <div className="main_div">
      <h1>MERN STACK MACHINE TEST</h1>
      <form className="row g-3 form_div" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="inputFirstName4" className="form-label label_bold">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={firstNameHandlerChange}
          />
          {firstNameErr.length > 0 && (
            <span className="error">{firstNameErr}</span>
          )}
        </div>
        <div className="col-md-6">
          <label for="inputLastName4" className="form-label label_bold">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={lastNameHandlerChange}
          />
          {lastNameErr.length > 0 && (
            <span className="error">{lastNameErr}</span>
          )}
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label label_bold">
            E-mail*
          </label>
          <input
            className="form-control label_bold label_bold"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={emailHandlerChange}
          />
          {emailErr.length > 0 && <span className="error">{emailErr}</span>}
        </div>
        <div className="col-md-6">
          <label for="inputDateOfBirth4" className="form-label label_bold">
            Date of Birth*
          </label>
          <input
            className="form-control"
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={dateOfBirthHandlerChange}
          />
          {dateOfBirthErr.length > 0 && (
            <span className="error">{dateOfBirthErr}</span>
          )}
        </div>
        <p className="resi_address">Residential Address</p>
        <div className="col-md-6 address_resi">
          <label for="inputStreet14" className="form-label">
            Street 1*
          </label>
          <input
            className="form-control"
            type="text"
            id="residentailAddressStreet1"
            value={residentailAddressStreet1}
            onChange={residentailAddressStreetChange1}
          />
          {residentailAddressStreet1Err.length > 0 && (
            <span className="error">{residentailAddressStreet1Err}</span>
          )}
        </div>
        <div className="col-md-6">
          <label for="inputStreet24" className="form-label">
            Street 2*
          </label>
          <input
            className="form-control"
            type="text"
            id="residentailAddressStreet2"
            value={residentailAddressStreet2}
            onChange={residentailAddressStreetChange2}
          />
          {residentailAddressStreet2Err.length > 0 && (
            <span className="error">{residentailAddressStreet2Err}</span>
          )}
        </div>
        <div className="col-12 same_as_resi">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="sameAsResidential"
              name="sameAsResidential"
              checked={sameAsResidential}
              onChange={sameAsResidentialChange}
            />
            <label className="form-check-label same_as" for="gridCheck">
              Same as Residential Address
            </label>
          </div>
        </div>

        <p className="perma_address">Permanent Address</p>
        <div className="col-md-6 address_permanent">
          <label for="inputStreet14" className="form-label">
            Street 1
          </label>
          <input
            className="form-control"
            type="text"
            id="permanentAddressStreet1"
            value={
              sameAsResidential
                ? residentailAddressStreet1
                : permanentAddressStreet1
            }
            onChange={(e) => setPermanentAddressStreet1(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label for="inputStreet24" className="form-label">
            Street 2
          </label>
          <input
            className="form-control"
            type="text"
            id="permanentAddressStreet2"
            value={
              sameAsResidential
                ? residentailAddressStreet2
                : permanentAddressStreet2
            }
            onChange={(e) => setPermanentAddressStreet2(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
