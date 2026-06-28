'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle) => {
            if (!particle) return;
            gsap.set(particle, {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: Math.random(),
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
                force3D: true,
            });

            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 10 + 10,
                opacity: 0,
                repeat: -1,
                ease: 'none',
            });
        });
    }, []);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 80; // reduced slightly from 100 for better desktop performance too

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {[...Array(particleCount)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) {
                            particlesRef.current[i] = el;
                        }
                    }}
                    style={{ willChange: 'transform' }}
                    className="absolute rounded-full bg-white"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
