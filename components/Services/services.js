import {Card, CardActionArea, Container, Typography} from "@mui/material";
import data from "./data";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    row: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    card: {
        background: '#313131',
        borderRadius: '5px',
        padding: '15px 35px',
        width: '33.33333%'
    }
})
const Services = () => {
    const styles = useStyles()
    return (
        <section>
            <Container>
                <Typography variant={'h4'} color={'#fff'} textAlign={'left'}>
                    Services
                </Typography>
                <Typography variant={'h6'} color={'#fff'} textAlign={'left'}>
                    The Motion Web team constantly monitors the development and trends in the field of IT. We actively
                    apply the latest technologies in practice.
                </Typography>
                <div>
                    <div className="row">
                        {data.map(el => (

                            <Card key={el.id} className={styles.card} sx={{maxWidth: 345}}>
                                <CardActionArea>
                                    <img src={el.image} alt={"service"}/>
                                    <Typography variant={'h5'} color={'#fff'} textAlign={'center'}>{el.name}</Typography>
                                    <Typography variant={'h6'} color={'#fff'} textAlign={'left'}>{el.description}</Typography>
                                </CardActionArea>
                            </Card>
                        ))}
                    </div>


                </div>

            </Container>
        </section>
    );
};

export default Services;
