import React from 'react';
import {Link} from 'react-router-dom';
import informacion from '../../assets/icons/informacion.png';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import '../css/Main.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Item ({photo, title, price, category, pId}){
    const classes = useStyles();
    return(
        <div className="cardContainer">
            <Card className={classes.root}>
                <Link to={`/productDetail/${pId}`}>
                    <div className="cardContainer1">
                        <CardActionArea>
                            <CardContent>
                                <h2>{title}</h2>
                                <p className="itemCategory">{category}</p>
                            </CardContent>
                            <CardMedia className={classes.media} photo={photo} title={title} />
                                <div className="cardHover">
                                    <h2>Ver más</h2>
                                </div>
                        </CardActionArea>
                    </div>
                </Link>
                <div className="cardContainer1">
                <CardContent>
                    <p><span>$</span>{price}</p>
                </CardContent>
                <CardActions className="card-container-buttons">
                    <Link  to={`/itemDetail/${pId}`} className="botonDetalle">
                        <img src={informacion} alt='informacion'/>
                    </Link>
                </CardActions>
            </div>
        </Card>
    </div>
    );
};

export default Item;