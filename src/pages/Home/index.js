import React from 'react'
// import './styles.sass'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';
import Table from './table'
import data from '../../services/mock.json'


class Graphics extends React.PureComponent {
  render() {
    const { graphicData } = this.props;

    return (
      <BarChart
        width={800}
        height={300}
        data={graphicData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Aceleracion Baja Media" dataKey="bar1" stackId="a" fill="red" />
        <Bar name="Aceleracion Baja Alta" dataKey="bar2" fill="green" />
        <Bar name="Aceleracion Baja Int" dataKey="bar3" fill="black" />
      </BarChart>
    );
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      extendedData: data.map(player => ({
        ...player,
        checked: false,
      })),
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { extendedData } = this.state;
    const item = e.target.value;
    const isChecked = e.target.checked;
    const update = extendedData.map((player) => {
      if (player.username === item) {
        return {
          ...player,
          checked: isChecked,
        };
      }
      return player;
    });
    this.setState({ extendedData: update });
  }

  onClick(e) {
    const { extendedData } = this.state;
    const item = e.target.value;
    if (item === 'desc') {
      console.log(item)
      const sortByDesc = extendedData.map((player) => {
        let min; let max;
        // if (player.bar1 > player.bar2 && player.bar1 > player.bar3) {
        //   const max = player.bar1;
        //   if (player.bar2 > player.bar3) {
        //     const min = player.bar3;
        //   } const min = player.bar2;
        //   player.bar2 = max;
        //   player.bar1 = player.bar3;
        //   player.bar3 = min;
        // }
        if (player.bar2 > player.bar1 && player.bar2 > player.bar3) {
          max = player.bar2;
          if (player.bar1 > player.bar3) {
            min = player.bar3;
            return {
              ...player,
              bar2: player.bar1,
              bar1: max,
            };
            // console.log(player.bar1)
            // console.log(player.bar2)
            // console.log(player.bar3)
          } min = player.bar1;
          player.bar2 = player.bar3;
          player.bar3 = min;
          player.bar1 = max;
        }
        // if (player.bar3 > player.bar1 && player.bar3 > player.bar2) {
        //   const max = player.bar3;
        //   if (player.bar2 > player.bar1) {
        //     const min = player.bar1;
        //   } const min = player.bar2;
        // }
      });
      this.setState({ extendedData: sortByDesc });
    }
    // if (item === 'asc') {
    // }
  }


  render() {
    const { extendedData } = this.state;
    let filteredData = extendedData.filter((player) => {
      if (player.checked !== false) {
        return true;
      }
      return false;
    })
    if (filteredData.length === 0) {
      filteredData = extendedData;
    }
    // console.log(filteredData)
    return (
      <div className="container">
        <Graphics graphicData={filteredData} />
        <Table tableData={extendedData} onChange={this.onChange} onClick={this.onClick} />
      </div>
    )
  }
}

Graphics.propTypes = {
  graphicData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
export default Home;
