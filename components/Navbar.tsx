'use client';
import { SOCIAL_LINKS } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const githubUrl = SOCIAL_LINKS.find((l) => l.name.toLowerCase() === 'github')?.url || '#';
    const linkedinUrl = SOCIAL_LINKS.find((l) => l.name.toLowerCase() === 'linkedin')?.url || '#';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <div className="container mx-auto px-6 py-6 md:py-8 flex justify-end items-center">

                {/* Social Icons */}
                <div className="flex items-center gap-6 pointer-events-auto">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={22} className="hover:scale-110 transition-transform" />
                    </a>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} className="hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
