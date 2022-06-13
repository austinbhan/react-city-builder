import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  // you'll need to track a city name, which starts as the city name of your choice.
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example
  const [waterFront, setWaterfront] = useState('waterfront-1') ;
  const [castle, setCastle] = useState('castle-1');
  const [skyline, setSkyline] = useState('skyline-1');
  const [slogans, setSlogans] = useState([]);
  const [sloganForm, setSloganForm] = useState('');
  // const [cityName, setCityName] = useState('');

  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <City 
        waterfront={waterFront}
        castle={castle}
        skyline={skyline}
        // cityName={cityName}
      />
        
      <h1>
        {/* dynamically update the city name here using state */}
        Welcome to beautiful Portland!
      </h1>
      <div className='bottom'>
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        {/* <CityNameInput setCityName={setCityName}/> */}
        <section className='dropdowns'>
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
          <WaterfrontDropdown setWaterfront={setWaterfront} />
          <CastleDropdown setCastle={setCastle}/>
          <SkylineDropdown setSkyline={setSkyline} />
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        <SloganForm slogans={slogans} setSlogans={setSlogans} setSloganForm={setSloganForm} sloganForm={sloganForm}/>
        <SloganList slogans={slogans}/>
        {/* here, the SloganList component takes the array of slogans that lives in state */}

      </div>
    </div>
  );
}

export default App;
