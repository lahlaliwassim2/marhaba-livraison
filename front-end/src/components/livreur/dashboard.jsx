import React from 'react'

function dashboard() {
  return (
    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Order ID</th>
        <th scope="col">Name</th>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total</th>
        <th scope="col">Adress</th>
        <th scope="col">Phone</th>
        <th scope="col">Status</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2345</td>
        <td>Hamid</td>
        <td>Tacos, Pizza</td>
        <td>2 , 1</td>
        <td>400.00DHS</td>
        <td>Rue moqawama</td>
        <td>0654912156</td>
        <td>

<select class="form-select" aria-label="Default select example">
  <option value="progress">In Progress</option>
  <option value="done">Delivered</option>
</select></td>
      </tr>
      <tr>
        <td>2345</td>
        <td>Hamid</td>
        <td>Tacos, Pizza</td>
        <td>2 , 1</td>
        <td>400.00DHS</td>
        <td>Rue moqawama</td>
        <td>0654912156</td>
        <td>

<select class="form-select" aria-label="Default select example">
<option value="progress">In Progress</option>
  <option value="done">Delivered</option>

</select></td>
      </tr>
      <tr>
        <td>2345</td>
        <td>Hamid</td>
        <td>Tacos, Pizza</td>
        <td>2 , 1</td>
        <td>400.00DHS</td>
        <td>Rue moqawama</td>
        <td>0654912156</td>
        <td>

<select class="form-select" aria-label="Default select example">
<option value="progress">In Progress</option>
  <option value="done">Delivered</option>
</select></td>
      </tr>
    </tbody>
  </table>
 )
}

export default dashboard