export const minLengthValidator = (minLength:number) => (value:any) => {
    if (value && value.length < minLength) return `MIN LENGTH = ${minLength}`
    return undefined
}

export const required = (value:any) =>{
    if(value) return undefined
    return "Field is required"
}
export const maxLengthValidator = (maxLength:number) => (value:any) =>{
    if (value && value.length <= maxLength) return undefined
    return `Max lenght - ${maxLength} symbols`
}