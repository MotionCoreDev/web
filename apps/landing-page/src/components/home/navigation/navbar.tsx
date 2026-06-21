"use client";

import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";
import { Icons } from "@/components";
import { FileText, LayoutTemplate, Menu, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationViewport,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/product", label: "Product" },
    {
        href: "/features",
        label: "Features",
        children: [
            { href: "/features/resume-builder", label: "Resume Builder", icon: "fileText" },
            { href: "/features/ai-cover-letter", label: "AI Cover Letter", icon: "sparkles" },
            { href: "/features/templates", label: "CV Templates", icon: "layoutTemplate" },
            { href: "/features/linkedin", label: "LinkedIn Optimization", icon: "linkedin" },
        ]
    },
    { href: "/resources", label: "Resources" },
    { href: "/company", label: "Company" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [expandedItems, setExpandedItems] = React.useState<string[]>([]);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    // Scroll event listener
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sayfa değiştiğinde menüyü kapat
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const toggleExpand = (href: string) => {
        setExpandedItems(prev =>
            prev.includes(href)
                ? prev.filter(item => item !== href)
                : [...prev, href]
        );
    };

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "fileText": return <FileText className="w-4 h-4" />;
            case "sparkles": return <Icons.sparkles className="w-4 h-4" />;
            case "layoutTemplate": return <LayoutTemplate className="w-4 h-4" />;
            case "linkedin": return <Icons.linkedin className="w-4 h-4" />;
            default: return null;
        }
    };

    return (
        <header className="fixed inset-x-0 z-50 transition-all duration-300">
            <div className={cn(
                "mx-auto bg-background/80 backdrop-blur-xl border border-border/50 rounded-full shadow-lg shadow-background/5 transition-all duration-300",
                isScrolled
                    ? "top-2 max-w-7xl h-14 px-4"
                    : "top-4 max-w-7xl h-16 px-6"
            )}>
                <div className="flex items-center justify-between h-full w-full">
                    {/* Left Side - Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-1.5">
                            <span style={{ fontFamily: 'GothamUltraItalic, sans-serif', color: '#DC1612', fontSize: '1.35rem' }}>
                                MotionCore
                            </span>
                        </Link>
                    </div>

                    {/* Middle - Navigation */}
                    <nav className="hidden lg:flex flex-1 justify-center items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/product">
                                            Product
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem className="relative">
                                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[300px] gap-2 p-2">
                                            <ListItem href="/features/resume-builder" title="Resume Builder" icon={<FileText className="w-5 h-5" />}>
                                                Build professional resumes in minutes.
                                            </ListItem>
                                            <ListItem href="/features/ai-cover-letter" title="AI Cover Letter" icon={<Icons.sparkles className="w-5 h-5" />}>
                                                Generate tailored cover letters.
                                            </ListItem>
                                            <ListItem href="/features/templates" title="CV Templates" icon={<LayoutTemplate className="w-5 h-5" />}>
                                                ATS-friendly templates.
                                            </ListItem>
                                            <ListItem href="/features/linkedin" title="LinkedIn Optimization" icon={<Icons.linkedin className="w-5 h-5" />}>
                                                Attract recruiters.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                    <NavigationViewport className="!w-[300px]" />
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/resources">
                                            Resources
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/company">
                                            Company
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Right Side - Buttons */}
                    <div className="flex items-center gap-4 justify-end">
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="/explore" className={buttonVariants({ size: "sm" })}>
                                Explore
                            </Link>
                        </div>

                        <div className="lg:hidden">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Menu className="w-5 h-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="flex flex-col">
                                    <SheetHeader className="pb-4 border-b border-border/50">
                                        <SheetTitle className="flex items-center gap-2">
                                            <Icons.logo className="w-5 h-5" />
                                            <span style={{ fontFamily: 'GothamUltraItalic, sans-serif', color: '#DC1612' }}>MotionCore</span>
                                        </SheetTitle>
                                    </SheetHeader>
                                    <nav className="flex flex-col flex-1 mt-6">
                                        <div className="flex flex-col gap-1">
                                            {navItems.map((item) => {
                                                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                                                const hasChildren = 'children' in item && item.children;
                                                const isExpanded = expandedItems.includes(item.href);

                                                if (hasChildren) {
                                                    return (
                                                        <div key={item.href}>
                                                            <button
                                                                onClick={() => toggleExpand(item.href)}
                                                                className={cn(
                                                                    "group relative flex items-center justify-between w-full px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-muted/50 active:scale-[0.98]",
                                                                    isActive && "bg-muted/50 text-primary"
                                                                )}
                                                            >
                                                                <span className="relative z-10">{item.label}</span>
                                                                <ChevronDown
                                                                    className={cn(
                                                                        "w-4 h-4 transition-transform duration-200",
                                                                        isExpanded && "rotate-180"
                                                                    )}
                                                                />
                                                                <span
                                                                    className={cn(
                                                                        "absolute left-0 h-full w-1 rounded-full bg-primary transition-transform duration-200 origin-center",
                                                                        isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                                                                    )}
                                                                />
                                                            </button>
                                                            <div
                                                                className={cn(
                                                                    "overflow-hidden transition-all duration-200",
                                                                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                                )}
                                                            >
                                                                <div className="pl-4 py-1 flex flex-col gap-1">
                                                                    {item.children.map((child) => {
                                                                        const isChildActive = pathname === child.href;
                                                                        return (
                                                                            <Link
                                                                                key={child.href}
                                                                                href={child.href}
                                                                                onClick={handleLinkClick}
                                                                                className={cn(
                                                                                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-muted/50 text-muted-foreground hover:text-foreground",
                                                                                    isChildActive && "bg-muted/50 text-primary"
                                                                                )}
                                                                            >
                                                                                {getIcon(child.icon)}
                                                                                {child.label}
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                }

                                                return (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={handleLinkClick}
                                                        className={cn(
                                                            "group relative flex items-center px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-muted/50 active:scale-[0.98]",
                                                            isActive && "bg-muted/50 text-primary"
                                                        )}
                                                    >
                                                        <span className="relative z-10">{item.label}</span>
                                                        <span
                                                            className={cn(
                                                                "absolute left-0 h-full w-1 rounded-full bg-primary transition-transform duration-200 origin-center",
                                                                isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                                                            )}
                                                        />
                                                    </Link>
                                                );
                                            })}
                                        </div>

                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "group block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-3">
                        {icon && (
                            <div className="flex items-center justify-center p-1 rounded-md">
                                {icon}
                            </div>
                        )}
                        <div className="space-y-1">
                            <div className="text-sm font-medium leading-none">{title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {children}
                            </p>
                        </div>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar
