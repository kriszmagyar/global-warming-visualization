import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

class World extends React.Component {

    componentDidMount() {
        var chart = am4core.create("worldDiv", am4maps.MapChart);
    
        // Choose map type
        chart.geodata = am4geodata_worldLow;
        chart.projection = new am4maps.projections.Orthographic();
        chart.panBehavior = "rotateLongLat";

        var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.exclude = ["AQ"];
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

        this.chart = chart;
    }
    
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    
    render() {
        return (
            <div id="worldDiv" style={{ width: "100%", height: "620px" }}></div>
        );
    }
}

export default World;