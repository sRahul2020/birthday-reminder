import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const[people,setPeople] = useState(data);
  const[count, setCount] =useState(people.length);
  const clearAll = () =>{
    setPeople([]);
    setCount(0);
  }
  const viewAll = () =>{
    setPeople(data);
    setCount(data.length);
  }
  return <main>
    <section className="container">
      <h3>{count} Birthdays Today</h3>
      <List people={people} />
      {count > 0 ? <button onClick={clearAll}>Clear All</button> : <button onClick={viewAll}>View All</button>}
      

    </section>
  </main>;
}

export default App;