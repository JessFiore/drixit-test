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
    this.exportCSVFile = this.exportCSVFile.bind(this);
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
    const update = players.map(player => ({
      ...player,
      show: player.name.includes(item),
    }));
    this.setState({ players: update });
  }

  // eslint-disable-next-line class-methods-use-this
  exportCSVFile(dataFile) {
    const csvDataFile = dataFile.map(row => ({
      name: row.name,
      acc6: row.acc6,
      acc6p: row['acc6%'],
      acc7: row.acc7,
      acc7p: row['acc7%'],
      acc8: row.acc8,
      acc8p: row['acc8%'],
    }));
    const csvRows = [];
    // console.log(csvDataFile)
    // get the headers
    const headers = Object.keys(csvDataFile[0]);
    csvRows.push(headers.join(','));
    // console.log(csvRows);
    // loop over the rows
    // eslint-disable-next-line no-restricted-syntax
    for (const row of csvDataFile) {
      const values = headers.map(header => row[header]);
      csvRows.push(values.join(','));
    }
    csvRows.join('\n')
    console.log(csvRows)
    // const blob = new Blob([csvRows], { type: 'text/csv' });
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.setAttribute('hidden', '');
    // a.setAttribute('href', url);
    // a.setAttribute('download', 'download.csv');
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
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
        <Table
          tableData={players}
          onChange={this.onChange}
          onClick={this.onClick}
          onChangeInput={this.handleChange}
          csvData={filteredData}
          exportCSV={this.exportCSVFile}
        />
      </div>
    )
  }
}

Graphics.propTypes = {
  graphicData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
export default Home;
