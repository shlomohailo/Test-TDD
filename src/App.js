import  Children  from '../src/components/pages/Childrens/Childrens';
import './App.css';
import Layers from './components/pages/layers/layers';

function App() {
  return (
    <div className="App">
      hello world
      <Children />
      <Layers numberKids={5} nameTeacher="dalia" class="f"/>
    </div>
  );
}

export default App;
