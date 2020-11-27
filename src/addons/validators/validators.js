export const minLengthValidator = (minLength) => (value) => {
    if (value && value.length < minLength) return `MIN LENGTH = ${minLength}`
    return undefined
}

export const required = (value) =>{
    if(value) return undefined
    return "Field is required"
}
export const maxLengthValidator = (maxLength) => (value) =>{
    if (value && value.length <= maxLength) return undefined
    return "Max lenght - 300 symbols"
}