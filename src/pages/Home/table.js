import React from 'react'
import PropTypes from 'prop-types';
import Checkbox from './checkbox';


export default class Table extends React.Component {
  render() {
    const { onChange, tableData, onClick, handleChange } = this.props;
    return (
      <div>
        {/* <button type="button" value="asc" onClick={onClick}> ASC</button>
        <button type="button" value="desc" onClick={onClick}> DESC </button> */}
        <form>
          <label>Nombre del jugador:</label>
          <input
            type="text"
            name="name"
            value={tableData.name}
            onChange={handleChange}
          />
          {/* <input type="button" value="Enviar" onClick={} /> */}
        </form>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th> Name </th>
              <th>
                {/* No me reconoce el onClick como funcion */}
                <button type="button" onClick={() => tableData.onClick('acc6')}>
                  acc6
                </button>
              </th>
              <th>
                <button type="button">
                  acc6%
                </button>
              </th>
              <th>
                <button type="button">
                  acc7
                </button>
              </th>
              <th>
                <button type="button">
                  acc7%
                </button>
              </th>
              <th>
                <button type="button">
                  acc8
                </button>
              </th>
              <th>
                <button type="button">
                  acc8%
                </button>
              </th>
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
  // eslint-disable-next-line react/require-default-props
  handleChange: PropTypes.func,
}
