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
      extendedData: data.map(player => ({
        ...player,
        checked: false,
      })),
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { extendedData } = this.state;
    const item = e.target.value;
    const isChecked = e.target.checked;
    const update = extendedData.map((player) => {
      if (player.username === item ) {
        return {
          ...player,
          checked: isChecked,
        };
      }
      return player;
    });

    this.setState({ extendedData: update });
  }

  render() {
    const { extendedData } = this.state;
    return <Table data={extendedData} onChange={this.onChange} />;
  }
}
export default Home;
