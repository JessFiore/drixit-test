import React from 'react'
// import './styles.sass'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import data from '../../services/mock.json'

// class Graphics extends React.PureComponent {

//   render() {
//     return (
//       <BarChart
//         width={800}
//         height={300}
//         data={data}
//         margin={{
//           top: 20, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar name="Aceleracion Baja Int" dataKey="bar1" stackId="a" fill="#8884d8" />
//         <Bar name="Aceleracion Baja Media" dataKey="bar2" stackId="a" fill="#82ca9d" />
//         <Bar name="Aceleracion Baja Alta" dataKey="bar3" fill="#ffc658" />
//       </BarChart>
//     );
//   }
// }

class Table extends React.Component {
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
                <input
                  type="checkbox"
                  checked={this.props.isChecked}
                  onChange={this.props.handleChange}
                  value={row.username}
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
    )
  }
}


class Home extends React.Component() {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      graphicData: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { target } = e
    const { value } = target
    this.setState({ isChecked: !this.state.isChecked });
    const filteredData = this.props.data.filter(data => data.username === value);
  }

  //   // { console.log(filteredData) }
  //   // this.setState({graphicData: [].concat(filteredData)});

  render() {
    return <Table data={data} handleChange={this.handleChange} />;
  }
}
export default Home;