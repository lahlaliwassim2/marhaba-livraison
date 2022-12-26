import React, { useState, useEffect } from "react";
import axios from "axios";
function AddProduct() {
  let [categorie, setcategorie] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categorie/all")
      .then((res) => {
        setcategorie(res.data);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }, []);
  console.log(categorie);
  return (
    <div>
      <div className="container ">
        <div className="row  ">
          <div className="col-md-6 m-auto rounded bg-light mt-5 w-70  ">
            <div>
              <div className="text-center fw-bold mt-2">
                <h1>Add New Product</h1>
              </div>

              <form>
                <div className="mb-3">
                  <label className="form-label ">Title</label>
                  <input
                    type="Name"
                    className="form-control"
                    name="title"
                    
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Descreption</label>
                  <input
                    type="Email"
                    className="form-control"
                    name="description"
                    
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    
                  />
                </div>
                <div className="mb-3">
                  <label class="form-label">Categorie</label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    {categorie.map((item) => (
                      <option name="categorie" value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label class="form-label">Product image</label>
                  <input
                    type="file"
                    class="form-control"
                    name="file"
                    
                  />
                </div>

                <div class="d-flex p-3">
                  <input type="submit" className="btn p-3 text-white fs-5 btn-primary w-100 " />
                
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
