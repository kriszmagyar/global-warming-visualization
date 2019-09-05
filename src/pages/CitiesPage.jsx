import React from "react";
import Bar from "../components/charts/Bar";
import { MultipleSelect } from "react-select-material-ui";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../assets/css/slider.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import config from "../config";
import Typography from '@material-ui/core/Typography';

class CitiesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init: false,
            data: [],
            selectedCities: ["Budapest"],
            options: ["New York", "London", "Vienna", "Budapest"],
            minYear: config.MIN_YEAR,
            maxYear: config.MAX_YEAR
        };
    }

    componentDidMount() {
        const data = this.getData().filter(x => {
            return this.state.selectedCities.includes(x.city);
        });
        this.setState({ data, init: true });
    }

    getData() {

        return [{
            city: "Budapest",
            values: [
                { year: 1975, celsius: 30 },
                { year: 1976, celsius: 32 },
                { year: 1977, celsius: 34 },
                { year: 1978, celsius: 31 },
                { year: 1979, celsius: 29 },
                { year: 1980, celsius: 25 }
            ]
        }, {
            city: "London",
            values: [
                { year: 1975, celsius: 30 },
                { year: 1976, celsius: 32 },
                { year: 1977, celsius: 34 },
                { year: 1978, celsius: 31 },
                { year: 1979, celsius: 29 },
                { year: 1980, celsius: 25 }
            ]
        }, {
            city: "Vienna",
            values: [
                { year: 1975, celsius: 30 },
                { year: 1976, celsius: 32 },
                { year: 1977, celsius: 34 },
                { year: 1978, celsius: 31 },
                { year: 1979, celsius: 29 },
                { year: 1980, celsius: 25 }
            ]
        }, {
            city: "New York",
            values: [
                { year: 1975, celsius: 30 },
                { year: 1976, celsius: 32 },
                { year: 1977, celsius: 34 },
                { year: 1978, celsius: 31 },
                { year: 1979, celsius: 29 },
                { year: 1980, celsius: 25 }
            ]
        }]
    }

    handleCitySelect = (values) => {
        const data = this.getData().filter(x => {
            return values.includes(x.city);
        })
        this.setState({ selectedCities: values, data });
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
                    <Typography variant="h2">Avg temperature by cities</Typography>
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