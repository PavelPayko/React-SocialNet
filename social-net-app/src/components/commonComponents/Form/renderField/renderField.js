import TextField from "../TextField/TextField";
import Checkbox from "../Checkbox/Checkbox";
import Textarea from "../Textarea/Textarea";

export const renderField = ({
                                input,
                                label,
                                placeholder,
                                type,
                                name,
                                noValidation,
                                meta: {touched, error}
                            }) => {
    if (type === 'textarea') {
        return <Textarea title={label}
                         type={type}
                         name={name}
                         placeholder={placeholder}
                         value={input.value}
                         errors={error}
                         touched={touched}
                         onBlur={input.onBlur}
                         setValue={input.onChange}
                         noValidation={noValidation}
                         {...input}
        />
    }
    if (type === 'checkbox') {
        return <Checkbox label={label}
                         isChecked={input.checked}
                         setValue={() => input.onChange(!input.checked)}
                         errors={null}
        />
    }
    return (
        <TextField title={label}
                   type={type}
                   name={name}
                   placeholder={placeholder}
                   value={input.value}
                   errors={error}
                   touched={touched}
                   onBlur={input.onBlur}
                   setValue={input.onChange}
                   noValidation={noValidation}
                   {...input}
        />

    )
}