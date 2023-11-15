import { Navbar } from "@/components/navbar";

export default function Container({ content }) {

    return (
        <>
            <section className="relative block h-[50vh]">
                <Navbar />
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/background1.jpg')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    {content}
                </div>
            </section>
        </>
    );
}
