'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const lenis = useLenis();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.startsWith('/projects/')) {
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
        }
    }, [pathname, lenis]);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.page-transition--inner', {
            yPercent: 0,
            duration: 0.2,
        })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.2,
            })
            .to('.page-transition', {
                yPercent: -100,
                onComplete: () => {
                    gsap.set('.page-transition', { display: 'none' });
                },
            });
    });

    return (
        <div>
            <div className="page-transition w-full h-[100dvh] fixed top-0 left-0 bg-background-light z-[5]">
                <div className="page-transition--inner w-full h-full absolute top-0 left-0 bg-primary z-[5] translate-y-full"></div>
            </div>

            {children}
        </div>
    );
}
