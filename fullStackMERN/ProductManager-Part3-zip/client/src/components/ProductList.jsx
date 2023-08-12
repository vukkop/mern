import { Link } from "react-router-dom";
import { deleteOne } from "../Utils/UtilsFunc";

const ProductList = ({ productList, onDelete }) => {

  const deleteProduct = (id) => {
    deleteOne(id)
    onDelete(id)
  }

  return (
    <div className="row mt-5">
      <h3 className="text-center">ProductList</h3>
      <div className="list-group align-items-center">
        {productList.map((e, i) =>
          <div className="list-group-item list-group-item-action w-75" key={i}>
            <Link className="h5" to={`/product/${e._id}`}>{e.title}</Link >
            <button onClick={() => deleteProduct(e._id)} className="btn btn-outline-danger btn-sm ms-2 float-end">
              <i className="bi bi-trash"></i>
            </button>
          </div>
        )}


      </div>
    </div >
  )
}

export default ProductList
