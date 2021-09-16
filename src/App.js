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
  let [loginstate, setLoginstate] = useState(false);
  let [logoutstate, setLogoutstate] = useState(true);
  let [상태, 상태변경] = useState(false);


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
            <NavDropdown.Item className="scale-1"><Nav.Link as={Link}to="/bodyandbath">Body And Bath</Nav.Link></NavDropdown.Item>
            <NavDropdown.Item className="scale-1"><Nav.Link as={Link} to="/gifts">Gifts</Nav.Link></NavDropdown.Item>
          </NavDropdown>
          {
            상태 === false
            ? <Nav.Link><span onClick={()=>{
              setLoginstate(true);
            }}>Sign In</span></Nav.Link>
            : <Nav.Link><span onClick={()=>{
              setLogoutstate(false);
            }}>Sign out</span></Nav.Link>
          }
            
            
            <Nav.Link as={Link} to ="/cart">Cart <i className="fas fa-shopping-cart"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    {
      loginstate === true
      ? <div className="modal-container" onClick={()=>{
        setLoginstate(false)
      }}>
          <div className="signin-bg">
            <p className="mt-10">구글 아이디로<br/> 빠르게 로그인 하세요!</p>
            <Signin 상태={상태} 상태변경={상태변경}></Signin>
          </div>
        </div>
      : null      
    }
    {
      logoutstate === false
      ? <div className="signin-container" onClick={()=>{
        setLogoutstate(true)
      }}>
          <div className="signin-bg">
            <p className="mt-10">벌써 가시려구요?😥</p>
            <Signout 상태={상태} 상태변경={상태변경}></Signout>
          </div>
        </div>
      : null      
    }
  <Switch>
      <Route path="/s_shopping">
        <div className="banner-top">
            <h1>Shop Best Sellers</h1>
            <p className="text-second">사봉의 베스트 셀러 상품들을 살펴보세요.</p>
            <p className="text-third">특별한 향기의 바디스크럽, 샤워 오일을 즐겨보세요.</p>
            <div className="button"><Link to="/bodyandbath">보러가기</Link></div>
        </div>
        <div className="Container">
          <div className="row">
            <h1 className="mt-10 mb-5">Best Sellers</h1>
              {mainBestsellers()}
          </div>
  {/* 메인 - 중간배너 */}
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
                      <p className="text-second">사랑하는 사람에게 Tokyo 한정 에디션을 선물하세요!</p>
                    </div>
              </div>
            </Link>
            </Col>
          </Row>
          <Row>
              <div className="footer">©Copyright | 개인정보처리방침</div>
          </Row>
      </div>
    {/* 서브 */}
      </Route>
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
