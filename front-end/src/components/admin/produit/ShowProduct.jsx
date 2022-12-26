import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const base_url = "http://localhost:5000/images/";

const ShowProduct = () => {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product/product")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }, []);

  return (
    <div className="m-4 p-5 ">
      <Link to="/dashboard/products/add" className="sm-text mx-auto">
                   
                    <button className="btn btn-primary m-4 p-2">
                      Create new Product 
                    </button>
                  </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Categorie</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr>
              <td>
                {" "}
                <Card.Img
                  variant="top"
                  src={base_url + item.image}
                  style={{ width: "100px", objectFit: "cover" }}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price},00 DHs</td>
              <td>{item.categorie_name.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ShowProduct;
