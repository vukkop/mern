import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { deleteById } from "../Utils/UtilsFunc";
import { Alert, AlertTitle } from "@mui/material";

const Main = () => {
  const [authorslist, setAuthorsList] = useState([]);
  const [toaster, setToaster] = useState('');

  useEffect(() => {
    getList();
  }, []);

  const removeOne = (id, name = "item") => {
    deleteById(id)
    setAuthorsList((current) => current.filter(el => el._id !== id))
    setToaster(`Successfully deleted ${name}.`)
    setTimeout(() => {
      setToaster('');
    }, 4000);
  }

  const getList = () => {
    axios
      .get("http://localhost:8000/api/authors/all")
      .then((res) => {
        setAuthorsList(res.data)
      }).catch((err) => console.log(err))
  }

  return (
    <div>
      <Header />

      <h4>We have qoutes by:</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col" className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            authorslist.map((el, i) =>
              <tr key={i}>
                <td >{el.name}</td>
                <td className="text-center">
                  <Link to={`http://localhost:3000/authors/${el._id}/edit`} className="btn btn-warning me-3">Edit</Link>
                  <button onClick={() => removeOne(el._id, el.name)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

      {
        toaster &&
        <Alert className='w-50 float-end mt-3' severity="success">
          <AlertTitle>Success</AlertTitle>
          {toaster}
        </Alert>
      }


    </div>
  );
};

export default Main
