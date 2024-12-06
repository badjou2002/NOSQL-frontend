import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const AfficheArticles = () => {
    const { articles, isLoading, error } = useSelector((state) => state.storearticles);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleAddToCart = (art) => {
        dispatch(addToCart(art));
        navigate("/cart");
    };

    const renderArticles = () => {
        if (isLoading)
            return <center>
                <ReactLoading type='spokes' color="red" height={'8%'} width={'8%'} />
            </center>
        if (error)
            return <p>Impossible d'afficher la liste des articles...</p>
        return <React.Fragment>
            {articles &&
                <div
                    style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "left", marginTop: 100 }}>
                    {articles.map((art, ind) => {
                        return <Card sx={{ width: '400px', margin: 1, backgroundColor: 'rgb(0, 0, 0 ,0.05)', boxShadow: '-8px 8px 8px rgba(0, 0, 0, 0.2)' }} key={ind}>
                            <CardMedia
                                component="img"
                                alt="image"
                                height="160"
                                width={150}
                                image={art.imageart}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {art.reference}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Prix : {art.prix} DT
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    disabled={art.qtestock < 1}
                                    onClick={() => handleAddToCart(art)}
                                    variant="outlined" color="success" size="small"
                                >
                                    {art.qtestock < 1 ? "OUT OF SOLD" : "Add to cart"}
                                </Button>
                            </CardActions>
                        </Card>
                    })}
                </div>
            }
        </React.Fragment>
    }

    return (
        <div className="container">
            {renderArticles()}
        </div>
    )
}
export default AfficheArticles