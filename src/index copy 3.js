import React from 'react';
import ReactDOM from 'react-dom';
import {toCelsius, toFahrenheit, tryConvert} from './utlss';
import './index.css';


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <div>水开了</div>
  }
  return <div>水还没开</div>
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: ''
    }
  }

  handleInput(e) {
    // this.setState({
    //   temperature: e.target.value
    // })
    this.props.onTemperatureChange(e.target.value);
  }

  render () {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature}
          onInput={e => this.handleInput(e)}/>
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    console.log(celsius, fahrenheit, scale);
    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={(temperature) => this.handleCelsiusChange(temperature)}/>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={(temperature) => this.handleFahrenheitChange(temperature)}/>
        {/* <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict> */}
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
