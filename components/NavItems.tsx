'use client'
import { navItems } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-4">
            {navItems.map((nav) => (
                <Link href={nav.href} key={nav.label}
                    className={cn(pathname === nav.href && `text-[#FE5933] font-semibold`)}>
                    {nav.label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems