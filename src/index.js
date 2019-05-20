import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
class App extends Component {
    render() {
        return (
            <div className="App">
            <h1 className="site-heading">Hello, React!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
