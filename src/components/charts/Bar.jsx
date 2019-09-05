import React from 'react';
import { Line as LineChartJs, Bar as BarChartJs } from 'react-chartjs-2';

class Bar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data, minYear, maxYear, type } = this.props;
        const years = Array.from(new Array(maxYear - minYear + 1), (x,i) => i + minYear);

        const convertedData = {
            labels: years,
            datasets: data.map((city, index) => {
                const backgroundColor = index < backgroundColors.length ? backgroundColors[index] : '';
                return {
                    label: city.city,
                    data: city.annualTemperatureDTOs.map(x => x.temperature),
                    fill: false,
                    borderColor: backgroundColor,
                    backgroundColor
                }
            })
        };

        const options = {
            legend: { position: 'right' },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        switch(type) {
            case 'line': return <LineChartJs data={convertedData} options={options} />
            default: return <BarChartJs data={convertedData} options={options} />
        }
    }
}

const backgroundColors = [
    'rgba(63, 81, 181, 0.8)',
    'rgba(60, 260, 60, 0.8)',
    'rgba(70, 70, 270, 0.8)',
    'rgba(280, 80, 80, 0.8)',
    'rgba(90, 190, 90, 0.8)',
    'rgba(100, 160, 100, 0.8)',
    'rgba(110, 110, 110 0.8)',
    'rgba(120, 120, 120, 0.8)',
    'rgba(120, 50, 50, 0.8)',
    'rgba(160, 160, 160, 0.8)'
]

export default Bar;