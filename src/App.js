import logo from './logo.svg';
import './App.scss';
import Header from './components/header/headerComponent';
import SignIn from './pages/signIn/signInComponent';
import SignUpPage from './pages/signUpPage/signUpPage.component';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="react-node-store-container">
        <Header/>
        <Switch>
            <Route exact path='/store/login' component={SignIn}/>
            <Route exact path='/store/signUp' component={SignUpPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
