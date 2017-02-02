import React, {Component} from "react";
import {connect} from 'react-redux';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderRow)}
                </tbody>
            </table>
        );
    }

    renderRow(weatherItem) {
        const measurements = weatherItem.list;
        var name = weatherItem.city.name;

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    {measurements[0].main.temp}
                </td>
                <td>
                    {measurements[0].main.humidity}
                </td>
                <td>
                    {measurements[0].main.pressure}
                </td>
            </tr>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)