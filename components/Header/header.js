import {Box, Button, Container, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {useState} from "react";
import {makeStyles} from "@mui/styles";
import Logo from '../../assets/images/logo.svg'
import {setLocale} from "../../store/reducers/main";
import {useDispatch} from "react-redux";
import {languages} from "../../const/languages";
import {LOCALES} from "../../intl/locales";
import {useIntl} from "react-intl";

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles({
    header: {
        position: "fixed",
        width: "100%",
        background: 'rgba(86,0,0,.13)',
        backdropFilter: 'blur(20px)',
        zIndex: 2

    },
    navItem: {
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '22px',
        letterSpacing: '0.003em',
        color: '#F5F7F9'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',

    },
    logoTitle: {
        fontWeight: '700',
        fontSize: '23px',
        lineHeight: '31px',
        textAlign: 'center',
        letterSpacing: '0.003em',
        whiteSpace: 'nowrap',
        color: '#FF001E',

    },
    logoImg: {
        position: 'relative',
        width: '41px',
        height: '51px'
    },
    hero: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    headerBtn: {
        border: '1px solid',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '24px',
        letterSpacing: '0.003em',
        background: 'transparent',
        color: '#F5F7F9',
        borderColor: 'linear-gradient(264.66deg, #FF001E 2.19%, #8000FF 98.24%)',

        animationTimingFunction: 'ease-out',
        animationDuration: '300ms'


    }
})
const Header = () => {
    const dispatch = useDispatch()



    const {formatMessage, locale} = useIntl();
    const styles = useStyles()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [value, setValue] = useState(0);

    return (
        <header id="header" className={styles.header}>
            <Container maxWidth="lg">
                <Toolbar className={styles.hero}>
                    <a href="#" className={styles.logo}>
                        <img src={Logo} alt="Logo" width={'41px'} height={'51px'}/>
                        <Typography className={styles.logoTitle}>Motion Web</Typography>
                    </a>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                            <LinkTab label="Home" href="/drafts" className={styles.navItem}/>
                            <LinkTab label="About" href="/trash" className={styles.navItem}/>
                            <LinkTab label="Teams" href="/trash" className={styles.navItem}/>
                            <LinkTab label="Services" href="/spam" className={styles.navItem}/>
                        </Tabs>
                    </Box>
                    <Button variant="contained" className={styles.headerBtn}>Contacts</Button>
                </Toolbar>
            </Container>
        </header>
    )
}
export default Header
