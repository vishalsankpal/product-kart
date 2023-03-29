import './App.scss';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';
import { MainContent } from './Components/MainContent/MainContent';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <LeftSidebar />
        <MainContent />
      </div>
    </CartProvider>
  );
}

export default App;
