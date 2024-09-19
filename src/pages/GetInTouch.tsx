// import { useForm, ValidationRule } from "react-hook-form";
// import sendEmail from "../api/sendEmail";
// import { useState } from "react";

// type Inputs = {
//     name: string;
//     email: string;
//     message: string;
// }

const GetInTouch = (): JSX.Element => {
    // const [emailSent, setEmailSent] = useState<boolean>(false);


    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm<Inputs>()

    // const onSubmit = async (data: Inputs) => {
    //     const emailStatus = await sendEmail(data);
    //     setEmailSent(emailStatus);
    // }

    // { pattern: '[A-Z0-9+_.-]+@[A-Z0-9.-]+$' }

    return(
        <div className="email-form-container">
            <h1>Get in touch - this page will be availble soon</h1>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    <input className={errors.name && 'email-error-field'} id="name "placeholder="Your name" {...register('name', {required: true})} />
                    {errors.name && (<span className="email-error">Please enter your name</span>)}
                </label>
                <label htmlFor="email">
                    <input id="email" className={errors.email && 'email-error-field'} placeholder="Your email" {...register('email')} />
                    {errors.email && (<span className="email-error">Please enter your email correctly</span>)}
                </label>
                <label htmlFor="message">
                    <textarea id="message" className={errors.message && 'email-error-field'} placeholder="Please add your message" {...register('message', {required: true})} ></textarea>
                    {errors.message && (<span className="email-error">Please enter your message</span>)}
                </label>
                <input className="get-in-touch-form-submit" type="submit" />
            </form>
            {emailSent && (<h2>EMAIL SENT</h2>)} */}
        </div>
    )
  }
  
  export default GetInTouch;
  