import Image from "next/image";
import Link from "next/link";

export default function LinksPage() {
    return (
        <>
            <div className="text-3xl">
                Links will be here
            </div>
            <div className="mt-5">
                <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1" target="_blank" href={'https://prathampatel.notion.site/f7072887e83c45aeaa4fd52270ceac44'}>Backend Engineering Page</Link>
            </div>
            <div className="mt-5">
                <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1" target="_blank" href={'https://prathampatel.notion.site/System-Design-Simplified-a35cd6cc48054585b973bdf7e33746fe'}>System Design Simplified</Link>
            </div>
            <div className="mt-5">
                <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1" target="_blank" href={'https://prathampatel.notion.site/DSA-54023c73b03b49e988eac2f7de95a06c'}>DSA</Link>
            </div>
            <div className="mt-5">
                <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1" target="_blank" href={'https://prathampatel.notion.site/Attack-Mode-eee0190c36b845bb9f2dcbe631420473'}>Attack Mode</Link>
            </div>
            <div className="mt-5">
                <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1" target="_blank" href={'https://prathampatel.notion.site/Attack-Mode-System-9d5d6985544b40aab5779c2ae62377be'}>Attack Mode System</Link>
            </div>
            <div className="mt-5">
                <Link className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded-md px-3 py-1" target="_blank" href={'https://prathampatel.notion.site/Quick-Schedule-fab350dca7bb426886df408f34dab55c'}>Quick Schedule</Link>
            </div>
        </>
    );
}
