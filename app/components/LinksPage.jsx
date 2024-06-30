import fetchLinks from "@/app/utils/fetchLinks";
import {useEffect, useState} from "react";
import Link from "next/link";
export default function LinksPage({superUser}) {
    const [linksToShow,setLinksToShow] = useState([]);
    useEffect(() => {
        async function settingLinks(){
            const response = await fetchLinks();
            let links = response.data;
            if (!superUser){
                const newLinks = links.filter(link=>!link.private);
                setLinksToShow(newLinks);
                return;
            }
            setLinksToShow(links);
        }

        settingLinks();
    }, []);

    return (
        <>
            <div className="flex flex-col text-3xl">
                <span>Viewing as {superUser ? 'Super User' : 'Normal User'}</span>
                <span>Links will be here</span>
            </div>
            {linksToShow.map((link,index)=>{
                return(
                    <div key={index} className="mt-5">
                        <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1" target="_blank" href={link.url}>{link.name}</Link>
                    </div>
                )
            })}
        </>
    );
}
