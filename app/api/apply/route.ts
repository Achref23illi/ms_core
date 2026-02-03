import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// --- Environment Variables ---
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@techmscore.com';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const jobTitle = formData.get('jobTitle') as string;
        const message = formData.get('message') as string;
        const cvFile = formData.get('cv') as File | null;

        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
            console.error("Missing SMTP credentials");
            return NextResponse.json({ success: false, error: "Configuration serveur manquante" }, { status: 500 });
        }

        // Validate CV
        let attachments = [];
        if (cvFile) {
            const buffer = Buffer.from(await cvFile.arrayBuffer());
            attachments.push({
                filename: cvFile.name,
                content: buffer,
                contentType: cvFile.type,
            });
        }

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: Number(SMTP_PORT) === 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        // Email to Admin
        const adminHtml = `
            <h2>Nouvelle candidature reçue</h2>
            <p><strong>Poste :</strong> ${jobTitle}</p>
            <p><strong>Candidat :</strong> ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            ${message ? `<p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
            <p><em>Le CV est en pièce jointe.</em></p>
        `;

        await transporter.sendMail({
            from: `"${firstName} ${lastName}" <${SMTP_USER}>`,
            replyTo: email,
            to: CONTACT_EMAIL,
            subject: `[Candidature] ${jobTitle} - ${firstName} ${lastName}`,
            html: adminHtml,
            attachments: attachments,
        });

        // Auto-reply to Candidate
        const candidateHtml = `
            <h2>Accusé de réception</h2>
            <p>Bonjour ${firstName},</p>
            <p>Nous avons bien reçu votre candidature pour le poste de <strong>${jobTitle}</strong>.</p>
            <p>Notre équipe va étudier votre profil et nous reviendrons vers vous si votre candidature est retenue.</p>
            <p>Merci de l'intérêt que vous portez à Technologies MS Core.</p>
            <br>
            <p>Cordialement,<br>L'équipe RH</p>
        `;

        try {
            await transporter.sendMail({
                from: `"Technologies MS Core RH" <${SMTP_USER}>`,
                to: email,
                subject: `Réception de votre candidature - ${jobTitle}`,
                html: candidateHtml,
            });
        } catch (error) {
            console.error("Auto-reply failed:", error);
        }

        return NextResponse.json({ success: true, message: 'Candidature envoyée' });

    } catch (error) {
        console.error("Error processing application:", error);
        return NextResponse.json({ success: false, error: "Erreur lors de l'envoi" }, { status: 500 });
    }
}
