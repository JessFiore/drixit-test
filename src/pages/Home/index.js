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
        direction: {
          acc6: 'asc',
        },
      })),
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
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

  onClick(key) {
    const { extendedData } = this.state;
    this.setState({
      extendedData: extendedData.sort((a, b) => (
        // No se si esta bien indicarle asi
        extendedData.direction[key] === 'asc'
          ? a[key] - b[key]
          : b[key] - b[key]
      )),
    })

    // Funciona, al metodo onClick hay que sacarle el parametro key y cambiar en el table.js el onClick={onClick} 
    // const { extendedData } = this.state;
    // const sortByAsc = extendedData.sort((prev, next) => {
    //   return prev.acc6 - next.acc6;
    // });
    // this.setState({ extendedData: sortByAsc });

    // Como yo queria hacerlo pero no me reconoce el item dentro del return
    // const item = e.target.value;
    // const { extendedData } = this.state;
    // const sortByAsc = extendedData.sort((prev, next) => {
    //   return prev.item - next.item;
    // });
    // this.setState({ extendedData: sortByAsc });
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
