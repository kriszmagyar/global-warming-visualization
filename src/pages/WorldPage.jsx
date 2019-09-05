import React from 'react';
import World from '../components/charts/World';
import Slider from 'rc-slider';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import config from "../config";

class WorldPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init: false,
            data: [],
            year: config.MIN_YEAR,
            intervalId: ""
        };
        this.startYearCounting = this.startYearCounting.bind(this);
        this.resetYearCounting = this.resetYearCounting.bind(this);
        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        const data = this.getData();
        this.setState({ data, init: true });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    getData() {
        return [{
            "latitude": 48.856614,
            "longitude": 2.352222,
            "city": "Paris",
            "value": 30
          }, {
            "latitude": 40.712775,
            "longitude": -74.005973,
            "city": "New York",
            "value": 10
          }, {
            "latitude": 49.282729,
            "longitude": -123.120738,
            "city": "Vancouver",
            "value": 50
        }];
    }

    onSliderChange (value) {
        this.setState({
            year: value
        })
    }

    timer() {
        this.setState((prevState) => ({
           year: Math.min(prevState.year + 1, config.MAX_YEAR) 
        }))
        if (this.state.year === config.MAX_YEAR) {
            clearInterval(this.state.intervalId);
        }
    }

    startYearCounting() {
        const intervalId = setInterval(this.timer, 1000);
        this.setState({ intervalId });
    }

    resetYearCounting() {
        clearInterval(this.state.intervalId);
        this.setState({ year: config.MIN_YEAR })
    }

    render() {
        if (!this.state.init) return "Loading...";
        return (
            <React.Fragment>
                <World data={this.state.data} />
                <div style={{marginTop: "-20px"}}>
                    <Button variant="contained" color="primary" onClick={() => this.startYearCounting()}>Start</Button>
                    <Button variant="contained" color="secondary" style={{marginLeft: "10px"}} onClick={() => this.resetYearCounting()}>Reset</Button>
                </div>
                <Slider min={config.MIN_YEAR} max={config.MAX_YEAR} value={this.state.year} onChange={this.onSliderChange} />
                <Typography variant="h6">{this.state.year}</Typography>
            </React.Fragment>
        )
    }
}

export default WorldPage;