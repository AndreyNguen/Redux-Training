import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

export default function ShowMore(): JSX.Element {
  const moreArr = useAppSelector((store) => store.more.more);

  return (
    <Grid container spacing={2}>
      {moreArr.map((oneMore) => (
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={`https://api.opendota.com${oneMore.img}`}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {oneMore.localized_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                attack_type: {oneMore.attack_type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                base_health: {oneMore.base_health}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                base_mana: {oneMore.base_mana}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                base_mana: {oneMore.base_armor}
              </Typography>
            </CardContent>
            <CardActions>
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
