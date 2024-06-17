import Image from "next/image";
import Link from "next/link";
import links from "@/app/data/links";
export default function LinksPage({extraAuth}) {
    let newLinks = links;
    if(!extraAuth){
        newLinks = links.filter((link)=>link.name!=='Attack Mode');
    }
    return (

        <>
            <div className="text-3xl">
                Links will be here
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
