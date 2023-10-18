import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { Grid, Typography, Divider, Box, IconButton } from "@mui/material"
import iconPT from '../../assets/LogoPT.svg'
import { useContext } from 'react';
import { LanguageContext } from '../LenChange/LanguageProvider'
import { Slide } from "react-awesome-reveal";

export default function Footer() {

    const { language } = useContext(LanguageContext);

    return (
        <>
            {/* Container for the footer */}
            <Box bgcolor="black" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mt={5}>
                <Box bgcolor="black" color="white" display={'flex'} sx={{ width: '95%', flexDirection: 'column' }}>
                    {/* Horizontal divider line */}
                    <Divider sx={{ border: '1px solid white', marginBottom: '2rem', marginTop: '2rem', opacity: '50%' }} />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        {/* Social Media section */}
                        <Grid item xs={6} md={4} style={{ padding: '1rem' }}>
                            <Slide>
                                <Typography style={{ margin: '0 0 10px 10px', fontWeight: '500', fontFamily: 'Segoe UI', fontWeight: '800', fontSize: '.9rem' }}>
                                    {language === 'en' ? 'MY NETWORKS' : 'MIS REDES'}
                                </Typography>
                            </Slide>
                            <a href="https://www.linkedin.com/in/pablo-tabares-17483b231/" target="_blank" rel="noopener noreferrer" style={{ textDecorationLine: 'none' }}>
                                <IconButton sx={{
                                    fill: 'white', color: 'white', height: '41px', width: '41px', '&:hover': {
                                        color: '#0a66c2',
                                    },
                                }}>
                                    <AiFillLinkedin />
                                </IconButton>
                            </a>
                            {/* Links to LinkedIn and GitHub */}
                            <a href="https://github.com/Tabares2003" target="_blank" rel="noopener noreferrer" style={{ textDecorationLine: 'none' }}>
                                <IconButton sx={{
                                    fill: 'white', color: 'white', height: '41px', width: '41px', '&:hover': {
                                        color: 'gray',
                                    },
                                }}>
                                    <AiFillGithub />
                                </IconButton>
                            </a>
                        </Grid>
                        {/* Logo */}
                        <Grid item xs={6} md={4} style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={iconPT} alt="" style={{ width: '60px', height: '60px' }} />
                        </Grid>
                    </Box>
                    {/* Horizontal divider line */}
                    <Divider sx={{ border: '1px solid white', marginBottom: '1rem', marginTop: '2.3rem', opacity: '50%' }} />
                    {/* Copyright notice */}
                    <Typography style={{ fontSize: '.9rem', fontFamily: 'Segoe UI', fontWeight: '500', textAlign: 'center', color: 'gray', marginBottom: '1rem', }}>
                        © 2023 Pablo Tabares
                    </Typography>
                </Box>
            </Box>
        </>
    )
}