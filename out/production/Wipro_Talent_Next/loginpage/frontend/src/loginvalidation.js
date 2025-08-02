//check for all the possible email and password validation errors
function validation(value) {
    const errors = {};
    
    if (!value.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
        errors.email = 'Email address is invalid';
    }
    
    if (!value.password) {
        errors.password = 'Password is required';
    } else if (value.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }
    
    return errors;

}

export default validation;