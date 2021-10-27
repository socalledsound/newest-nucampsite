import { useState } from 'react';
import { useSelector } from 'react-redux'
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Container,
    // Row,
    // Col,
    // Jumbotron,
    Collapse,
    NavItem,

    Button,
    Modal,
    ModalHeader,
    ModalBody,

} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { selectCurrentUser } from '../features/user/userSlice'
import Login from '../features/user/Login'
import NucampLogo from '../app/assets/images/logo.png'

function Header() {
    const [navOpen, toggleNav] = useState(false);
    const [modalOpen, toggleModal] = useState(false);

    const currentUser = useSelector(selectCurrentUser)



    return (
        <>
            {/* <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col>
                            <h1>NuCamp</h1>
                            <h2>a better way to camp</h2>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron> */}

            <Navbar dark sticky='top' expand='md'>
                <Container>
                    <NavbarBrand className='mr-auto' href='/'>
                        <img
                            src={NucampLogo}
                            height='30'
                            width='30'
                            alt='NuCamp Logo'
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={() => toggleNav(true)} />
                    <Collapse isOpen={navOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/campsites'>
                                    <i className='fa fa-list fa-lg' /> Directory
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    <i className='fa fa-info fa-lg' /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    <i className='fa fa-address-card fa-lg' />{' '}
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <span className='navbar-text ml-auto'>

                            {
                                currentUser ? 
                                <div style={{width: '4rem', height: '4rem'}}>
                                    <img src={currentUser.avatar} alt={'user'} style={{width: '100%', height: '100%'}}/>
                                </div>
                                
                                :
                                <Button outline onClick={() => toggleModal(true)} style={{color: 'white', border: '1px solid white'}}>
                                <i className='fa fa-sign-in fa-lg' /> Login
                            </Button>
                            }

                            

                        </span>
                    </Collapse>
                </Container>
            </Navbar>

            <Modal isOpen={modalOpen} toggle={() => toggleModal(!modalOpen)}>

                <ModalHeader toggle={() => toggleModal(false)}>Login</ModalHeader>
                <ModalBody>
                    <Login toggleModal={toggleModal}/>
                </ModalBody>
            </Modal>
        </>
    );
}

export default Header;
