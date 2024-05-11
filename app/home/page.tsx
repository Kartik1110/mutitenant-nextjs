"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Home() {
    // Function to handle navigation based on subdomain
    const handleNavigation = (subdomain: string) => {
        window.location.href = `http://${subdomain}.localhost:3000`;
    };

    // Navigation items data
    const NAVIGATION_ITEMS = [
        { text: "Admin", subdomain: "admin" },
        { text: "Blogs", subdomain: "blogs" },
    ];

    return (
        <div className="flex flex-col items-center h-screen">
            <div className="mt-10 flex justify-center items-center">
                <NavigationMenu>
                    {NAVIGATION_ITEMS.map((item, index) => (
                        <NavigationMenuList
                            key={index}
                            className="hover:bg-slate-800 hover:rounded-md mx-2 hover:cursor-pointer"
                        >
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    onClick={() => handleNavigation(item.subdomain)}
                                    className={navigationMenuTriggerStyle()}
                                >
                                    {item.text}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    ))}
                </NavigationMenu>
            </div>
            <div className="h-full flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold">Hey There👋 Welcome!</h1>
                <p className="text-2xl p-10">Click on the above navigation to get started</p>
            </div>
        </div>
    );
}
