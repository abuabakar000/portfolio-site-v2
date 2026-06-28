import CopyEmail from '@/components/CopyEmail';
import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-32 left-0 block">
            <CopyEmail
                email={GENERAL_INFO.email}
                className="px-3 text-muted-foreground tracking-[1px] transition-all !bg-bottom hover:text-foreground hover:!bg-center"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            />
        </div>
    );
};

export default StickyEmail;
