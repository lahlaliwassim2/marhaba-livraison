import React from 'react'
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import axios from "axios";

const ShowClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:5000/api/admin/all-clients").then((Response) => {
   
    console.log(Response.data);
    setClients(Response.data);
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
            <label className="col-5 ">
              Search:
              <input
                type="search"
                className="form-control form-control-s w-75 "
                placeholder=""
                aria-controls="dataTable"
              />
            </label>
            <div className="col-5 d-flex align-items-center justify-content-end ">
              <button className="h-50">Add Livreur</button>
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
                    clients.map(client=>{
                      return <tr>
                        <td>{client.name}</td>
                        <td>
                        {client.email} <br /> {client.phone}
                        </td>
                        <td>{client.ville}</td>
                        <td>{client.status}</td>
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
}

export default ShowClients
