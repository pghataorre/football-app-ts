import { useForm } from "react-hook-form";
import sendEmail from "../api/sendEmail";
import { RefObject, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import config from "../config/config.mjs";

type Inputs = {
    name: string;
    email: string;
    message: string;
}

const GetInTouch = (): JSX.Element => {
    const [validatewCapcha, setValidatewCapcha] = useState<boolean>(true);
    const [sentEmail, setSentEmail] = useState<boolean>(false);
    const [charCount, setCharCount] = useState<number>(0);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>({ defaultValues: { name: '', email: '', message: ''} });

    const onSubmit = async (data: Inputs) => {
        await sendEmail({
            ...data,
            email: data.email.toLowerCase()
        });

        setSentEmail(true);
    }

    const checkTextCount = (event) => {
        const test = event.target.value
        setCharCount( test.length);
    }

    const sentAnother = () => {
        reset();
        setSentEmail(false);
        setValidatewCapcha(true);
    }

    return(
        <div className="email-form-container">
            <h1>Get in touch</h1>
            {sentEmail ? (
                <>
                    <p>Thank you for sending your email,unfortunately your email could not be sent at this time, An error has occurred.</p>
                    <button className="get-in-touch-form-submit" type="submit" onClick={sentAnother}>Try Again</button>
                </>
            )
            : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    <input className={errors.name && 'email-error-field'} id="name "placeholder="Your name" {...register('name', {required: true})} />
                    {errors.name && (<span className="email-error">Please enter your name</span>)}
                </label>
                <label htmlFor="email">
                    <input id="email" className={errors.email && 'email-error-field'} placeholder="Your email" {...register('email', {pattern: {value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}})} />
                    {errors.email && (<span className="email-error">Please enter your email correctly</span>)}
                </label>
                <label htmlFor="message">
                    <p className="text-count">{`${charCount}/${config.maxEmailFreeTextLength}`}</p>
                    <textarea 
                        id="message" 
                        maxLength={config.maxEmailFreeTextLength} 
                        className={errors.message && 'email-error-field'} 
                        placeholder="Please add your message" 
                        {...register('message', {required: true})} onChange={(event) => checkTextCount(event)}
                    >
                            
                    </textarea>
                    {errors.message && (<span className="email-error">Please enter your message</span>)}
                </label>
                <button className="get-in-touch-form-submit" type="submit" disabled={validatewCapcha}>Send Email</button>
                <ReCAPTCHA
                    onChange={(e) => setValidatewCapcha(false)}
                    sitekey={config.recapchaSiteKey} />
            </form>
            )}
        </div>
    )
  }
  
  export default GetInTouch;
  