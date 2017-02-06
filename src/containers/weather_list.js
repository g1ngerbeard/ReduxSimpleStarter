import React, {Component} from "react";
import {connect} from 'react-redux';
import WeatherChart from '../components/weather_chart';
import CityMap from '../components/city_map';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderRow)}
                </tbody>
            </table>
        );
    }

    renderRow(cityData) {
        const measurements = cityData.list;
        const name = cityData.city.name;

        const tempData = measurements.map(item => item.main.temp);
        const humidityData = measurements.map(item => item.main.humidity);
        const pressureData = measurements.map(item => item.main.pressure);

        const {lat, lon} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><CityMap lon={lon} lat={lat}/></td>
                <td><WeatherChart data={tempData} color="orange" units="K"/></td>
                <td><WeatherChart data={humidityData} color="blue" units="hPa"/></td>
                <td><WeatherChart data={pressureData} color="green" units="%"/></td>
            </tr>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)