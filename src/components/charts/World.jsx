import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

class World extends React.Component {

    componentDidMount() {
        var chart = am4core.create("worldDiv", am4maps.MapChart);
    
        // Choose map type
        chart.geodata = am4geodata_worldLow;
        chart.projection = new am4maps.projections.Orthographic();
        chart.panBehavior = "rotateLongLat";

        var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.useGeodata = true;

        // Country lines
        var polygonTemplate = worldSeries.mapPolygons.template;
        // polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#3f51b5");
        polygonTemplate.opacity = 0.3;
        polygonTemplate.stroke = am4core.color("#fff");
        polygonTemplate.strokeWidth = 1;
        polygonTemplate.nonScalingStroke = true;

        // Hover effect
        // var hs = polygonTemplate.states.create("hover");
        // hs.properties.fill = am4core.color("#367B25");

        // Background color
        chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#aadaff");
        chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

        // Dots on the map
        let imageSeries = chart.series.push(new am4maps.MapImageSeries());
        let imageSeriesTemplate = imageSeries.mapImages.template;
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";

        let circle = imageSeriesTemplate.createChild(am4core.Circle);
        circle.radius = 7;
        circle.fill = am4core.color("#B27799");
        circle.nonScaling = true;
        circle.tooltipText = "{title}, {value}C°";

        imageSeries.heatRules.push({
            target: circle,
            property: "fill",
            min: am4core.color("#082284"),
            max: am4core.color("#f54029"),
            minValue: -30,
            maxValue: 50
        });

        let heatLegend = chart.createChild(am4charts.HeatLegend);
        heatLegend.series = imageSeries;
        heatLegend.orientation = "vertical";
        heatLegend.minValue = -30;
        heatLegend.maxValue = 50;

        imageSeries.data = this.props.data;

        this.chart = chart;
        this.imageSeries = imageSeries;
    }

    componentDidUpdate() {
        this.imageSeries.data = this.props.data;
    }
    
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    
    render() {
        return (
            <div id="worldDiv" style={{ width: "100%", height: "620px", marginTop: "10px" }}></div>
        );
    }
}

export default World;