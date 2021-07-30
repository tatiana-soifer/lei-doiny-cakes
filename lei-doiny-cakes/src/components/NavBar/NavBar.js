import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {useCart} from '../Context/CartContext.js';
import Cartwidget from './CartWidget.js';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import logo from '../../assets/logo/logo.png';
import '../css/Main.css';

class Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState ({ clicked: !this.state.clicked})
    }
    render() {
        return (
        <nav className="NavbarItems">
            <div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Carrito</Link>
                    <Link to="/register">Newsletter</Link>
                </ul>
                <p>Menu</p>
            </div>
            <div className="logo-container">
                <Link to="/">
                    <div >
                        <img src={logo} alt=""/>
                    </div>
                </Link>
            </div>
            <Link to="/register">
                <div className="nav-suscribe">
                    <i className="far fa-edit"></i>
                    <h3>Suscribite</h3>
                </div>
            </Link>
        </nav>
        )
    }
}

export default Navbar;

const StyledMenu = withStyles({
    })((props) => (
        <Menu elevation={0} getContentAnchorEl={null} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} transformOrigin={{vertical: 'top', horizontal: 'center'}} {...props} />
));

export function CustomizedMenus() {
    const cartInfo = useCart()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const totalPriceItems= ()=>{
        return cartInfo.totalPrice() 
    }
    return(
    <div>
        <Button aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
            <div className="button-carrito">
                <i className="fas fa-shopping-bag"></i>
                <Cartwidget/> 
            </div>
            <div className="linea-carrito"><p>carrito</p></div>
        </Button>
        <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <div className="navBar-card">
                {
                    totalPriceItems()>=1 ?
                    <>
                        <div className="navBarCard-totalPrice">
                            <p>Items agregados:</p> 
                            <Cartwidget/> 
                        </div>
                        <div className="navBarCard-totalPrice">
                            <p>Subtotal:</p> 
                            <h3> $ {totalPriceItems()}</h3>
                        </div>
                        <Link to="/cart" className="navBarCard-btn btn">Finalizar compra</Link>
                    </>
                    : <p>No hay articulos en tu carrito</p>
                }
                </div>
            </StyledMenu>
        </div>
    );
}

