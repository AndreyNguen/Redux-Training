import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { deleteFavorite } from '../redux/api/favoriteSlice/favoriteSlice';

export default function FavoritePage(): JSX.Element {
  const dispatch = useAppDispatch();

  const favoriteArr = useAppSelector((store) => store.favorite.favoritesCards);

  return (
    <Grid container spacing={2}>
      {favoriteArr.map((favCard) => (
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={`https://api.opendota.com${favCard.img}`}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {favCard.localized_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                attack_type: {favCard.attack_type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                base_health: {favCard.base_health}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                base_mana: {favCard.base_mana}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => dispatch(deleteFavorite(favCard.id))}
                size="small"
              >
                Delete
              </Button>
              <Link to="/">
                <Button size="small">Back</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
