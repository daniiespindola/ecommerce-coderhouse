import React from 'react'
import Item from '../Item/Item.js'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
      grid: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row'
    }
}))


export const ItemList = ({items=[]}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <Grid
            container
            spacing={6}
            className={classes.grid}
        >
            {items.map(item => <Item key={item.id} item={item}/> )}
        </Grid>
        </div>
    )
}

export default ItemList;