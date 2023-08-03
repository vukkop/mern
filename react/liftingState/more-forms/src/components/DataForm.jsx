import React, { useState } from "react";

const DataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  const handleErrors = (e) => {
    const inputValue = e.target.value.trim();

    switch (e.target.id) {
      case "firstName":
        setFirstName(inputValue);
        if (inputValue.length < 2) {
          setErrors({
            ...errors,
            firstName: "First name must contain at least 2 characters.",
          });
        } else {
          setErrors({
            ...errors,
            firstName: "",
          });
        }
        break;

      case "lastName":
        setLastName(inputValue);
        if (inputValue.length < 2) {
          setErrors({
            ...errors,
            lastName: "Last name must contain at least 2 characters.",
          });
        } else {
          setErrors({
            ...errors,
            lastName: "",
          });
        }
        break;

      case "email":
        setEmail(inputValue);
        if (inputValue.length < 5) {
          setErrors({
            ...errors,
            email: "Email must contain at least 5 characters.",
          });
        } else {
          setErrors({
            ...errors,
            email: "",
          });
        }
        break;

      case "password":
        setPassword(inputValue);
        if (inputValue.length < 8) {
          setErrors({
            ...errors,
            password: "Password must contain at least 8 characters.",
          });
        } else {
          setErrors({
            ...errors,
            password: "",
          });
        }
        break;

      case "confirmPassword":
        setConfirmPassword(inputValue);
        if (inputValue.length < 8 || password !== inputValue) {
          setErrors({
            ...errors,
            confirmPassword:
              "This field must contain at least 8 characters and match password.",
          });
        } else {
          setErrors({
            ...errors,
            confirmPassword: "",
          });
        }
        break;
    }
  };

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container mt-5 needs-validation">
      <form id="form" onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input id="firstName" value={firstName} className="form-control w-50" type="text" onChange={handleErrors} />
          {errors.firstName && (<div className="text-danger">{errors.firstName}</div>)}
        </div>
        <div>
          <label>Last Name: </label>
          <input id="lastName" value={lastName} className="form-control w-50" type="text" onChange={handleErrors} />
          {errors.lastName && (<div className="text-danger">{errors.lastName}</div>)}
        </div>
        <div>
          <label>Email: </label>
          <input id="email" value={email} className="form-control w-50" type="text" onChange={handleErrors} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div>
          <label>Password: </label>
          <input id="password" className="form-control w-50" type="password" onChange={handleErrors} />
          {errors.password && (<div className="text-danger">{errors.password}</div>)}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input id="confirmPassword" className="form-control w-50" type="password" onChange={handleErrors} />
          {errors.confirmPassword && (<div className="text-danger">{errors.confirmPassword}</div>)}
        </div>
        {(errors.firstName || errors.lastName || errors.email || errors.password || errors.confirmPassword)
          ? (<button className="btn btn-primary mt-3" type="submit" value="Create User" disabled>Submit</button>)
          : (<button className="btn btn-primary mt-3" type="submit" value="Create User">Submit</button>)}
      </form>

      <h3 className="mt-5">Form Data</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
};

export default DataForm;
