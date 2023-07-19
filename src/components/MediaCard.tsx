'use client'
import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ heading, text }: { heading: string; text: string }) {
  return (
    <Card sx={{height:'100%', cursor:'pointer'}} onClick={()=> {window.open('https://hpkingdom.com/')}}>
      <Image
        alt="Random image"
        src="https://hpkingdom.com/android-chrome-512x512.png"
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          opacity: '60%',
          objectFit: 'contain',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" target='_blank' href='https://hpkingdom.com/tech/'>Share</Button>
        <Button size="small"  target='_blank' href='https://hpkingdom.com/css/'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
