import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";


export default function DeleteAccountPage() {
    return (
        <main>
            <header className="sticky z-50 w-full top-0 flex justify-start py-4 items-center gap-4 border-b bg-background px-4 md:px-6 box-border">
                <nav className="max-sm:px-4">
                    <Image src="/sonder-logo.png" alt="Sonder Logo" width={30} height={40}/>
                </nav>
            </header>


            <form className="w-full max-md:px-4 md:w-1/3 mx-auto mt-5 md:mt-10 space-y-7 md:space-y-4" action="">
                <div>
                    <h1 className="font-semibold text-2xl">Delete Account</h1>
                    <p className="text-lg">Are you sure you want to delete your account? This action cannot be undone.</p>
                </div>
            
                <div>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                    <p className="mt-1 text-sm">Enter the email associated with your Sonder account</p>
                </div>

                <Button variant="destructive">
                    Delete Account
                </Button>
            </form>

        </main>
    )
}