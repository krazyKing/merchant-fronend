import React from 'react';
import './App.css';
import Merchants from "./components/merchants";

class App extends React.Component {
    state={ merchants: []}

    render() {
        return (
            <Merchants merchants={this.state.merchants} />
        );
    }
    componentDidMount() {
        fetch('http://localhost:4200/merchants')
            .then(res => res.json())
            .then((data) => {
                this.setState({ merchants: data })
            })
            .catch(console.log)
    }
}

export default App;
