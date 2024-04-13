"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label.tsx";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn.ts";

export function SignupFormDemo() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("email", email);
        formData.append("phonenumber", phoneNumber);
        formData.append("message", message);
        
        fetch("https://script.google.com/macros/s/AKfycbyyK4BqsPukMnwFOf_4oH3gUU_7Bqgui1UM95cCL2qQIff02P9pDYiQ8_KYNtDuYj2zCw/exec", {
            method : 'POST',
            body: formData,
            mode: 'no-cors',
        })
        .then(()=>{
            alert("Form Submitted Successfully");
            // console.log(formData);
            setFirstname("");
            setLastname("");
            setEmail("");
            setMessage("");
            setphoneNumber("");
        })
        .catch((error)=>{
            alert("Error in submitting the form");
            console.log(error);
        });

    };
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            

            <form className="my-8">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" name="Firstname" placeholder="Tyler" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" name="Lastname" placeholder="Durden" type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="Email" placeholder="projectmayhem@fc.com" type="email" value={email } onChange={(e)=>setEmail(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="PhoneNumber">Phone Number</Label>
                    <Input id="PhoneNumber" name="phoneNumber" placeholder="91XXXXXXXXXX   " type="tel" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Send Us a Message</Label>
                    <Input
                        id="message" 
                        name="Message"
                        placeholder="Enter your message here..."
                        className="your-textarea-styles"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    onClick={handleSubmit}
                >
                    SEND &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
