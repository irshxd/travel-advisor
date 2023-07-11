import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceDetails from './PlaceDetails';
import useStyles from './style';

const List = () => {
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');
  const classes = useStyles();

  const places=[
{name:'biryani'},
{name:'biryani'},
{name:'biryani'},
{name:'biryani'},
{name:'biryani'}
  ]

//   useEffect(() => {
//     setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
//   }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Food & Dining around you</Typography>
      <FormControl >
</FormControl>
          <FormControl className={classes.formControl} sx={{ m: 1, minWidth: 120 }} >
            <InputLabel id="type">Filter</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}  sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid  key={i} item xs={12}>
                <PlaceDetails  place={place} />
              </Grid>
            ))}
          </Grid>
    </div>
  );
};

export default List;