import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';

// modified to need URL parameter "name" and optional query parameter "startingValue"
export const CounterButtonPage = () => {
    const { name } = useParams();
  
    const location = useLocation();
    console.log(parse(location.search));
    const startingValue = parse(location.search).startingValue || 0;

    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
    const incrementClickCount = () => setNumberOfClicks(numberOfClicks + 1);
  
    const displayAlert = () => {
      alert('Hello!');
    }
  
    return (
      <>
        <h1>{name}'s Counter Button Page</h1>
        <DisplayIf condition={ numberOfClicks >= 10 }>
            <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10} />
        </DisplayIf>
        <CounterButton numberOfClicks={numberOfClicks} onIncrement={incrementClickCount} />
        <button onClick={displayAlert}>Click Me!</button>
        <p>
            This is so cool!
        </p>
      </>
    );

}