import Calculator from './Calculator';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* *******************  Heading Calculator  *************** */}
        <h1 className='heading'>CALCULATOR</h1>
         {/* ******************* Component Calculator  *************** */}
        <Calculator />  
      </header>
    </div>
  );
}

export default App;
