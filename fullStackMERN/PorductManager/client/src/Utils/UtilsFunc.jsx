import axios from "axios";

export const deleteOne = (id) => {
  axios
    .delete(`http://localhost:8000/api/products/${id}`)
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};


