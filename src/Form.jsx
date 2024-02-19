import signUpSchema from "./schema/index"
import { useFormik } from 'formik';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: ''
}


export default Form = ()=>
{
    const { values, errors, handleBlur, handleChange, handleSubmit,touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: values => {
          console.log(values)
        },
      });
      const style = {
        input: "text-black h-10 focus:outline-1 outline-slate-500 p-2 text-lg rounded-lg",
        label: "text-lg tracking-wider font-mono",
        form: ' flex flex-wrap flex-col justify-between mx-auto center mt-[6%] w-[90%] md:w-[70%]  md:space-y-5 p-5 text-white h-auto center shadow-lg shadow-gray-500/50 rounded-3xl  backdrop-blur-md ',
        button: "bg-white text-black h-14  hover:bg-black hover:text-white active:text-red-700 active:bg-transparent active:border-2 active:border-black rounded-xl text-xl font-mono focus:outline-1 outline-slate-500 md:w-[30%] mx-auto center",
        div: "flex flex-col space-y-3 ",
        specialDiv: "flex flex-col space-y-3 md:h-auto md:space-y-0 md:flex-row justify-between items-center",
        specialDaughterDiv: "flex flex-col space-y-3 md:space-y-3  w-[100%] md:w-[48%]",
        errorDiv:"text-red-700"
      }
      // Note that we have to initialize ALL of fields with values. These
      // could come from props, but since we don’t want to prefill this form,
      // we just use an empty string. If we don’t do this, React will yell
      // at us.
    
      return (
        <form className={style.form} onSubmit={handleSubmit}>
    
          <div className={style.specialDiv}>
            <div className={style.specialDaughterDiv}>
              <label className={style.label} htmlFor="firstName">First Name</label>
              <input
                className={style.input}
                autoComplete='off'
                id="firstName"
                name="firstName"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && <div className={style.errorDiv}>*{errors.firstName}</div>}
            </div>
    
    
            <div className={style.specialDaughterDiv}>
              <label className={style.label} htmlFor="lastName">Last Name</label>
              <input
                className={style.input}
                autoComplete='off'
                name="lastName"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && <div className={style.errorDiv}>*{errors.lastName}</div>}
            </div>
          </div>
    
          <div className={style.specialDiv}>
            {/* <div className={style.div}> */}
            <div className={style.specialDaughterDiv}>
              <label className={style.label} htmlFor="userName">User Name</label>
              <input
                className={style.input}
                autoComplete='off'
                name="userName"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
              />
              {errors.userName && touched.userName && <div className={style.errorDiv}>*{errors.userName}</div>}
            </div>
    
            <div className={style.specialDaughterDiv}>
              {/* <div className={style.div}> */}
              <label className={style.label} htmlFor="email">Email Address</label>
              <input
                className={style.input}
                autoComplete='off'
                id="email"
                name="email"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email && <div className={style.errorDiv}>*{errors.email}</div>}
            </div>
          </div>
    
          <div className={style.specialDiv}>
    
            <div className={style.specialDaughterDiv}>
              <label className={style.label} htmlFor="phoneNumber">Phone Number</label>
              <PhoneInput
                containerClass='text-black active:outline-slate-500 outline-1'
                inputClass='text-black active:outline-slate-500 outline-1'
                id="phoneNumber"
                country={'us'}
                value={values.phoneNumber}
                onBlur={handleBlur}
                onChange={handleChange}
    
              />
              {errors.phoneNumber && touched.phoneNumber && <div className={style.errorDiv}>*{errors.phoneNumber}</div>}
            </div>
    
    
    
            <div className={style.specialDaughterDiv}>
              {/* <div className={style.div}> */}
              <label className={style.label} htmlFor="userName">Password</label>
              <input
                className={style.input}
                id="password"
                name="password"
                autoComplete='off'
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password && <div className={style.errorDiv}>*{errors.password}</div>}
            </div>
          </div>
    
          <div className={style.div + "md:w-[48%]"}>
            <label className={style.label} htmlFor="userName">Confirm Password</label>
            <input
              className={style.input}
              id="userName"
              autoComplete='off'
              name="userName"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && <div className={style.errorDiv}>*{errors.confirmPassword}</div>}
          </div>
          <button className={style.button + "mt-3"} type="submit">Sign In</button>
        </form>
      );
}



