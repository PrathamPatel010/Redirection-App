"use client";
import {useState} from "react";
import axios from "axios";
function AdminService(){
    const [data,setData] = useState({password:'',link:'',name:'',private:false});
    const [message,setMessage] = useState('');
    async function showErrorMessage(data){
        setMessage(data.message);
    }

    async function showAckMessage(data){
        setMessage(data.message);
    }

    async function handleSubmit(e){
        e.preventDefault();
        const linkPrivate = document.getElementById('true').checked;
        if (linkPrivate){
            const response = await axios.post('/api/admin-service',{...data,linkPrivate:true});
            if (response.data.statusCode!==200){
                await showErrorMessage(response.data);
            }
            await showAckMessage(response.data);
            return;
        }
        const response = await axios.post('/api/admin-service',{...data,linkPrivate:false});
        if (response.data.statusCode!==200){
            await showErrorMessage(response.data);
        }
        await showAckMessage(response.data);
    }

    return(
        <>
            <section className="mt-5 pt-5 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center">
                    <input className={'p-1 border border-gray-500 rounded-sm'} value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} type={'password'} placeholder={'admin password'} required={true}/>
                    <input className={'p-1 border border-gray-500 rounded-sm'} value={data.link} onChange={(e)=>setData({...data,link:e.target.value})} type={'text'} placeholder={'Link'} required={true}/>
                    <input className={'p-1 border border-gray-500 rounded-sm'} value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} type={'text'} placeholder={'Name'} required={true}/>
                    Private Link?
                    <div className={'flex gap-5'}>
                        <div>
                            <input type="radio" id="true" name="private" value='true' />
                            <label htmlFor="true">true</label>
                        </div>
                        <div>
                            <input type="radio" id="false" name="private" value='false' />
                            <label htmlFor="false">false</label>
                        </div>
                    </div>
                    <button className={'bg-black text-white p-1 rounded-md hover:bg-gray-500'} type={'submit'}>Add Link</button>
                </form>
                <div className={'mt-5 pt-3'}>
                    {message}
                </div>
            </section>
        </>
    )
}

export default AdminService;