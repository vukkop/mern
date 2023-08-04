import { useState } from "react"
import React from 'react'

const BoxGenerator = ({ onCreate }) => {
  const [box, setBox] = useState({
    color: "",
    height: 100
  });

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const inputKey = e.target.name

    switch (inputKey) {
      case "color":
        setBox({
          ...box,
          [inputKey]: inputValue
        });
        break
      case "height":
        setBox({
          ...box,
          [inputKey]: inputValue
        });
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBox = {
      color: box.color,
      height: box.height
    };

    onCreate(newBox)
    setBox({
      color: "",
      height: 100
    })

  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Color: </label>
          <input name="color" value={box.color} className="form-control w-50" type="text" onChange={handleInput} />
        </div>
        <div>
          <label>Height: </label>
          <input name="height" value={box.height} className="form-control w-50" type="text" onChange={handleInput} />
        </div>
        <button className="btn btn-primary mt-3" >Submit</button>
      </form>
    </div>
  )
}

export default BoxGenerator;
