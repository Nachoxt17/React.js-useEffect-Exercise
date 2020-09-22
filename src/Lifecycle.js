import React, { useState, useEffect } from 'react';

const Lifecycle = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log('useEffect []');
    }, []); /**+-Se va a Ejecutar 1 Sola Vez al Cargar la Página.*/

    useEffect(() => {
        console.log('useEffect No Dependency');
    }); /**+-Se va a Ejecutar Cada Vez que se Refresque la Página o Actualize un Estado cualquiera.*/

    useEffect(() => {
        console.log('useEffect [counter1]');
    }, [
        counter1,
    ]); /**+-Se va a Ejecutar Cada Vez que se Actualize el Estado de "counter1".*/

    useEffect(() => {
        console.log('useEffect [counter2]');
    }, [
        counter2,
    ]); /**+-Se va a Ejecutar Cada Vez que se Actualize el Estado de "counter2".*/

    useEffect(() => {
        console.log('useEffect [ counter1, counter2]');
    }, [
        counter2,
    ]); /**+-Se va a Ejecutar Cada Vez que se Actualize el Estado de "counter1" o "counter2".*/

    return (
        <div>
            <h1>+-Lifecycle:_</h1>
            <h2>Clicks Counter 1: {counter1}.</h2>
            <h2>Clicks Counter 2: {counter2}.</h2>
            <button onClick={() => setCounter1(counter1 + 1)}>
                Increment Counter 1
            </button>
            <button onClick={() => setCounter2(counter2 + 1)}>
                Increment Counter 2
            </button>
        </div>
    );
};

export default Lifecycle;
