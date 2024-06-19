import Image from "next/image";
import Link from "next/link";
import links from "@/app/data/links";
export default function LinksPage({superUser}) {
    let newLinks = links;
    if (!superUser){
        newLinks = links.filter(link=>!link.private);
    }

    return (
        <>
            <div className="flex flex-col text-3xl">
                <span>Viewing as {superUser ? 'Super User' : 'Normal User'}</span>
                <span>Links will be here</span>
            </div>
            {newLinks.map((link,index)=>{
                return(
                    <div key={index} className="mt-5">
                        <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1" target="_blank" href={link.link}>{link.name}</Link>
                    </div>
                )
            })}
        </>
    );
}
