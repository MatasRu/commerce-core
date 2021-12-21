export const validate =  {
    validateEmail: (email) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            return ({success: true})
        } else {
            return ({success: false})
        }
    },
}
