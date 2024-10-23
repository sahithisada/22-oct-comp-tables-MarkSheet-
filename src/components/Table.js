import React from 'react'

function Table(props) {
  return (
    <div className="App">
        <h3>{props.name}</h3>
     <table>
      <thead>
      <tr>
        <th>Subject</th>
        <th>Max Marks</th>
        <th>Marks Obtained</th>
        <th>Result</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>Telugu</td>
          <td>100</td>
          <td>{props.Tmarks}</td>
          <td>pass</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Hindi</td>
          <td>100</td>
          <td>{props.Hmarks}</td>
          <td>pass</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>English</td>
          <td>100</td>
          <td>{props.Emarks}</td>
          <td>pass</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>Maths</td>
          <td>100</td>
          <td>{props.Mmarks}</td>
          <td>pass</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>Science</td>
          <td>100</td>
          <td>{props.Scmarks}</td>
          <td>pass</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Social</td>
          <td>100</td>
          <td>{props.Somarks}</td>
          <td>pass</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>600</td>
          <td>{props.Total}</td>
          <td>pass</td>
        </tr>
      </tfoot>
     </table>
    </div>
  )
}

export default Table
