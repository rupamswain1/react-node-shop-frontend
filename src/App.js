import logo from './logo.svg';
import './App.scss';
import Header from './components/header/headerComponent';
import SignIn from './pages/signIn/signInComponent'
function App() {
  return (
    <div className="react-node-store-container">
      <Header/>
      <SignIn/>
       My first page
    </div>
  );
}

export default App;
