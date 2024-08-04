import ImageGeneration from '@/containers/ImageGeneration/ImageGeneration'
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import UIMansonry from '@/components/UIMasonry/UIMasonry'

export default function Home() {
  const imagesArr = []
  return (
    <Box sx={{}}>
      <Grid
        container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url('${banner1.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
        gap={3}
      >
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '42px' }} textAlign="center">
            AI Image Generation
          </Typography>
          <Typography textAlign="center">Feel free to use</Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            sx={{
              backgroundColor: 'white',
              color: 'black',
              padding: '14px 30px',
              borderRadius: '14px',
              '&:hover': {
                color: 'white',
              },
            }}
            href="#godown"
          >
            Try For free
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={6} id="godown" gap={3}>
        <Grid item xs={9}>
          <ImageGeneration />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Generate images like these
          </Typography>
          <UIMansonry />
        </Grid>
      </Grid>
    </Box>
  )
}
