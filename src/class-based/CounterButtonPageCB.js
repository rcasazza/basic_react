import React from 'react';
import { CounterButtonCB } from './CounterButtonCB';
import { CongratulationsMessageCB } from './CongratulationsMessageCB';
import { DisplayIf } from '../DisplayIf';

export class CounterButtonPageCB extends React.Component {
    state = {
        numberOfClicks: 0,
    };

    constructor() {

// NB: could define state here, but normally more readable to do above
//      this.state = {}

// NB: this is what we would have to use if increment were not a functional method but just a normal JS method.
// Essentially, "this" would be broken without this bind.
//        this.increment = this.increment.bind(this);

    }

    // like useEffect first time it's called
    componentDidMount() {

    }

    // like useEffect with array of when to update
    componentDidUpdate() {

    }

    // like useEffect method passed to execute when unmounting
    componentWillUnmount() {

    }

    //
    // NB: never use UNSAFE_ methods, they are being removed and not performant!
    //

    increment = () => {
        this.setState({ numberOfClicks: this.state.numberOfClicks + 1})
    }

    render() {
        return (
            <>
              <h1>The Counter Button Page</h1>
              <DisplayIf condition={ this.state.numberOfClicks >= 10 }>
                  <CongratulationsMessageCB numberOfClicks={this.state.numberOfClicks} threshold={10} />
              </DisplayIf>
              <CounterButtonCB numberOfClicks={this.state.numberOfClicks} onIncrement={this.increment} />
              <p>
                  This is so cool!
              </p>
            </>
          );
    }
}