import React from 'react'
import Checkbox from './checkbox';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>  </th>
            <th> Name </th>
            <th> acc6 </th>
            <th> acc6% </th>
            <th> acc7 </th>
            <th> acc7% </th>
            <th> acc8 </th>
            <th> acc8% </th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(row => (
            <tr key={row.username}>
              <td>
                <label>
                  <Checkbox
                    type="checkbox"
                    value={row.username}
                    checked={this.props.isChecked}
                    onChange={this.props.handleChange}
                  />
                </label>
              </td>
              <td>
                {row.name}
              </td>
              <td>{row.acc6}</td>
              <td>{row['acc6%']}</td>
              <td>{row.acc7}</td>
              <td>{row['acc7%']}</td>
              <td>{row.acc8}</td>
              <td>{row['acc8%']}</td>
            </tr>
          ))
                      }
        </tbody>
      </table>
    )
  }
}
