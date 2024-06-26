import { useState } from "react";
import Counter from "./components/counter";

const Home = () => {
  const [date, setDate] = useState('Today')
    return(
      <div>
        <div>home page</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur iusto in ad adipisci sunt labore esse. Tempora quisquam praesentium iusto consequatur, velit, nisi hic magnam quos minus, beatae provident.</p>
        <Counter sampleProps= {'anything'} />

        <div style={{marginTop: '40px'}}>
          {date}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button onClick={function () {
            setDate('Today');
          }}>Today</button>
          <button onClick={function () {
            setDate('Yesterday');
          }}>Yesterday</button>
          <button onClick={function () {
            setDate('Tomorrow');
          }}>Tomorrow</button>
        </div>
      </div>
    )
}
  
  export default Home;