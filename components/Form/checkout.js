import {Button, Container, Paper, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

import * as yup from "yup";
import {Formik} from "formik";
import PhoneField from "./PhoneField";
import Bg from '../../assets/images/img1.svg'
import api from "../../http/api";

const useStyles = makeStyles({
    form: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: "center",
        borderRadius: '5px',
        width: '1170px',
        height: '492px'

    },

    formik: {
        background: 'rgba(49, 49, 49, 0.7)',
        borderRadius: '5px',
        padding: '40px 60px'
    },
    input: {
        background: 'rgba(135, 135, 135, 0.5)',
        borderRadius: '8px',

    }

})


const validationSchema = yup.object({
    name: yup.string().required("Атыңызды жазыңыз"),
    phone: yup
        .string()
        .required("Номериңизди жазыңыз")
        .min(13, "Неверно введен номер")
        .max(13, "Неверно введен номер"),
    email: yup.string().email("Бул жерге email жазыңыз"),
});


const Checkout = () => {

    const styles = useStyles()
    return (
        <section>
            <Container>
                <Typography variant={'h5'} color={'#fff'} textAlign={'center'}>Have a project?</Typography>
                <div>
                    <Paper className={styles.form} style={{background: `url(${Bg}) no-repeat center fixed`}}>
                        <div>
                            <div className={styles.formik}>


                                <Formik

                                    initialValues={{
                                        name: "",
                                        phone: "",
                                        email: "",
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={async (values, actions) => {
                                        try {
                                            await api.post("feedback/link/", values);
                                            actions.setStatus(
                                                "Сиз ийгиликтүү кире алдыңыз"
                                            );
                                        } catch (e) {
                                            actions.setStatus("Серверден ката кетти");
                                        }
                                    }}
                                >
                                    {(formik) => (
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="flex flex-col">
                                                <TextField
                                                    required
                                                    label="First Name"
                                                    className={styles.input}
                                                    name="name"
                                                    value={formik.values.name}
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    type="name"

                                                />
                                                <Typography variant={'h6'} color={'#fff'}>
                                                    {formik.errors.full_name &&
                                                        formik.touched.name &&
                                                        formik.errors.name}
                                                </Typography>
                                            </div>

                                            <div className="flex flex-col">
                                                <TextField
                                                    required
                                                    label="email"
                                                    className={styles.input}
                                                    name="email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    type="email"
                                                    placeholder="Почта"
                                                />
                                                <Typography variant={'h6'} color={'#fff'}>
                                                    {formik.errors.email &&
                                                        formik.touched.email &&
                                                        formik.errors.email}
                                                </Typography>
                                            </div>
                                            <PhoneField/>
                                            <Button variant="contained" className="btn" type="submit">
                                                Жөнөтүү
                                            </Button>
                                            {!!formik.status && (
                                                <Typography variant={'h6'} color={'#fff'}>{formik.status}</Typography>
                                            )}
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>

                    </Paper>
                </div>

            </Container>
        </section>
    );
};

export default Checkout;
