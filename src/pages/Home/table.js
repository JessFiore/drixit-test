import React from 'react'
import PropTypes from 'prop-types';
import Checkbox from './checkbox';


export default class Table extends React.Component {
  render() {
    const { onChange, tableData, onClick, handleChange } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Ingrese nombre del jugador"
            value={tableData.name}
            onChange={handleChange}
          />
          <input type="button" value="Enviar" onClick={() => handleChange} />
        </form>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th> Name </th>
              <th>
                <button type="button" onClick={() => onClick('acc6')}>
                  acc6
                </button>
              </th>
              <th>
                <button type="button" onClick={() => onClick('acc6%')}>
                  acc6%
                </button>
              </th>
              <th>
                <button type="button" onClick={() => onClick('acc7')}>
                  acc7
                </button>
              </th>
              <th>
                <button type="button" onClick={() => onClick('acc7%')}>
                  acc7%
                </button>
              </th>
              <th>
                <button type="button" onClick={() => onClick('acc8')}>
                  acc8
                </button>
              </th>
              <th>
                <button type="button" onClick={() => onClick('acc8%')}>
                  acc8%
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => {
              if (row.show === true) {
                return (
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
                )
              } return true
            })
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
