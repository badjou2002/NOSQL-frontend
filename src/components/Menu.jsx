import React, { useEffect, useState } from 'react'
import { Nav, Navbar, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '../features/AuthSlice';
import { default as Me } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.svg';
import LogoutIcon from '@mui/icons-material/Logout';

const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartTotalQuantity } = useSelector((state) => state.storecart);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const user = JSON.parse(localStorage.getItem("user"))
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        console.log(user);
    }, [])
    return (
        <Navbar fixed='top' style={{backgroundColor: 'rgba(0, 0, 0,0.8)', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.2)' }}>
            <Container fluid>

                <Navbar.Brand as={Link} to="/articles"> <Image src={logo} width={150} style={{marginTop:-5}}/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', margin: '10px' }}
                        navbarScroll
                    >
                        <Nav.Link style={{ color: 'white' }} as={Link} to="/">Articles</Nav.Link>
                        {user.role == "admin" && <Nav.Link style={{ color: 'white', marginLeft: '10px' }} as={Link} to="/articlesadmin">Admin</Nav.Link>}
                    </Nav>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="error"
                        onClick={() => { navigate("/cart") }}
                    >
                        <Badge badgeContent={cartTotalQuantity > 0 ? cartTotalQuantity : 0}
                            color="success">
                            <ShoppingCartIcon sx={{ fontSize: 30, color: 'white' }} color='action' />
                        </Badge>
                    </IconButton>
                    <IconButton
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        color="error"
                        sx={{ marginLeft: '10px' }}
                    >
                        <AccountCircleIcon sx={{ fontSize: 30, color: 'white' }} color='action' />
                    </IconButton>
                    <Me
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 0.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 6,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

                    >
                        <MenuItem><AccountCircleIcon sx={{ fontSize: 40,margin:1,marginLeft:-1}} color='action' />{user.firstname + " " + user.lastname}</MenuItem>
                        <MenuItem onClick={() => { dispatch(logout()); navigate('/login') }}><LogoutIcon sx={{ fontSize: 40,margin:1,marginLeft:-1}} color='action' />Logout</MenuItem>
                    </Me>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Menu
