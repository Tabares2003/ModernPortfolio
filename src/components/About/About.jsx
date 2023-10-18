import { useMediaQuery, useTheme } from '@mui/material';
import { Typography, Button, Grid, IconButton, Box} from "@mui/material"
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai' 
import { useContext } from 'react';
import { LanguageContext } from '../LenChange/LanguageProvider'
import { Fade } from 'react-awesome-reveal'; 

export default function About() {

    const { language } = useContext(LanguageContext); 

    //Consts measured, 80% and in md 100%.
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    const buttonsSkillsEn = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Javascript' },
        { name: 'GIT' },
        { name: 'React' },
        { name: 'SQL Basics' },
        { name: 'Github' },
        { name: 'SASS' },
        { name: 'Material UI' },
        { name: 'Bootstrapp' },
        { name: 'Agile methodologies' },
        { name: 'Responsive Design' },
        { name: 'Scrum' },
        { name: 'Agile methodologies' },
    ];

    const buttonsSkillsEs = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Javascript' },
        { name: 'GIT' },
        { name: 'React' },
        { name: 'Fundamentos de SQL' },
        { name: 'Github' },
        { name: 'SASS' },
        { name: 'Material UI' },
        { name: 'Bootstrapp' },
        { name: 'Metodologías ágiles' },
        { name: 'Diseño Responsivo' },
        { name: 'Scrum' },
        { name: 'Metodologías ágiles' },
    ];

    const buttonsSkills = language === 'en' ? buttonsSkillsEn : buttonsSkillsEs;

    return (
        <>
            <Grid container justifyContent="center" mt={10}  >
                <Grid container style={{ width: isMdDown ? '100%' : '85%', display: 'flex', margin: '0', backgroundColor: '#fafafa', borderRadius: '3px', height: '100%' }}>


                    <Grid id="about" item xs={12} md={6} sx={{ paddingTop: '4rem', paddingLeft: '3rem', paddingRight: '3rem', paddingBottom: '3rem' }}>
                        <Fade delay={500} triggerOnce={true}>
                            <Typography sx={{ fontWeight: '500', fontSize: '1.7rem', color: 'black', fontFamily: 'Play, sans-serif;', marginBottom: '1rem' }}>
                                {language === 'en' ? 'Get to know me!' : 'Conóceme!'}
                            </Typography>
                        </Fade>
                        <Fade delay={600} triggerOnce={true}>
                            <Typography sx={{ fontWeight: '500', fontSize: '1.1rem', color: 'black', fontFamily: 'sans-serif', marginBottom: '1rem' }}>
                                {language === 'en' ? 'I am Juan Pablo, my focus is mainly in web development Front-End, but I also have a great interest great interest in computer science and design.' : 'Soy Juan Pablo, mi enfoque es principalmente en el desarrollo web Front-End, pero también tengo un gran interés gran interés en la informática y el diseño. '}
                            </Typography>
                        </Fade>
                        <Fade delay={700} triggerOnce={true}>
                            <Typography sx={{ fontWeight: '500', fontSize: '1.1rem', color: 'black', fontFamily: 'sans-serif', marginBottom: '1rem' }}>
                                {language === 'en' ? 'I highly value collaboration and learning together and learning together, to be able to adapt to new challenges and learn new technologies in an optimal way.' : 'Valoro mucho la colaboración y el aprendizaje conjunto, para poder adaptarnos a nuevos retos y aprender nuevas tecnologías de forma óptima.'}
                            </Typography>
                        </Fade>
                        <Fade delay={800} triggerOnce={true}>
                            <Typography sx={{ fontWeight: '500', fontSize: '1.1rem', color: 'black', fontFamily: 'sans-serif', marginBottom: '2rem' }}>
                                {language === 'en' ? 'I am open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that fits my skills and experience, do not hesitate to contact me.' : 'Estoy abierto a oportunidades laborales en las que pueda contribuir, aprender y crecer. Si tiene una buena oportunidad que se ajuste a mis habilidades y experiencia, no dude en ponerse en contacto conmigo.'}
                            </Typography>
                        </Fade>

                        <Box sx={{ display: 'flex' }}>
                            <Fade triggerOnce={true} delay={1000}>
                                <a href="https://www.linkedin.com/in/pablo-tabares-17483b231/" target="_blank" rel="noopener noreferrer" style={{ textDecorationLine: 'none' }}>
                                    <IconButton sx={{
                                        fill: 'black', color: 'black', height: '45px', marginRight: '1rem', width: '45px', marginLeft: '-.6rem', '&:hover': {
                                            color: '#0a66c2',
                                        },
                                    }}>
                                        <AiFillLinkedin style={{ height: '45px', width: '45px' }} />
                                    </IconButton>
                                </a>
                            </Fade>

                            <Fade triggerOnce={true} delay={1000}>
                                <a href="https://github.com/Tabares2003" target="_blank" rel="noopener noreferrer" style={{ textDecorationLine: 'none' }}>
                                    <IconButton sx={{
                                        fill: 'black', color: 'black', height: '45px', marginRight: '1rem', width: '45px', marginLeft: '-.6rem', '&:hover': {
                                            color: 'gray',
                                        },
                                    }}>
                                        <AiFillGithub />
                                    </IconButton>
                                </a>
                            </Fade>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ paddingTop: '4rem', paddingLeft: '3rem', paddingRight: '.5rem', paddingBottom: '1.5rem' }}>
                        <Fade delay={500} triggerOnce={true}>
                            <Typography sx={{ fontWeight: '500', fontSize: '1.7rem', color: 'black', fontFamily: 'Play, sans-serif;', marginBottom: '1rem' }}>
                                {language === 'en' ? 'My skills' : 'Mis habilidades'}
                            </Typography>
                        </Fade>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {buttonsSkills.map((button, index) => (
                                <Fade delay={index * 200} key={index} triggerOnce={true}>
                                    <Button
                                        disableRipple
                                        sx={{
                                            marginBottom: '1rem',
                                            marginRight: '.7rem',
                                            paddingTop: '.6rem',
                                            paddingBottom: '.6rem',
                                            paddingRight: '1.5rem',
                                            pointerEvents: 'none',
                                            paddingLeft: '1.5rem',
                                            fontWeight: '600',
                                            backgroundColor: '#e7e7e7',
                                            color: '#333333',
                                            opacity: '65.0%',
                                            fill: '#666666',
                                            textTransform: 'none', // Agrega esta línea
                                            '&:hover': {
                                                backgroundColor: '#e7e7e7',
                                            },
                                        }}
                                    >
                                        {button.name}
                                    </Button>
                                </Fade>
                            ))} 
                        </Box>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )

}