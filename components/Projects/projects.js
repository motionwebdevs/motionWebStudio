import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setProjects} from "../../store/reducers/projects";
import {useEffect} from "react";
import api from "../../http/api";
import {makeStyles} from "@mui/styles";
import CircularIndeterminate from "../Spinner/Spinner";
// import Image from 'next/image'
import Link from 'next/link'

const useStyles = makeStyles({
    row: {
        display: "flex", justifyContent: "space-between", alignItems: "center"
    },
})

const Projects = () => {
    const styles = useStyles()
    const dispatch = useDispatch()

    const fetchProjects = async () => {
        dispatch(setProjects(null));
        const {data} = await api(`order`)
        dispatch(setProjects(data));
    };
    useEffect(() => {
        fetchProjects();
    }, []);
    const data = useSelector((state) => state.projects.projects);


    return (<section>
            <Container>
                <Typography variant={'h4'} color={'#fff'} textAlign={'center'}>
                    Our Projects
                </Typography>
                <div>
                    <div className="row">
                        {data ? data.map((el) => (<Link href={el.url_project} key={el.id} target="_blank">
                                <Card sx={{maxWidth: 345}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={el.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {el.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {el.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <a href={el.upload} target="_blank" rel="noreferrer">
                                            View
                                        </a>
                                    </CardActions>
                                </Card>


                            </Link>)) : <CircularIndeterminate/>}
                    </div>
                </div>

            </Container>
        </section>)
}
export default Projects
