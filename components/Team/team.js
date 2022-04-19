import {Card, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import api from "../../http/api";
import {setTeam} from "../../store/reducers/team";
import {makeStyles} from "@mui/styles";
import CircularIndeterminate from "../Spinner/Spinner";
// import Image from 'next'
import Link from 'next/link'
const useStyles = makeStyles({
    row: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    image: {
        borderRadius: '10px 10px 0px 0px',
        width: '270px',
        height: '267px',
        objectFit: 'contain'
    },
    cardContent: {
        background: 'rgba(69, 59, 60, 0.5)',
        borderRadius: '10px',
        padding: '15px'
    }
})
const Team = () => {

    const styles = useStyles()
    const dispatch = useDispatch()

    const fetchTeam = async () => {
        dispatch(setTeam(null));
        const {data} = await api(`/createstaff`)
        dispatch(setTeam(data));
    };
    useEffect(() => {
        fetchTeam();
    }, []);
    const data = useSelector((state) => state.team.team);


    return (
        <section>
            <Container>
                <Typography variant={'h4'} color={'#fff'} textAlign={'center'}>
                    Team
                </Typography>


               <div>
                   <div className="row">
                       {data ? data.map((el) => (

                               <Link key={el.id} href={'/'}>
                                <Card style={{background:'rgba(69, 59, 60, 0.5)'}}>
                                    <img src={el.image} alt={'staff'} className={styles.image}/>
                                    <div className={styles.cardContent}>
                                        <Typography variant={'h5'} color={'#ffffff'}>{el.name}</Typography>
                                        <Typography variant={'p'} color={'#ffffff'}>{el.position}</Typography>
                                        <div style={{display: 'flex'}}>
                                            <a href={el.url_instagram}>instagram</a>
                                            <a href={el.url_linkedin}>linkedin</a>
                                            <a href={`mailto:${el.url_email}`}>email</a>
                                        </div>
                                    </div>
                                </Card>

                               </Link>
                           ))
                           : <CircularIndeterminate/>}
                   </div>
               </div>
            </Container>
        </section>
    )
}
export default Team
