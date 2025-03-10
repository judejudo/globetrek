import Navbar from "@/components/Navbar";


export default function Layout ({children} : { readonly children: React.ReactNode}) { // REact.reactNode is a type that represents any valid react child
    // Readonly is a mapped type that creates a type that cannot be modified
    return (
        <main className="font-work-sans">
            <Navbar/>
            {children}
        </main>
    )
}