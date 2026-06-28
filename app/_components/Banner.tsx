'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-7xl xs:text-8xl sm:text-[96px] md:text-[110px] font-anton">
                        <span className="text-primary">FULL-STACK</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-base xs:text-lg md:text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Khawaja
                        </span>
                        . A creative Full-Stack Developer with 3+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={GENERAL_INFO.upworkProfile}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Let&apos;s Talk
                    </Button>

                    <div className="flex items-center gap-2 mt-3">
                        <span className="size-3 rounded-full bg-white"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time opportunities
                        </span>
                    </div>
                </div>

                <div className="w-full grid grid-cols-3 md:flex md:flex-col md:absolute bottom-[10%] right-[4%] gap-4 md:gap-8 text-center md:text-right mt-10 md:mt-0">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl xs:text-4xl md:text-4xl font-anton text-primary mb-1">
                            3+
                        </h5>
                        <p className="text-xs xs:text-sm md:text-base text-muted-foreground leading-tight">
                            Years of <br className="md:hidden" /> Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl xs:text-4xl md:text-4xl font-anton text-primary mb-1">
                            20+
                        </h5>
                        <p className="text-xs xs:text-sm md:text-base text-muted-foreground leading-tight">
                            Completed <br className="md:hidden" /> Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl xs:text-4xl md:text-4xl font-anton text-primary mb-1">
                            10K+
                        </h5>
                        <p className="text-xs xs:text-sm md:text-base text-muted-foreground leading-tight">
                            Hours <br className="md:hidden" /> Worked
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
