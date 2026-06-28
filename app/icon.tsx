import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 22,
                    background: '#212121', // Dark background matching the page theme
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f050', // Bright primary green color matching HSL(140, 100%, 47%)
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    borderRadius: '25%',
                }}
            >
                K.
            </div>
        ),
        {
            ...size,
        }
    );
}
