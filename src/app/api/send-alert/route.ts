import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
    try {
        const { partnerEmail } = await request.json();

        if (!partnerEmail || !/^\S+@\S+\.\S+$/.test(partnerEmail)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('RESEND_API_KEY is missing');
            return NextResponse.json(
                { error: 'Internal Server Error: Missing API Key' },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            from: 'Impulse <notifications@impulsecontrolapp.com>', // Assuming a generic sender or verify one
            to: partnerEmail,
            subject: 'Impulse: your accountability partner uninstalled the extension',
            text: `Your accountability partner has uninstalled the Impulse extension. This is an automated notification to keep you informed.`,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Unexpected error:', err);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
