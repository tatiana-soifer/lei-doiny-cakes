import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import '../css/Main.css';

const useStyles = makeStyles({root: {maxWidth: 345,}, media: {height: 140,},});
function Item ({photo, title, price, category, pId}){
    const classes = useStyles();
    return(
        <div  className="card-container">
            <Card className={classes.root}>
                <Link  to={`/productDetail/${pId}`}>
                    <div className="card-container-1">
                        <CardActionArea>
                            <CardContent>
                                <h2>{title}</h2>                
                                <p className="item-category">{category}</p>
                            </CardContent>
                            <CardMedia className={classes.media} image={photo} title={title} />
                            <div className="card-capa">
                                <h2>Ver más</h2>
                            </div>
                        </CardActionArea>
                    </div>
                </Link>
                <div className="card-container-2">
                    <CardContent >
                        <p><span>$</span>{price} </p>
                    </CardContent>
                    <CardActions className="card-container-buttons">
                        <Link to={`/productDetail/${pId}`}>
                            <button className="icon-item-detail-shopping"><i className="fas fa-shopping-cart" /></button>
                        </Link>
                    </CardActions>
                </div>
            </Card>
        </div>
    );
};

export default Item;