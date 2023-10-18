import { useContext } from 'react';
import { Typography,  Grid, IconButton,  Container, Paper } from "@mui/material" 
import { useMediaQuery, useTheme } from '@mui/material';
import { AiFillGithub } from 'react-icons/ai' 
import { Fade } from "react-awesome-reveal";
import { dataProjectsEn, dataProjectsEs } from "../../data/portfolioData";  
import { LanguageContext } from '../LenChange/LanguageProvider'

export default function Portfolio() {


    const { language } = useContext(LanguageContext);
    const dataProjects = language === 'en' ? dataProjectsEn : dataProjectsEs;
    //Consts measured, 80% and in md 100%.
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Grid container justifyContent="center" mt={9} >
                <Grid container style={{ width: isMdDown ? '95%' : '90%', display: 'flex', borderRadius: '3px', textAlign: 'center', justifyContent: 'center' }}>
                    <Fade delay={500} triggerOnce={true}>
                        <Typography id="porfolio" sx={{ fontWeight: '500', fontSize: '2rem', color: 'white', marginBottom: '3rem', fontFamily: 'Play, sans-serif;' }}>
                            {language === 'en' ? 'My projects' : 'Mis proyectos'}
                        </Typography>
                    </Fade>
                    <Container maxWidth={false} style={{ padding: '0' }}>
                        <Grid container spacing={4}>
                            {dataProjects.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={item} sx={{
                                    '&:hover': {
                                        transform: 'scale(0.96)', // Encoge el elemento a un 95% de su tamaño original
                                        transition: 'transform 0.5s', // Controla la velocidad de la animación 
                                    }
                                }}>
                                    <Paper style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <a href={item.pageUrl} target="_blank" rel="noopener noreferrer">
                                            <img src={item.image} alt="imagen" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
                                        </a>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1.5rem 1.5rem' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                                                <Typography sx={{ fontWeight: '400', fontFamily: 'Play, sans-serif;' }}> {item.typeProject} </Typography>
                                                <Typography sx={{ fontWeight: '700', fontSize: '1.3rem', fontFamily: 'Play, sans-serif;' }}>{item.subtitle} </Typography>
                                            </div>
                                            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                                <IconButton style={{ alignSelf: 'flex-end', fontFamily: 'Play, sans-serif;', color: 'black' }}>
                                                    <AiFillGithub />
                                                </IconButton>
                                            </a>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </>
    )

}