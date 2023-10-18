import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Fade, Slide } from "react-awesome-reveal";
import { useMediaQuery, useTheme } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from '../LenChange/LanguageProvider'

export default function Contact() {

    const { language } = useContext(LanguageContext);


    //Consts measured, 80% and in md 100%.
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));




    const [snackbarOpen, setSnackbarOpen] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_i69qu5s', 'template_huuv09e', e.target, '4upbjyDbOQbag8YLL')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setSnackbarOpen(true); // Abre el Snackbar cuando se envía el correo electrónico
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleClose = (event, reason) => {
        2
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };


    return (
        <>

            <Grid container justifyContent="center" mt={9} display={{ display: 'flex' }} id="contact">
                <Grid container style={{ width: isMdDown ? '100%' : '95%', display: 'flex', borderRadius: '3px', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Fade delay={500} triggerOnce={true}>
                    <Typography sx={{ fontWeight: '500', fontSize: '2rem', color: 'white', marginBottom: '3rem', fontFamily: 'Play, sans-serif;' }}>
                        {language === 'en' ? 'Contact Me' : 'Contáctame'}
                    </Typography>
                    </Fade>
                    <Slide triggerOnce={true} style={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <form style={{ color: 'white', display: 'flex', flexDirection: 'column', width: '70%' }} onSubmit={sendEmail}>
                        <input type="text" name="from_name" required placeholder={language === 'en' ? 'First Name' : 'Primer Nombre'} style={{ backgroundColor: 'black', padding: '1rem', borderRadius: '0', fontSize: '1rem', fontFamily: 'Play, sans-serif;', border: '1px solid white', color: 'white', borderBottom: 'none', }} />
                        <input type="text" name="surname" required placeholder={language === 'en' ? 'Surname' : 'Apellido'} style={{ backgroundColor: 'black', padding: '1rem', borderRadius: '0', fontSize: '1rem', fontFamily: 'Play, sans-serif;', border: '1px solid white', color: 'white', borderBottom: 'none' }} />
                        <input type="number" name="number" required placeholder={language === 'en' ? 'Phone Number' : 'Numero telefónico'} style={{ backgroundColor: 'black', padding: '1rem', borderRadius: '0', fontSize: '1rem', fontFamily: 'Play, sans-serif;', border: '1px solid white', color: 'white', borderBottom: 'none' }} />
                        <input type="text" name="reply_to" required placeholder={language === 'en' ? 'Email' : 'Correo Electrónico'} style={{ backgroundColor: 'black', padding: '1rem', borderRadius: '0', fontSize: '1rem', fontFamily: 'Play, sans-serif;', border: '1px solid white', color: 'white', borderBottom: 'none' }} />
                        <TextField
                            variant="outlined"
                            multiline
                            rows={4}
                            type="text"
                            name="message"
                            InputProps={{
                                style: { color: 'white' },
                                placeholder: 'Message',
                            }}
                            sx={{
                                border: '1px solid white',
                                color: 'white',
                                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                            }}
                            required
                        />
                        <Button type="submit" sx={{
                            color: 'black', backgroundColor: 'white', borderRadius: '0', padding: '1rem', '&:hover': {
                                color: 'white', border: '1px solid white', borderTop: 'none'
                            },
                        }}>{language === 'en' ? 'SEND' : 'ENVIAR'} </Button>
                    </form>
                    </Slide>
                </Grid>
            </Grid>

            <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={handleClose} message="Correo electrónico enviado" />
        </>
    )
}