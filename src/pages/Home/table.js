import React from 'react'
import PropTypes from 'prop-types';
// import ButtonGroup from './buttonGroup';
import Checkbox from './checkbox';


export default class Table extends React.Component {
  render() {
    const { onChange, tableData, onClick } = this.props;
    return (
      <div>
        <button type="button" value="asc" onClick={onClick}> ASC</button>
        <button type="button" value="desc" onClick={onClick}> DESC </button>
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
            {tableData.map(row => (
              <tr key={row.username}>
                <td>
                  <Checkbox
                    type="checkbox"
                    value={row.username}
                    checked={row.checked}
                    onChange={onChange}
                  />
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
      </div>
    )
  }
}
Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}
