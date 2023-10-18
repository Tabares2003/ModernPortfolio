import React from 'react';
import { Typography, Grid, Box } from "@mui/material"
import { useContext } from 'react';
import { LanguageContext } from '../LenChange/LanguageProvider'
import { Slide } from "react-awesome-reveal";
import './Home.css'

export default function Home() {

    const { language } = useContext(LanguageContext);

    return (
        <>
            <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="home">
                <Box component={Grid} item xs={12} md={12} lg={12} display={{ xs: 'none', md: 'block', lg: 'block' }} style={{ position: 'relative' }}>
                    <img src="https://i.postimg.cc/PrVkYvfd/Header.webp" alt="Header" style={{ width: '100%', height: '480px', opacity: 0.3 }} />
                    <Grid style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <Slide>
                            <Typography sx={{ fontSize: '.8rem', color: '#666666' }}>
                                {language === 'en' ? 'SOFTWARE DEVELOPER' : ' DESARROLLADOR DE SOFTWARE'}
                            </Typography>
                        </Slide>
                        <Slide>
                            <Typography sx={{
                                fontWeight: '600',
                                fontSize: '2.5rem',
                                color: 'white',
                                fontFamily: 'Play, sans-serif',
                                backgroundImage: 'linear-gradient(-225deg, white 0%, lightblue 29%, #9ccc65 67%, gray 100%)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'textclip 3s linear infinite',
                                display: 'inline-block'
                            }}>
                                PABLO TABARES
                            </Typography>
                        </Slide>
                    </Grid>
                </Box>
                <Box component={Grid} item xs={12} md={12} lg={12} display={{ xs: 'block', md: 'none', lg: 'none' }} position="relative">
                    <img src="https://i.postimg.cc/vZhNRpjX/Header-Mobile.webp" alt="HeaderMobile" style={{ width: '100%', height: 'auto', opacity: 0.3 }} />
                    <Grid style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '.8rem', color: '#666666' }}>
                            {language === 'en' ? 'SOFTWARE DEVELOPER' : ' DESARROLLADOR DE SOFTWARE'}
                        </Typography>
                        <Slide>
                            <Typography sx={{
                                fontWeight: '600',
                                fontSize: '2.5rem',
                                color: 'white',
                                fontFamily: 'Play, sans-serif',
                                backgroundImage: 'linear-gradient(-225deg, white 0%, lightblue 29%, #9ccc65 67%, gray 100%)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'textclip 3s linear infinite',
                                display: 'inline-block'
                            }}>
                                PABLO TABARES
                            </Typography>
                        </Slide>
                    </Grid>
                </Box>
            </Grid>
        </>

    )
}