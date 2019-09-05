import React from 'react';
import World from '../components/charts/World'

class WorldPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init: false,
            data: []
        };
    }

    componentDidMount() {
        const data = this.getData();
        this.setState({ data, init: true });
    }

    getData() {
        return [{
            "latitude": 48.856614,
            "longitude": 2.352222,
            "title": "Paris",
            "value": 30
          }, {
            "latitude": 40.712775,
            "longitude": -74.005973,
            "title": "New York",
            "value": 10
          }, {
            "latitude": 49.282729,
            "longitude": -123.120738,
            "title": "Vancouver",
            "value": 50
        }];
    }

    render() {
        if (!this.state.init) return "Loading...";
        return (
            <World data={this.state.data} />
        )
    }
}

export default WorldPage;