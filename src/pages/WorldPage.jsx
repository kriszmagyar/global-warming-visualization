import React from 'react';
import World from '../components/charts/World';
import Slider from 'rc-slider';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import config from "../config";
import { getRequest } from '../axios';

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
        this.onSliderChange = this.onSliderChange.bind(this);
        this.getData = this.getData.bind(this);
        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        this.getData(this.state.year, data => {
            this.setState({ data: data.cityTempDTOs, init: true });
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    getData(year, cb) {
        getRequest("/temperatures", { year }, cb);
    }

    onSliderChange (value) {
        this.getData(value, data => {
            this.setState({
                year: value,
                data: data.cityTempDTOs
            })
        });
    }

    timer() {
        const nextYear = Math.min(this.state.year + 1, config.MAX_YEAR);
        this.onSliderChange(nextYear);
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