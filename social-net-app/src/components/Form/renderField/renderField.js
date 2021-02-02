import classes from "./renderField.module.css";
import TextField from "../Field/TextField";
import Checkbox from "../Checkbox/Checkbox";

export const renderField = ({
                                input,
                                label,
                                placeholder,
                                type,
                                meta: {touched, error}
                            }) => {
    if(type === 'textarea'){
        return <textarea cols="30" rows="5" className={classes.textarea}> </textarea>
    }
    if(type === 'checkbox'){
        return <Checkbox label='Запомннить меня'
                                   isChecked={input.checked}
                                   setValue={() => input.onChange(!input.checked)}
                                   errors={null}
        />
    }
    return (
        <TextField title={label}
                   type={type}
                   name={null}
                   placeholder={placeholder}
                   value={input.value}
                   errors={error}
                   touched={touched}
                   onBlur={input.onBlur}
                   setValue={input.onChange}
        />

    )
}