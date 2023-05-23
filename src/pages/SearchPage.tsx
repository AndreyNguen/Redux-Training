import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppSelector } from '../redux/hooks';

export default function SearchPage(): JSX.Element {
  const [searchInput, setSearchinput] = useState('');

  const searchCards = useAppSelector((store) => store.setApi.cards);

  return (
    <>
      <TextField
        name="search"
        value={searchInput}
        onChange={(e) => setSearchinput(e.target.value)}
        id="filled-basic"
        label="Search"
        variant="filled"
      />
      <Grid container spacing={2}>
        {searchCards
          .filter((searchEl) => searchEl.localized_name.includes(searchInput))
          .map((searched) => (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={`https://api.opendota.com${searched.img}`}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {searched.localized_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    attack_type: {searched.attack_type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    base_health: {searched.base_health}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    base_mana: {searched.base_mana}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
