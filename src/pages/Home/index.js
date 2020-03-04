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
      players: data.map(player => ({
        ...player,
        checked: false,
        show: true,
      })),
      direction: {
        acc6: 'asc',
        acc6p: 'asc',
        acc7: 'asc',
        acc7p: 'asc',
        acc8: 'asc',
        acc8p: 'asc',
      },
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onChange(e) {
    const { players } = this.state;
    const item = e.target.value;
    const isChecked = e.target.checked;
    const update = players.map((player) => {
      if (player.username === item) {
        return {
          ...player,
          checked: isChecked,
        };
      }
      return player;
    });
    this.setState({ players: update });
  }

  onClick(key) {
    const { players } = this.state;
    const { direction } = this.state;
    this.setState({
      players: players.sort((a, b) => (
        direction[key] === 'asc'
          ? a[key] - b[key]
          : b[key] - a[key]
      )),
      direction: {
        [key]: direction[key] === 'asc'
          ? 'desc'
          : 'asc',
      },
    })
  }

  handleChange(e) {
    const { players } = this.state;
    const item = e.target.value;
    const update = players.map((player) => {
      if (player.name === item) {
        return {
          show: true,
        };
      }
      return {
        show: false,
      }
    });
    this.setState({ players: update });
  }

  render() {
    const { players } = this.state;
    let filteredData = players.filter((player) => {
      if (player.checked !== false) {
        return true;
      }
      return false;
    })
    if (filteredData.length === 0) {
      filteredData = players;
    }
    return (
      <div className="container">
        <Graphics graphicData={filteredData} />
        <Table tableData={players} onChange={this.onChange} onClick={this.onClick} onChangeInput={this.handleChange} />
      </div>
    )
  }
}

Graphics.propTypes = {
  graphicData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
export default Home;
