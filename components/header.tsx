import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky z-50 w-full top-0 flex justify-start py-4 items-center gap-4 border-b bg-background px-4 md:px-6 box-border">
            <nav className="max-sm:px-4">
                <Image src="/sonder-logo.png" alt="Sonder Logo" width={30} height={40}/>
            </nav>
        </header>
    )
}