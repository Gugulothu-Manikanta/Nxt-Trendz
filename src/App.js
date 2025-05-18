import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
<<<<<<< HEAD
import ProductItemDetails from './components/ProductItemDetails'
=======
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
<<<<<<< HEAD
    <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
=======
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
