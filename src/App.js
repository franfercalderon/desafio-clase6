import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import Navbar from "./components/Navbar/Navbar";
// import ItemCount  from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemsListContainer greetings={'Bienvenido a nuestra Tienda!'}/>
      {/* <ItemCount stock={5} initial={0}/> */}
    </div>
  );
}

export default App;
