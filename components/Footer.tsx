import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import CopyEmail from '@/components/CopyEmail';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    const githubUrl = SOCIAL_LINKS.find((l) => l.name.toLowerCase() === 'github')?.url || '#';
    const linkedinUrl = SOCIAL_LINKS.find((l) => l.name.toLowerCase() === 'linkedin')?.url || '#';

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <CopyEmail
                    email={GENERAL_INFO.email}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                />

                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={20} className="hover:scale-110 transition-transform" />
                    </a>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} className="hover:scale-110 transition-transform" />
                    </a>
                </div>

                <div className="text-muted-foreground text-sm">
                    Design & built by Khawaja
                </div>
            </div>
        </footer>
    );
};

export default Footer;
