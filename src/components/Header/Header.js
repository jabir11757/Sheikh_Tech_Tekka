import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/ProviderContexts/ProviderContexts';
import './Header.css'
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.photoURL)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error('error:', error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Sheikh Tech Tekka</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/courses">Course</Link></Nav.Link>
                        <Nav.Link ><Link to="/faq">FAQ</Link></Nav.Link>
                        <Nav.Link ><Link to="/blog">Blog</Link></Nav.Link>

                    </Nav>
                    <Nav className='nav'>


                        <Nav.Link>

                            {
                                user?.uid ?
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center'>
                                            <Image className='me-4' style={{ height: '25px' }} roundedCircle src={user?.photoURL} alt='' />
                                        </div>

                                        <button onClick={handleSignOut}>Log Out</button>
                                    </div>
                                    :
                                    <div className='d-flex'>
                                        <div className='me-2 d-flex align-items-center'><FaUserAlt /></div>
                                        <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                                        <Nav.Link ><Link to="/signup">Signup</Link></Nav.Link>
                                    </div>
                            }
                        </Nav.Link>



                        <div class="form-check form-switch d-flex align-items-center ms-4">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;