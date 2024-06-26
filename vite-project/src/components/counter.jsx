import {useState} from 'react';

const Counter = () => {
    //steps
    //1 - it returns an array of two values
    // --- first it returns A VARIABLE
    ///--- second it returns a function 
    // 2 it takes in an argument of a value of any data type
    const {Counter, SetCounter} = useState(0)
    console.log(Counter)

    return (
        <div style={{marginTop: '20px', display:'flex', alignItems: 'center', gap: '10px'}}>
          <button
            onClick={function () {
                SetCounter(function (previousValue){
                    if (previousValue === 0){
                        return previousValue;
                    } 

                    return previousValue - 1
                })
            }}
            style={{cursor: 'pointer' }}>Decrement</button>
         <div>{Counter}</div>
          <button
            onClick={function () {
                SetCounter(function (previousValue){
                    if (previousValue === 20){
                        return previousValue;
                    }
                })
            }}
            style={{cursor: 'pointer' }}>Increment</button>
        </div>

    )
}

export default Counter;