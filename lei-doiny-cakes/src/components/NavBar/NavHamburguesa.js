import React from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import {useCart} from '../Cart/CartContext.js';
import Cartwidget from './CartWidget';
import '../css/Main.css';


const StyledMenu = withStyles({
    })((props) => (
        <Menu elevation={0} getContentAnchorEl={null} anchorOrigin={{vertical: 'bottom', horizontal: 'center',}} transformOrigin={{vertical: 'top', horizontal: 'center',}} {...props} />
    ));

export default function NavHamburguesa() {
    const cartInfo = useCart();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const totalPriceItems = () => {
        return cartInfo.totalPrice();
    };
    return(
        <div>
            <Button className="justify-content-end" aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
                <div className="button-carrito justify-content-end">
                    <i className="fas fa-shopping-bag" />
                    <Cartwidget/> 
                </div>
                <div className="linea-carrito">
                    <p>Carrito</p>
                </div>
            </Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <div className="navBar-card">
                    {totalPriceItems() >= 1 ?
                    <>
                        <div className="navBarCard-totalPrice">
                            <p>Productos agregados:</p> 
                            <Cartwidget/> 
                        </div>
                        <div className="navBarCard-totalPrice">
                            <p>Subtotal:</p> 
                            <h3> $ {totalPriceItems()}</h3>
                        </div>
                        <Link to="/cart" className="navBarCard-btn">
                            <button className="btn">Finalizar compra</button>
                        </Link>
                    </>
                    : 
                    <p>No hay articulos en su carrito</p>
                    }
                </div>
            </StyledMenu>
        </div>
    );
};
