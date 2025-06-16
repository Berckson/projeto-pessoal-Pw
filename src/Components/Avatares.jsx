import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Avatares() {
  return (

      <Stack direction="row" spacing={2}>
      <Avatar

        alt="João Henrique"
        className='imgs'
        src="/src/assets/img/jao.jpeg"
        sx={{ width: 60, height: 60 }}
      />

      <Avatar
        alt="Berckson Thierry"
        className='imgs'
        src="/src/assets/img/thierry.jpeg"
        sx={{ width: 60, height: 60 }}
      />


    </Stack>




  );
}
