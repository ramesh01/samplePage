import './App.css';
import { BreadCrumbs } from './components/BreadCrumbs';
import { applicantData} from '../src/applicantData';
import { createContext } from 'react';
import { Applicant } from './components/Applicant';

export const applicantDetailsContext = createContext();
function App() {
  return (
    <div className="App">
     <applicantDetailsContext.Provider value={applicantData[0]}>
       <BreadCrumbs/>
       <Applicant/>
     </applicantDetailsContext.Provider>
    </div>
  );
}

export default App;
