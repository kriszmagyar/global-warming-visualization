import React from 'react';
import { Bar as BarChartJs } from 'react-chartjs-2';

class Bar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data, minYear, maxYear } = this.props;
        const years = Array.from(new Array(maxYear - minYear + 1), (x,i) => i + minYear);

        const convertedData = {
            labels: years,
            datasets: data.map((city, index) => {
                return {
                    label: city.city,
                    data: city.values.map(x => x.celsius),
                    backgroundColor: backgroundColors[index]
                }
            })
        };

        const options = {};

        return (
            <BarChartJs data={convertedData} options={options} />
        );
    }
}

const backgroundColors = [
    'rgba(200, 50, 50, 0.8)',
    'rgba(60, 260, 60, 0.8)',
    'rgba(70, 70, 270, 0.8)',
    'rgba(80, 80, 80, 0.8)',
    'rgba(90, 90, 90, 0.8)',
    'rgba(100, 100, 100, 0.8)',
    'rgba(110, 110, 110 0.8)',
    'rgba(120, 120, 120, 0.8)',
    'rgba(120, 50, 50, 0.8)',
    'rgba(160, 160, 160, 0.8)'
]

export default Bar;