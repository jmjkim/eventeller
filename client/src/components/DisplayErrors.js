const DisplayErrors = ({errors}) => {
    if (typeof errors === "string") 
        return <li>{errors}</li>
    
    else 
        return (
            <div className="display_error_container">
                {errors?.length >= 1 ? errors.map((err, index) => {return <li key={index}>{err}</li>}) : null}
            </div>
        )
    
}

export default DisplayErrors;