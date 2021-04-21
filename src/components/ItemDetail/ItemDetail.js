import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBlockEnd: 20,
    marginInlineStart: 30,
    marginRight: 30,
    border: '1px solid',
    padding: 10,
    boxShadow: '4px 8px #000080'
  },
  media: {
    height: 300,
    width: '20rem'
  },
  expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

export default function ItemDetail({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onAdd = (count) => {
    setCount(count)
  }
 
    return <>
     {item
     ? <>
    <Card className={classes.root}>
    <CardHeader 
    title={item.title}
    subheader={`$${item.price}`}/>
     <img src={item.pictureUrl} alt="" className={classes.media} />
     <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {item.description}
          </Typography>
        </CardContent>
      </Collapse> 
      { count === 0 ?
          <ItemCount stock={item.stock} initial='1' onAdd={onAdd} />
          :
          <div>
              <Link to="/cart">
                  <button className="carrito" type="button"> Terminar mi compra </button>
              </Link>
          </div>
        }
    </Card>
       </>
     : null}
            
  </>;
   
  }
  