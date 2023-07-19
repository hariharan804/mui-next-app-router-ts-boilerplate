import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box>
        <Alert severity="success" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle sx={{fontWeight:'700'}}>Hello Guys 👋</AlertTitle>
          This app uses the Next.js App Router, TypeScript and Material UI v5.
        </Alert>

        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={12} sm={6}>
            <MediaCard
              heading="Declaration And Initialization Using Array Constructor In JavaScript"
              text="Array Constructor in JavaScript The Array() constructor is a built-in JavaScript function used to create a new array object. It can be called with…"
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <MediaCard
              heading="What Is React.Js?"
              text="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies..."
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <MediaCard
              heading="4 Programming Language With High Demand In 2023"
              text="Top 4 Language with high demand in 2023   What is Programming ? Programming is a method by which we can give instructions to…"
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <MediaCard
              heading="CSS Selectors | CSS TUTORIAL FOR FREE"
              text="Let’s knock the obvious ones out, for the beginners, before we move on to the more advanced selectors.

              The star symbol will target every single element on the page."
            />
          </Grid>
        </Grid>
      </Box>

      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0,
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant="overline" sx={{ fontWeight: 500 }}>
             Side Bar
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
