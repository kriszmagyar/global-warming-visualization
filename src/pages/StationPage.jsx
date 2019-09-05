import React from "react";
import Bar from "../components/charts/Bar";
import { MultipleSelect } from "react-select-material-ui";

class StationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init: false,
            data: [],
            selectedCities: ["Budapest"],
            options: ["New York", "London", "Vienna", "Budapest"],
            minYear: 1975,
            maxYear: 1980
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

    
    handleYearChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        if (!this.state.init) return null;

        return (
            <React.Fragment>
                <h2>Station</h2>
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
                <Bar data={this.state.data} minYear={this.state.minYear} maxYear={this.state.maxYear} />
            </React.Fragment>
        );
    }
}

export default StationPage;