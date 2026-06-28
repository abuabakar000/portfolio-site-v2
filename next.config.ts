import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

const nextConfig = (phase: string): NextConfig => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            distDir: '.next-dev',
        };
    }
    return {
        distDir: '.next',
    };
};

export default nextConfig;
