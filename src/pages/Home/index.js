import React from 'react'
// import './styles.sass'
// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';
import Table from './table'
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

class Home extends React.Component() {
  constructor() {
    super();
    this.state = {
      checkedItems: new Map(),
      graphicData: []
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.value;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  // const filteredData = this.props.data.filter(data => data.username === value);
  //   // { console.log(filteredData) }
  //   // this.setState({graphicData: [].concat(filteredData)});

  render() {
    return <Table data={data} handleChange={this.handleChange} />;
  }
}
export default Home;
