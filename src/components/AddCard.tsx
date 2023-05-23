import { Button, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { addDotaCard } from '../redux/api/viewSlice/viewSlice';
import { useAppDispatch } from '../redux/hooks';

export default function AddCard(): JSX.Element {
  const [addCardInput, setAddCardInput] = useState({
    localized_name: '',
    img: '',
  });
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setAddCardInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <FormControl
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addDotaCard(addCardInput));
      }}
    >
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="localized_name"
          value={addCardInput.localized_name}
          onChange={changeHandler}
          id="filled-basic"
          label="Add Name"
          variant="filled"
        />
        <TextField
          name="img"
          value={addCardInput.img}
          onChange={changeHandler}
          id="filled-basic"
          label="Add image"
          variant="filled"
        />
        <Button type="submit">Add</Button>
      </Box>
    </FormControl>
  );
}
