import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import './ShowLivreur.css';

import axios from "axios";

const ShowLivreur = () => {
  const [livreurs, setLivreur] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:5000/all-livreur").then((Response) => {
   
    console.log(Response.data);
    setLivreur(Response.data);
  }).catch((error)=>{
    console.log(error);
  });

  },[])

  return (
    <>
      <Container className="d-flex flex-column w-100 m-auto border border-1 rounded-1 border-success mx-auto ">
        <div className="card shadow mb-4">
          <div
            id="dataTable_filter"
            className="d-flex flex-row justify-content-evenly dataTables_filter flex-end mb-2 "
          >
            <label className="col-6 d-flex pt-4">
              
              <input
                type="search"
                className="form-control form-control-s w-75 h-75 "
                placeholder="search"
                aria-controls="dataTable"
              />
            </label>
            <div className="col-4 d-flex align-items-center justify-content-end ">
              <button className="addButton h-50 border rounded-2">Add Livreur</button>
            </div>
          </div>

          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Mar7aba's Livreur
            </h6>
          </div>

          <div className="card-body w-100">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th>Contact</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    livreurs.map(livreur=>{
                      return <tr>
                        <td>{livreur.name}</td>
                        <td>
                        {livreur.email} <br /> {livreur.phone}
                        </td>
                        <td>{livreur.ville}</td>
                        <td>{livreur.status}</td>
                        <td> update </td>
                      </tr>

                    })
                  }
                   
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShowLivreur;
