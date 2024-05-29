"use client";
import { useState } from "react";
import LinksPage from "@/app/components/LinksPage";

export const PasswordPage = () => {
    const [password, setPassword] = useState('');
    const [ack,setAck] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const actualPassword = process.env.NEXT_PUBLIC_PASSWORD;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === actualPassword) {
            setIsAuthenticated(true);
        } else {
            setAck("It's wrong password you trespasser");
        }
    };

    if (isAuthenticated) {
        return <LinksPage />;
    }

    return (
        <section className={'flex justify-center items-center'}>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-2 justify-center'}>
                <label>Enter the password you fucking trespasser</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={'p-2 rounded-md'}
                    placeholder={'Password'}
                />
                <button className={'p-2 rounded-md bg-gray-500 text-white hover:bg-black hover:text-white'} type={'submit'}>Let me Enter</button>
                <div>{ack}</div>
            </form>
        </section>
    );
};
