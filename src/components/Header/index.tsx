"use client";
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Header({ user }: any) {
    const pathname = usePathname();

    return <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/80 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <div className="max-w-8xl mx-auto">
            <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0 place-items-center ">
                <div className="relative flex items-center max-w-screen-lg m-auto justify-between">
                    <div className="flex">
                        <Link href="/"><h1 className="mr-4">POKEMON APP </h1>
                        </Link>
                        {/* Home Icon. Hidden when path is Home page */}
                        {pathname !== "/" && <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </Link>}


                    </div>
                    <div className="flex">
                        <Link href="/secret" className="ml-4"><h1 className="mr-4">Secret Page</h1>
                        </Link>
                        {!user && <a className="mr-10" href="/api/auth/login">Login</a>}

                        {user && (
                            <div className="flex">
                                <h2>{user.email}</h2> &nbsp; - &nbsp; <a href="/api/auth/logout">Logout</a>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    </div>
}