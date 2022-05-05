import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemsListContainer greeting={'Bienvenido a nuestra Tienda!'}/>
    </div>
  );
}

export default App;
