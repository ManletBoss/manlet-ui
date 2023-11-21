import logo from './manletTeaser1.png';
import twitterLogo from './TwitterLogo.png';
import discordIcon from './discordIcon.png';
import './App.css';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" gutterBottom>
          Super Soylana Manlets!
        </Typography>


        <img src={logo} width={500} height={300} />
        <div className="parent">
          <div className="child" >
            <a href="https://twitter.com/SuperSoyManlets" >
              <img src={twitterLogo} width={120} height={120} ></img>
            </a>
          </div>
          <div className="child"> 
            <a href="https://discord.gg/NHyKJMpgJD" >
              <img src={discordIcon} width={100} height={65} className= "discordIcon"  ></img>
            </a>
          </div>
        </div>

        <Typography variant="h3" className="Coming-Soon">

          Coming Soon!
        </Typography>
      </header>
    </div>
  );
}

export default App;
