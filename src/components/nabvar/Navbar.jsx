import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import { AppBar, Toolbar, Button, Grid, IconButton, Drawer, Hidden, Divider, MenuItem, Menu } from "@mui/material"
import iconPT from '../../assets/LogoPT.svg'
import espana from '../../assets/espana.png'
import reinoUnido from '../../assets/reino-unido.png'
import { useContext } from 'react';
import { LanguageContext } from '../LenChange/LanguageProvider';

export default function Navbar() {

    // Use the language context to access the current language and the function to change it
    const { language, handleSelect } = useContext(LanguageContext);

    // State to control the menu's opening
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Handler to open the menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handler to close the menu
    const handleClose = () => {
        setAnchorEl(null);
    };



    // State to control the opening and closing of the drawer
    const [open, setOpen] = useState(false);

    // Handler to open the drawer
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    // Handler to close the drawer
    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'black', Height: '5rem' }}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={4} display="flex" alignItems="center">
                            <img src={iconPT} alt="Custom Icon" style={{ width: 50, fill: 'white', marginLeft: '1.3rem', cursor: 'pointer' }} />
                        </Grid>

                        {/* Responsive button to open the drawer when the screen width is less than "md" (medium breakpoint)*/}
                        <Hidden mdUp>
                            <Grid item xs={4} container justifyContent="center">
                                <IconButton edge="start" sx={{ color: 'white' }} onClick={handleDrawerOpen}>
                                    <AiOutlineMenu />
                                </IconButton>
                            </Grid>
                        </Hidden>

                        <Hidden mdDown>
                            <Grid item xs={4} container justifyContent="center" sx={{ padding: '2rem' }}>
                                <Button href="#home" sx={{
                                    fontFamily: 'Avenir, sans-serif', color: 'white', fontSize: '13px', '&:hover': {
                                        color: 'gray',
                                    },
                                }}>
                                    {language === 'en' ? 'HOME' : 'INICIO'}
                                </Button>
                                <Button href="#about" sx={{
                                    fontFamily: 'Avenir, sans-serif', color: 'white', fontSize: '13px', '&:hover': {
                                        color: 'gray',
                                    },
                                }}>
                                    {language === 'en' ? 'ABOUT ME' : 'SOBRE MI'}
                                </Button>

                                <Button href="#porfolio" sx={{
                                    fontFamily: 'Avenir, sans-serif', color: 'white', fontSize: '13px', '&:hover': {
                                        color: 'gray',
                                    },
                                }}>
                                    {language === 'en' ? 'PORTFOLIO' : 'PORTAFOLIO'}

                                </Button>
                                <Button href="#contact" sx={{
                                    fontFamily: 'Avenir, sans-serif', color: 'white', fontSize: '13px', '&:hover': {
                                        color: 'gray',
                                    },
                                }}>
                                    {language === 'en' ? 'CONTACT' : 'CONTACTO'}
                                </Button>
                            </Grid>
                        </Hidden>
                        <Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center" sx={{ color: 'white' }}>
                            {/* Button that displays language options */}
                            <Button aria-controls="language-menu" aria-haspopup="true" onClick={handleClick}>
                                {language === 'en' ? <img src={reinoUnido} alt="English" /> : <img src={espana} alt="Spanish" />}
                            </Button>

                            {/* Language options menu */}
                            <Menu
                                id="language-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {/* Option to switch to the English language */}
                                <MenuItem onClick={() => handleSelect('en')}>
                                    <img src={reinoUnido} alt="English" />
                                </MenuItem>

                                {/* Option to switch to the Spanish language */}
                                <MenuItem onClick={() => handleSelect('es')}>
                                    <img src={espana} alt="Spanish" />
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>

                </Toolbar>
                <Divider sx={{ border: '1px solid gray', opacity: '60%' }} />
            </AppBar>

            {/*Drawer component that displays links to different sections of the page*/}
            <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
                <Button color="inherit" href="#home" onClick={handleDrawerClose}>{language === 'en' ? 'HOME' : 'INICIO'} </Button>
                <Button color="inherit" href="#about" onClick={handleDrawerClose}>{language === 'en' ? 'ABOUT ME' : 'SOBRE MI'} </Button>
                <Button color="inherit" href="#porfolio" onClick={handleDrawerClose}>{language === 'en' ? 'PORTFOLIO' : 'PORTAFOLIO'} </Button>
                <Button color="inherit" href="#contact" onClick={handleDrawerClose}>{language === 'en' ? 'CONTACT' : 'CONTACTO'}  </Button>
            </Drawer>
        </>
    )

}