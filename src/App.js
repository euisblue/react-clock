import './App.scss';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <Clock title="Tokyo" dateDiff={0} />
      <Clock title="Korea" dateDiff={0} />
      <Clock title="California" dateDiff={-17} />

    </div>
  );
}

export default App;
