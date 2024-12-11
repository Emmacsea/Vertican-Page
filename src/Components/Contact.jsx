import { useState } from "react";
import PropTypes from 'prop-types';

export default function Contact ({
    name,
    email,
    message,
    onChangeName,
    onChangeEmail,
    onChangeMessage,
    onClickintro,
    onClickgallery,
    onClickcontact,
    onSubmitContact,
}) {
    const [error, setError] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newError = {};


        if(!name) newError.name= "This input cannot be empty";
        if(!email || !validateEmail) newError.email= "Input a valid email address";
        if(!message) newError.message = "This input cannot be empty";


        setError(newError);
        if(Object.keys(newError).length === 0){
            onSubmitContact();
        }


    }



    return (
        <div className="bg-gray-200 flex flex-col justify-center items-center h-full">
            
            <div className="flex flex-col justify-center items-center pr-24 space-y-5 mt-10 w-full">
                <h3 className="text-gray-600 text-2xl font-bold uppercase text-center">Vertican</h3>
                <span className="text-green-300 text-base font-bold ">new Tailwind Theme</span>
            </div>

            <div className="flex justify-center space-x-10 items-start px-72 w-full">
                <div>
                    <div className="bg-white flex flex-col justify-center items-center h-auto rounded-xl mt-10 w-full">
                        <div className="relative bg-contact-img bg-cover bg-center w-full rounded-t-xl overflow-hidden" >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="relative px-32 py-28 ">
                                <p className="text-white text-lg font-semibold">
                                    The is VertiCard. Get the lastest
                                </p>
                            </div>

                        </div>

                        <div className="w-full">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="flex flex-col pr-24 pl-9 py-16 space-y-7 w-full">
                                    <div className="w-full flex flex-col">
                                        <input className="inp" type="text" value={name} onChange={onChangeName} placeholder="name"/>
                                        {error.name && (
                                            <p className="err">{error.name}</p>
                                        )}
                                    </div>

                                    <div className="w-full flex flex-col">
                                        <input className="inp" type="text" value={email} onChange={onChangeEmail} placeholder="email"/>
                                        {error.email && (
                                            <p className="err">{error.email}</p>
                                        )}
                                    </div>

                                    <div className="w-full flex flex-col">
                                        <textarea className="inp" cols="20" rows="8" id="" value={message} onChange={onChangeMessage} placeholder="message"></textarea>
                                        {error.message && (
                                            <p className="err">{error.message}</p>
                                        )}
                                    </div>

                                <div className="flex justify-end items-end">
                                    <input className="btn" type="submit" value="Submit" />
                                </div>
                                </div>

                            </form>
                        </div>

                    </div> 

                    <div className="flex justify-between items-center w-full my-10">
                        <p className="text-neutral-400 text-sm font-semibold">
                            Copyright &copy; {new Date().getFullYear()}
                        </p>
                        <p className="text-neutral-400 text-sm font-semibold">
                            Design by Emmac
                        </p>

                    </div>
                </div>

                <div className="flex flex-col justify-center items-start space-y-6 mt-24 ">
                    <button type="click" onClick={onClickintro} className="flex space-x-3 items-center">
                        <span className="w-5 h-2 bg-neutral-400 hover:bg-blue-400 "></span>
                        <p className="text-neutral-400 text-lg font-semibold capitalize">Intro</p>
                    </button > 
                    <button type="click" onClick={onClickgallery} className="flex space-x-3 items-center">
                        <span className="w-5 h-2 bg-neutral-400 hover:bg-blue-400 "></span>
                        <p className="text-neutral-400 hover:text-blue-400 text-lg font-semibold capitalize">gallery</p>
                    </button >                            
                    <button type="click" onClick={onClickcontact} className="flex space-x-3 items-center">
                        <span className="w-5 h-2 bg-blue-400 "></span>
                        <p className="text-blue-400 text-lg font-semibold capitalize">contact</p>
                    </button >                            
                </div>

            </div>

            
        </div>
    )
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onClickintro: PropTypes.func.isRequired,
    onClickgallery: PropTypes.func.isRequired,
    onClickcontact: PropTypes.func.isRequired,
    onSubmitContact: PropTypes.func.isRequired,
}