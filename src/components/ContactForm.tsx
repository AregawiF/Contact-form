import { useForm } from "react-hook-form";

type FormValues = {
    name: string
    email: string
    message: string
}

export default function ContactForm(){
    const form = useForm<FormValues>();
    const { register, handleSubmit, formState} = form;
    const { errors } = formState;

    function Submit(data: FormValues){
        console.log("form submitted", data);
    }
    return (
        <div>
            <form className="contact" onSubmit={handleSubmit(Submit)} noValidate>
                <div className="input_container">

                    <label htmlFor="name" >Name</label>
                    <br />
                    <input placeholder = "Abebe" type="text" id="name" {...register('name', {
                        required : 'Name is required!'
                    })}/>
                    <p className="error">{errors.name?.message}</p>
                </div>
                <div className="input_container">
                    <br />
                    <label htmlFor="email" >Email</label>
                    <input placeholder="abebe@example.com" type="text" id="email" {...register('email',{
                        pattern: {
                            value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                            message: 'Invalid email format!'
                        },
                        required:'Email is required!'
                    })}/>
                    <p className="error">{errors.email?.message}</p>
                    <br />
                </div>
                <div className="input_container">
                    <label htmlFor="message" >Message</label>
                    <br />
                    <textarea placeholder="Type your message here" id="message" {...register('message', {
                        required: 'Message is required!'
                    })}/>
                    <p className="error">{errors.message?.message}</p>
                    <br />
                    <br />
                </div>
                <button type="submit" className="submit">Submit</button>

            </form>
        </div>
    );
}