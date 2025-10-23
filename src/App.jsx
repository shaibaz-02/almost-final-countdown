import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="cake walk" targetTime={1}/>
        <TimerChallenge title="easy-medium" targetTime={2}/>
        <TimerChallenge title="Hard" targetTime={0.6}/>
         <TimerChallenge title="Pros Only" targetTime={0.22}/>
      </div>
    </>
  );
}

export default App;
