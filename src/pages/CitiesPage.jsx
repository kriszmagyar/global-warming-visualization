import React from "react";
import Bar from "../components/charts/Bar";
import { MultipleSelect } from "react-select-material-ui";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../assets/css/slider.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import config from "../config";
import { getRequest } from "../axios";

class CitiesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init: false,
            data: [],
            selectedCities: ["Budapest"],
            options: config.availableCities,
            minYear: config.MIN_YEAR,
            maxYear: config.MAX_YEAR
        };
    }

    componentDidMount() {
        this.getData(this.state.selectedCities, data => {
            this.setState({ data: data.annualTemperatureLocationDTOs, init: true });
        });
    }

    getData(values, cb) {
        getRequest("/cities", { cities: values }, cb);
    }

    handleCitySelect = (values) => {
        this.getData(values, data => {
            this.setState({ selectedCities: values, data: data.annualTemperatureLocationDTOs });
        });
    };
    
    onSliderChange = (value) => {
        this.setState({
            minYear: value[0],
            maxYear: value[1]
        })
    }

    render() {
        if (!this.state.init) return "Loading...";
        return (
            <React.Fragment>
                <Paper style={{padding: '10px', margin: '10px 0'}}>
                    <h2>Avg temperature by cities</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <MultipleSelect
                                values={this.state.selectedCities}
                                options={this.state.options}
                                onChange={this.handleCitySelect}
                                placeholder="Select a city..."
                                SelectProps={{
                                    msgNoOptionsAvailable: "All cities are selected",
                                    msgNoOptionsMatchFilter: "No city name matches the filter"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label>Year select</label>
                            <Slider.Range min={config.MIN_YEAR} max={config.MAX_YEAR} value={[this.state.minYear, this.state.maxYear]} onChange={this.onSliderChange} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{margin: "20px 0"}}>
                        <Grid item xs={12} sm={6}>
                            <Bar data={this.state.data} minYear={this.state.minYear} maxYear={this.state.maxYear} type="bar" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Bar data={this.state.data} minYear={this.state.minYear} maxYear={this.state.maxYear} type="line" /> 
                        </Grid>
                    </Grid>
                </Paper>
            </React.Fragment>
        );
    }
}

export default CitiesPage;