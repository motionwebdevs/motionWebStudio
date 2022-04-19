import {Button, Container, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles';
// import * as url from "url";


const useStyles = makeStyles({
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: ' 100px',
        lineHeight: '120%',
        letterSpacing: '0.003em'
    },

    heroBtn: {
        background: '#FFFFFF',
        borderRadius: '5px',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '24px',
        letterSpacing: '0.003em',
        color: '#FF0000',
        marginTop: '50px'
    },
    heroDesc: {
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '140%',
        letterSpacing: '2px',
        color: '#FFFFFF',
    }
})

function Hero() {
    const styles = useStyles()
    return (
        <section id="hero">
            <Container maxWidth="lg">
                <Typography variant="h3" className={'hero-title1'}>Motion Web LLC</Typography>
                <Typography variant="h3" className={"hero-title"}>IT STUDIO</Typography>
                <Typography variant="h6" className={styles.heroDesc}>Outsourcing company</Typography>
                <Button variant="contained" className={styles.heroBtn}>Contained</Button>
            </Container>

        </section>
    );
}

export default Hero;
