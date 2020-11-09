import './App.css';
import RoofHeader from './components/RoofHeader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BuildIcon from '@material-ui/icons/Build';
import PageviewIcon from '@material-ui/icons/Pageview';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <RoofHeader />
          
          <header className="white-space">
            <div className="overlap">
              <div className="options">
              <div className="options-text">
                <PageviewIcon style={{ fontSize: 50 }} />
                Free Inspection              
              </div>
              <div className="options-text">
                <AssignmentIcon style={{ fontSize: 50 }}/>
                File a Claim
                </div>
                <div className="options-text">
                <BuildIcon style={{ fontSize: 50 }}/>

                  Replace or Repair Roof
                </div>
                </div>
            </div>
          </header>          
      </header>
    </div>
  );
}

export default App;
