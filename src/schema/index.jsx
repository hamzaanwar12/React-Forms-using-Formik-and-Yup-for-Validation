import * as Yup from "yup";

const signUpSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "Minimum 2 Characters")
        .max(17, "Maximum 17 Characters")
        .required("First Name is required"),
    
    lastName: Yup.string()
        .min(2, "Minimum 2 Characters")
        .max(17, "Maximum 17 Characters")
        .required("Last Name is required"),
    
    userName: Yup.string()
        .min(2, "Minimum 2 Characters")
        .max(17, "Maximum 17 Characters")
        .required("User Name is required"),
    
    password: Yup.string()
        .min(8, "Too Short! Minimum 8 characters are required")
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#=|])[A-Za-z\d@$!%*?&]{8,}$/,
            "At least 1 Capital, 1 smaller, 1 special character, 1 digit is required"
        )
        .required("Password is required"),
    
    phoneNumber: Yup.string()
        .matches(/^\+[0-9]{1,15}$/, "Invalid Phone Number")
        .required("Phone Number is required"),
    
    confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
    
    email: Yup.string()
                .email("Invalid email format")
                .required("E-mail is Required"),
});

export default signUpSchema;
