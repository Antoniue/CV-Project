import './App.css';
import { Preview } from './components/Preview';
import { personal, work, ed, Working } from './components/Working';

function App() {
  function sendArrays(){
    Preview({work, ed, personal});
  }
  return (
    <div className="App">
      <button className="preview" onClick={sendArrays}>Preview</button>
      <Working />
    </div>
  );
}

export default App;
