import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';

// modified to need URL parameter "name" and optional query parameter "startingValue"
export const CounterButtonPage = () => {
    const { name } = useParams();

    const [numberOfClicks, setNumberOfClicks] = useState(Number(localStorage.getItem('numberOfClicks')) || 0);
    const incrementClickCount = () => setNumberOfClicks(numberOfClicks + 1);
  
    const displayAlert = () => {
      alert('Hello!');
    }

    useEffect(() => {
        localStorage.setItem('numberOfClicks', numberOfClicks);
    }, [numberOfClicks]);
  
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