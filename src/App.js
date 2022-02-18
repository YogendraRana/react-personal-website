//importing components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';


import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <>
    	<BrowserRouter>
    		<Navbar />
	    	<Switch>
	    		<Route exact path='/' component={Home} />
	    		<Route exact path='/about' component={About} />
	    		<Route exact path='/services' component={Services} />
	    		<Route exact path='/portfolio' component={Portfolio} />
	    		<Route exact path='/blog' component={Blog} />
	    		<Route exact path='/contact' component={Contact} />
	    		<Redirect to='/' />
			</Switch>
		</BrowserRouter>
    </>
  );
}

export default App;
