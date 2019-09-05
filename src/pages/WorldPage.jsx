import React from 'react';
import World from '../components/charts/World'

class WorldPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            init: false
        };
    }

    componentDidMount() {
        this.setState({ init: true });
    }

    render() {
        if (!this.state.init) return "Loading...";
        return (
            <World />
        )
    }
}

export default WorldPage;