import { styled } from '@mui/material';


export default styled((theme) => ({
//   formControl: {
//     margin: '50%', minWidth: '150', marginBottom: '30px',
//   },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
    backgroundColor: 'primary.main',

  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
  
}));