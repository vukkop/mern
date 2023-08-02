import React from "react";
import { useState } from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props
  const [countAge, setCountAge] = useState(age)

  const birthday = () => {
    setCountAge(countAge+1)
  }

  return(
  <div>
      <h2>{firstName}, {lastName}</h2>
      <p>Age: {countAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={birthday} className="btn btn-primary mb-5">Birthday Button for {firstName} {lastName}</button>
  </div>
  )
}

export default PersonCard;
