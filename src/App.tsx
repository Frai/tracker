import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './App.css';

import { Activity } from './components/Activity/Activity';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <div className="App">
        <Activity />
      </div>
    </LocalizationProvider>
  );
}

export default App;
