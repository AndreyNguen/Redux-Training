import { Grid } from '@mui/material';
import React from 'react';
import AddCard from '../components/AddCard';
import OneDotaCard from '../components/OneDotaCard';
import { useAppSelector } from '../redux/hooks';

export default function MainPage(): JSX.Element {
  const allDotaCards = useAppSelector((store) => store.setApi.cards);

  console.log(allDotaCards, '777');

  return (
    <>
      <AddCard />
      <Grid container spacing={2}>
        {allDotaCards.map((oneCard) => (
          <OneDotaCard oneCard={oneCard} key={oneCard.id} />
        ))}
      </Grid>
    </>
  );
}
