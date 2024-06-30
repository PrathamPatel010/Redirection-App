import AdminService from "@/app/admin/components/AdminService";

function Home() {

    return (
        <main className={'flex flex-col items-center'}>
            <h1 className={'text-4xl mt-4 pt-5'}>Admin Service</h1>
            <AdminService/>
        </main>
    );
}

export default Home;