import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import type { RootObject } from '../redux/api/viewSlice/viewType';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { delCards } from '../redux/api/viewSlice/viewSlice';
import { addFavorites } from '../redux/api/favoriteSlice/favoriteSlice';
// import { moreAllCards } from '../redux/api/showMoreSlice/moreSlice';

type OneDotaCardProps = {
  oneCard: RootObject;
};

export default function OneDotaCard({
  oneCard,
}: OneDotaCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const favorite = useAppSelector((store) => store.favorite.favoritesCards);

  const checkFavourite = (): boolean => {
    if (favorite.includes(oneCard)) {
      return false;
    }
    return true;
  };

  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`https://api.opendota.com${oneCard.img}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {oneCard.localized_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            attack_type: {oneCard.attack_type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            base_health: {oneCard.base_health}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            base_mana: {oneCard.base_mana}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            base_mana: {oneCard.base_armor}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => dispatch(delCards(oneCard.id))} size="small">
            Delete
          </Button>
          {/* <Button onClick={() => dispatch(moreAllCards)} size="small">
            More
          </Button> */}
          <Button
            onClick={() => checkFavourite() && dispatch(addFavorites(oneCard))}
            size="small"
          >
            Favorites
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
