import React from 'react'
import Item from '../Item/Item.js'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    }
}))


export const ItemList = ({items=[]}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <Grid
            container
            spacing={6}
            direction="row"
            justify="flex-start"
            justifycontent="center"
            alignItems="flex-start"
        >
            {items.map(item => <Item item={item}/> )}
        </Grid>
        </div>
    )
}

export default ItemList;