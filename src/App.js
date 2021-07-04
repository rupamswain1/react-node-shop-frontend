import logo from './logo.svg';
import './App.scss';
import Header from './components/header/headerComponent';
import SignUpPage from './pages/signUpPage/signUpPage.component';
function App() {
  return (
    <div className="react-node-store-container">
      <Header/>
      <SignUpPage/>
       My first page
    </div>
  );
}

export default App;
