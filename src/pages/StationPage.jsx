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
            options: ["New York", "London", "Vienna", "Budapest"]
        };
    }

    componentDidMount() {
        const data = this.getData();
        this.setState({ data, init: true });
    }

    getData() {

        return [
            { year: 1975, budapest: 30, london: 25, vienna: 29, newyork: 20 },
            { year: 1976, budapest: 32, london: 25, vienna: 29, newyork: 20 },
            { year: 1977, budapest: 34, london: 25, vienna: 29, newyork: 20 },
            { year: 1978, budapest: 31, london: 25, vienna: 29, newyork: 20 },
            { year: 1979, budapest: 29, london: 25, vienna: 29, newyork: 20 },
            { year: 1980, budapest: 25, london: 25, vienna: 29, newyork: 20 }
        ]
    }

    handleChange = (values) => {
        this.setState({ selectedCities: values });
      };

    render() {

        if (!this.state.init) return null;

        return (
            <React.Fragment>
                <h2>Station</h2>
                <MultipleSelect
                    values={this.state.selectedCities}
                    options={this.state.options}
                    onChange={this.handleChange}
                    placeholder="Select a city..."
                    SelectProps={{
                        msgNoOptionsAvailable: "All cities are selected",
                        msgNoOptionsMatchFilter: "No city name matches the filter"
                    }}
                />
                <Bar data={this.state.data} selectedCities={this.state.selectedCities} />
            </React.Fragment>
        );
    }
}

export default StationPage;