import React, {useState} from 'react';
import{ Nav, Navbar, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Data from './data/data'
// import { propTypes } from 'react-bootstrap/esm/Image';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom'
import Detail from './component/Detail'
import Cart from './component/Cart';
import Card from './component/Card';
import BodyAndBath from './component/BodyAndBath'
import Gifts from './component/Gifts'
import Signin from './component/Signin'
import Signout from './component/Signout'


function App() {

  let [product, setProduct] = useState(Data);
  let [cartMessage, setCartMessage] = useState(false);
  let [login, setLogin] = useState(false);
  let [loginModal, setLoginModal] = useState(false);
  let [logoutModal, setLogoutModal] = useState(false);

  function mainBestsellers() {
    var forArray = [];
    for(let i=0; i<3; i++){
      forArray.push(<Card product={product[i+1]} key={i}></Card>)
    }
    return forArray
}

  return (
  <div className="App">

  <Router>    
  {/* Nav */}

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to ="/s_shopping"><img className="logo" src="https://ji-yeon0107.github.io/s_shopping/sabon_logo.png" alt='sabon_logo' /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/s_shopping">Home</Nav.Link>
            <NavDropdown title="Shopping" id="basic-nav-dropdown">
              <NavDropdown.Item className="scale-1"><Nav.Link as={Link} to="/bodyandbath">Body And Bath</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item className="scale-1"><Nav.Link as={Link} to="/gifts">Gifts</Nav.Link></NavDropdown.Item>
            </NavDropdown>
            {
              login === false
              ? <Nav.Link><span onClick={ ()=> setLogoutModal(true) }>Sign In</span></Nav.Link>
              : <Nav.Link><span onClick={ ()=> setLoginModal(true)}>Sign Out</span></Nav.Link>
            } 
              <Nav.Link as={Link} to ="/cart">Cart <i className="fas fa-shopping-cart"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {
        loginModal === true
        ? <div className="modal-container" onClick={ () => setLoginModal(false) } >
            <div className="signin-bg">
              <p>???????????? ???????????????????</p>
              <Signout login={login} setLogin={setLogin}></Signout>
            </div>
          </div>
        : null
      }

      {
        logoutModal === true
        ?<div className="modal-container" onClick={ () => setLogoutModal(false)}>
          <div className="signin-bg">
            <p>?????? ????????????<br/> ????????? ????????? ?????????!</p>
            <Signin login={login} setLogin={setLogin}></Signin>
          </div>
        </div>
        :null
      }
    <Switch>
        <Route path="/s_shopping">
          <div className="banner-top">
              <h1>Shop Best Sellers</h1>
              <p className="text-second">????????? ????????? ?????? ???????????? ???????????????.</p>
              <p className="text-third">????????? ????????? ???????????????, ?????? ????????? ???????????????.</p>
              <div className="button"><Link to="/bodyandbath">????????????</Link></div>
          </div>
          <div className="Container">
            <div className="row">
              <h1 className="mt-10 mb-5">Best Sellers</h1>
                {mainBestsellers()}
            </div>
    {/* ?????? - ???????????? */}
            <h1 className="mt-10 mb-5">Promotion</h1>
            <div className="row">
                <Col sm><Link to ="/gifts"><img src="https://ji-yeon0107.github.io/s_shopping/promotion1.jpg" alt="promo"/></Link></Col>
                <Col sm><Link to ="/gifts"><img src="https://ji-yeon0107.github.io/s_shopping/promotion2.jpg" alt="promo"/></Link></Col>
                <Col sm><Link to ="/gifts"><img src="https://ji-yeon0107.github.io/s_shopping/promotion3.jpg" alt="promo"/></Link></Col>
            </div>
            <h1 className="mt-10 mb-5">Gifts</h1>
            <Row>
              <Col>
              <Link to = "/gifts">
                <div className="background hover">
                      <div className="textbox">
                        <h1>Gift Sets</h1>
                        <p className="text-second">???????????? ???????????? Tokyo ?????? ???????????? ???????????????!</p>
                      </div>
                </div>
              </Link>
              </Col>
            </Row>
            <Row>
                <div className="footer">??Copyright | ????????????????????????</div>
            </Row>
        </div>
        </Route>
      {/* ??????????????? ?????? */}
        <Route path ="/bodyandbath">
          <BodyAndBath product={product} setProduct={setProduct}></BodyAndBath>
        </Route>
        <Route path ="/gifts">
          <Gifts product={product}></Gifts>
        </Route> 
        <Route path="/detail/:num">
          <Detail product={product} cartMessage={cartMessage} setCartMessage={setCartMessage}></Detail>
        </Route>
        <Route path="/cart">
            <Cart cartMessage={cartMessage} setCartMessage={setCartMessage}></Cart>
        </Route>
    </Switch>
  </Router>    
</div>
  );
}




export default App;
