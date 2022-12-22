import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ShowLivreur = () => {

  const [update, setUpdate] = useState(false)
  return (
    <>
     
    

   <Container className='d-flex flex-column w-100 m-auto border border-1 rounded-1 border-success mx-auto '>
   <div>
    <button>Add Livreur</button>
   </div>
   <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>

                        </div>
                        <div className="dataTables_length d-flex flex-row" id="dataTable_length">
                          <label> Show 
                            <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm">
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                          </label>
                        </div>
                        <div className="card-body w-100">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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

                                        <tr>
                                            <td>Thor Walton</td>
                                            <td>mail.name@gmail.com <br/> +212 678 898678 </td>
                                            <td>New York</td>
                                            <td>Active</td>
                                            <td> update </td>
                                        </tr>
                                        <tr>
                                            <td>Thor Walton</td>
                                            <td>mail.name@gmail.com <br/> +212 678 898678 </td>
                                            <td>New York</td>
                                            <td>Active</td>
                                            <td> update </td>
                                        </tr>
    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-5">
                            <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                          </div>
                            <div className="col-sm-12 col-md-7">
                              <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                <ul className="pagination">
                                  <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                                    <Link to="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</Link></li>
                                  <li className="paginate_button page-item active">
                                    <Link to="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" className="page-link">1</Link></li>
                                  <li className="paginate_button page-item ">
                                    <Link to="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" className="page-link">2</Link></li>
                                  <li className="paginate_button page-item ">
                                    <Link to="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" className="page-link">3</Link></li>
                                  <li className="paginate_button page-item ">
                                    <Link to="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" className="page-link">4</Link></li>
                                  <li className="paginate_button page-item ">
                                    <Link to="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" className="page-link">5</Link></li>
                                  <li className="paginate_button page-item ">
                                    <Link to="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" className="page-link">6</Link></li>
                                  <li className="paginate_button page-item next" id="dataTable_next">
                                    <Link to="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" className="page-link">Next</Link></li>
                                </ul>
                              </div>
                            </div>
                        </div>
                    </div>
   </Container>

  
   </>
  )
}

export default ShowLivreur