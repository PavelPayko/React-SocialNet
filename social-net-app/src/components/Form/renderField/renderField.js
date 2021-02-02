import classes from "./renderField.module.css";

export const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => (
    <div className={classes.fieldWrapper}>
        <label className={classes.fieldLabel}>{label}</label>
        <div className={classes.fieldInput}>
            <input {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <span className={classes.validateMessage}>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)