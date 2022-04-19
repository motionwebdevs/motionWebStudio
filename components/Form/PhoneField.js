import {useField} from "formik";
import PhoneInput from "react-phone-number-input";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";


const useStyles = makeStyles({
    phone: {
        width:'50px',
        height:'50px',
        background: 'rgba(135, 135, 135, 0.5)',
        borderRadius: '8px',
        padding: '10px 30px'
    }
})

const PhoneField = () => {
    const styles = useStyles()
    const [field, meta, actions] = useField({name: 'phone'});

    const handleChange = (value) => {
        actions.setValue(value);
    }

    return (
        <div className="relative w-[95%]  mt-4 mb-4  ">
           <div>
               <PhoneInput
                   name="phone"
                   {...field}
                   onChange={handleChange}
                   international
                   countryCallingCodeEditable={true}
                   defaultCountry="KG"
                   className={styles.phone}
               />

               <Typography variant={'h6'} color={'#fff'} >
                   {meta.error && meta.touched && meta.error}
               </Typography>
           </div>
        </div>
    )
}

export default PhoneField;
