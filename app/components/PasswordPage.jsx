"use client";
import { useState } from "react";
import LinksPage from "@/app/components/LinksPage";
import axios from "axios";

export const PasswordPage = () => {
    const [password, setPassword] = useState('');
    const [ack, setAck] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [superUser, setSuperUser] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/authenticate',{password});
        const {message, status, statusCode} = response.data;
        if (statusCode===401){
            setAck(message);
        }
        if (status==='User'){
            setAck('Welcome User');
            setTimeout(()=>{
                setIsAuthenticated(true);
                return;
            },2000);
        }
        if (status==='Super User'){
            setSuperUser(true);
            setAck('Welcome Super User');
            setTimeout(()=>{
                setIsAuthenticated(true);
                return;
            },2000);
        }
    };

    if (isAuthenticated) {
        return <LinksPage superUser={superUser} />;
    }

    return (
        <section className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center">
                <label className={'bg-red-500 text-white rounded-md p-2'}>This is FBI. Identify yourself by entering password</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 rounded-md"
                    placeholder="Password"
                />
                <button className="p-2 rounded-md bg-gray-500 text-white hover:bg-black hover:text-white" type="submit">
                    Let me Enter
                </button>
                <div className={'text-red-600 text-3xl'}>{ack}</div>
            </form>
        </section>
    );
};
