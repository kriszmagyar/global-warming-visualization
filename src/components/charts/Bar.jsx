import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class Bar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.data = this.handleData();

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";

        // eslint-disable-next-line
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        this.updateSeries(chart);
    
        this.chart = chart;
    }

    componentDidUpdate() {
        this.chart.data = this.props.data;
      }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    handleData() {
        return this.props.data;
    }

    updateSeries(chart) {
        this.props.selectedCities.forEach(city => {
            let series1 = chart.series.push(new am4charts.ColumnSeries());
            series1.dataFields.valueY = this.formatCityName(city);
            series1.dataFields.categoryX = "year";
            series1.name = city;
            series1.columns.template.tooltipText = city + ": [bold]{valueY}[/] C°";
        });
    }

    formatCityName(name) {
        return name.replace(" ", "").toLowerCase();
    }

    render() {
        return (
            <div id="chartdiv" style={{ width: "100%", height: "590px" }}></div>
        );
    }

}

export default Bar;