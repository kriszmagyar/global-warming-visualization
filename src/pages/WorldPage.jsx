import React from 'react';
import World from '../components/charts/World';
import Slider from 'rc-slider';
import Typography from '@material-ui/core/Typography';

class WorldPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init: false,
            data: [],
            year: 1975
        };
    }

    componentDidMount() {
        const data = this.getData();
        this.setState({ data, init: true });
    }

    getData() {
        return [{
            "latitude": 48.856614,
            "longitude": 2.352222,
            "title": "Paris",
            "value": 30
          }, {
            "latitude": 40.712775,
            "longitude": -74.005973,
            "title": "New York",
            "value": 10
          }, {
            "latitude": 49.282729,
            "longitude": -123.120738,
            "title": "Vancouver",
            "value": 50
        }];
    }

    onSliderChange = (value) => {
        this.setState({
            year: value, data: [{
                "latitude": 48.856614,
                "longitude": 2.352222,
                "title": "Paris",
                "value": -20
              }, {
                "latitude": 40.712775,
                "longitude": -74.005973,
                "title": "New York",
                "value": -20
              }, {
                "latitude": 49.282729,
                "longitude": -123.120738,
                "title": "Vancouver",
                "value": -20
            }]
        })
    }

    render() {
        if (!this.state.init) return "Loading...";
        return (
            <React.Fragment>
                <World data={this.state.data} />
                <Slider min={1975} max={1980} value={this.state.year} onChange={this.onSliderChange} />
                <Typography variant="h6">{this.state.year}</Typography>
            </React.Fragment>
        )
    }
}

export default WorldPage;