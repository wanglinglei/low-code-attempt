
import './App.css';
import MyRouter from './components/MyRouter'
import router from './router'
function App() {
  return (
    <div >
       <MyRouter router={router}></MyRouter>
    </div>
  );
}

export default App;
