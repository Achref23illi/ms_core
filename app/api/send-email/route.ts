import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// --- Environment Variables ---
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@techmscore.com'; // Recipient email

// --- Email Template Helper ---
const generateEmailHtml = (data: any) => {
    const { type, name, email, phone, subject, message, ...otherDetails } = data;

    const logoUrl = 'https://techmscore.com/logo.png'; // Update with actual production domain
    const primaryColor = '#092963';
    const accentColor = '#eb7e2a';

    let title = '';
    let description = '';

    switch (type) {
        case 'contact':
            title = 'Nouveau message de contact';
            description = 'Un visiteur a envoyé un message via le formulaire de contact.';
            break;
        case 'support':
            title = 'Demande de Soutien / Incident';
            description = 'Une nouvelle demande de soutien ou déclaration d\'incident a été reçue.';
            break;
        case 'diagnostic':
            title = 'Demande de Diagnostic Gratuit';
            description = 'Un utilisateur a rempli le formulaire de diagnostic de sécurité.';
            break;
        default:
            title = 'Nouvelle soumission';
            description = 'Une nouvelle soumission a été reçue du site web.';
    }

    // Format other details (like radio/checkbox answers)
    const formattedDetails = Object.entries(otherDetails)
        .filter(([key]) => key !== 'motif' && key !== 'urgence' && key !== 'company' && key !== 'jobTitle' && key !== 'city' && key !== 'date' && key !== 'incidents') // We allow specific keys
        .map(([key, value]) => {
            if (typeof value === 'object' && value !== null) return ''; // Skip complex objects if any
            // Simplify key names for display
            const displayKey = key.replace(/_/g, ' ').replace(/^q_/, 'Question: ');
            return `
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px; color: #555; font-weight: bold; width: 40%;">${displayKey}</td>
                    <td style="padding: 10px; color: #333;">${value}</td>
                </tr>
            `;
        }).join('');

    // Explicit details map
    const specificDetails = [
        { label: 'Entreprise', value: data.company },
        { label: 'Fonction', value: data.jobTitle },
        { label: 'Ville/Pays', value: data.city },
        { label: 'Motif', value: data.motif },
        { label: 'Urgence', value: data.urgence },
        { label: 'Incidents', value: Array.isArray(data.incidents) ? data.incidents.join(', ') : data.incidents },
        { label: 'Date détectée', value: data.date },
    ].filter(item => item.value).map(item => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px; color: #555; font-weight: bold; width: 40%;">${item.label}</td>
            <td style="padding: 10px; color: #333;">${item.value}</td>
        </tr>
    `).join('');


    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased;">
    
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f7fa; padding: 20px 0;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background-color: ${primaryColor}; padding: 30px; text-align: center;">
                            <!-- <img src="${logoUrl}" alt="MS Core Technologies" style="max-width: 150px; height: auto;"> -->
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Technologies MS Core</h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h2 style="color: ${primaryColor}; margin-top: 0; font-size: 20px; border-left: 4px solid ${accentColor}; padding-left: 15px;">
                                ${title}
                            </h2>
                            <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
                                ${description}
                            </p>

                            <!-- Primary Info Box -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 8px; margin-bottom: 30px; border: 1px solid #e2e8f0;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 10px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Expéditeur</td>
                                            </tr>
                                            <tr>
                                                <td style="font-size: 16px; font-weight: bold; color: ${primaryColor}; padding-bottom: 5px;">${name}</td>
                                            </tr>
                                            <tr>
                                                <td style="font-size: 14px; color: #555; padding-bottom: 5px;"><a href="mailto:${email}" style="color: ${accentColor}; text-decoration: none;">${email}</a></td>
                                            </tr>
                                            ${phone ? `<tr><td style="font-size: 14px; color: #555;">${phone}</td></tr>` : ''}
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Details Table -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-bottom: 30px;">
                                ${subject ? `
                                <tr style="border-bottom: 1px solid #eee;">
                                    <td style="padding: 10px; color: #555; font-weight: bold; width: 40%;">Sujet</td>
                                    <td style="padding: 10px; color: #333;">${subject}</td>
                                </tr>
                                ` : ''}
                                ${specificDetails}
                                ${formattedDetails}
                            </table>

                            <!-- Message Body -->
                            ${message ? `
                            <div style="background-color: #ffffff; border-top: 2px solid ${accentColor}; padding-top: 20px;">
                                <h3 style="color: ${primaryColor}; font-size: 16px; margin-bottom: 10px;">Message :</h3>
                                <p style="color: #333; line-height: 1.6; white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #eee;">${message}</p>
                            </div>
                            ` : ''}

                            <!-- Actions -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:?subject=Export%20Donn%C3%A9es%20MS%20Core&body=${encodeURIComponent(JSON.stringify(data, null, 2))}" style="display: inline-block; padding: 12px 24px; background-color: #f1f5f9; color: #092963; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; border: 1px solid #cbd5e1;">
                                            📤 Exporter les données (JSON)
                                        </a>
                                        <p style="font-size: 11px; color: #94a3b8; margin-top: 10px;">
                                            Cliquez pour transférer les données brutes.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
                            <p style="margin: 0;">© ${new Date().getFullYear()} Technologies MS Core. Tous droits réservés.</p>
                            <p style="margin: 5px 0 0;">Ce courriel a été envoyé automatiquement depuis votre site web.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};

// --- Auto-Reply Template Helper ---
const generateAutoReplyHtml = (data: any) => {
    const { type, name } = data;
    const primaryColor = '#092963';
    const accentColor = '#eb7e2a';

    let title = '';
    let messageBody = '';
    let delayInfo = '';

    if (type === 'contact') {
        title = 'Confirmation de réception';
        messageBody = `Bonjour ${name},<br><br>Nous avons bien reçu votre message via notre formulaire de contact. Merci de l'intérêt que vous portez à Technologies MS Core.`;
        delayInfo = 'Nos équipes traiteront votre demande et reviendront vers vous sous un délai de <strong>24 à 48 heures</strong>.';
    } else {
        // support or diagnostic
        title = 'Accusé de réception - Support & Diagnostic';
        messageBody = `Bonjour ${name},<br><br>Nous accusons réception de votre demande de soutien ou de diagnostic. Votre dossier a été transmis à nos équipes techniques.`;
        delayInfo = 'Compte tenu de la nature de votre demande, nous nous engageons à vous apporter une réponse ou une intervention sous un délai de <strong>6 à 24 heures</strong>.';
    }

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="padding: 20px 0;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <tr>
                        <td style="background-color: ${primaryColor}; padding: 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Technologies MS Core</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h2 style="color: ${primaryColor}; margin-top: 0; font-size: 20px;">${title}</h2>
                            <p style="color: #333; line-height: 1.6;">${messageBody}</p>
                            
                            <div style="background-color: #f0f9ff; border-left: 4px solid ${accentColor}; padding: 15px; margin: 20px 0; border-radius: 4px;">
                                <p style="margin: 0; color: #0c4a6e; font-size: 15px;">
                                    ⏱️ <strong>Délai de réponse estimé :</strong><br>
                                    ${delayInfo}
                                </p>
                            </div>

                            <p style="color: #666; font-size: 14px; margin-top: 30px;">
                                Cordialement,<br>
                                <strong>L'équipe Technologies MS Core</strong><br>
                                <a href="https://techmscore.com" style="color: ${accentColor}; text-decoration: none;">www.techmscore.com</a>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
                            Ceci est un message automatique, merci de ne pas y répondre directement.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Validate Env Vars
        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
            console.error("Missing SMTP credentials");
            return NextResponse.json({ success: false, error: "Configuration serveur manquante" }, { status: 500 });
        }

        // 2. Setup Transporter
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: Number(SMTP_PORT) === 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        // 3. Generate Content for Admin
        const htmlContent = generateEmailHtml(body);
        const subjectLine = body.subject
            ? `[Web] Nouveau contact : ${body.subject}`
            : `[Web] Nouvelle demande : ${body.type === 'support' ? 'Soutien' : 'Diagnostic'}`;

        // 4. Send Email to Admin (Priority)
        await transporter.sendMail({
            from: `"${body.name}" <${SMTP_USER}>`,
            replyTo: body.email,
            to: CONTACT_EMAIL,
            subject: subjectLine,
            text: body.message || 'Nouvelle soumission du formulaire.',
            html: htmlContent,
        });

        // 5. Send Auto-Reply to Client
        try {
            const autoReplyHtml = generateAutoReplyHtml(body);
            await transporter.sendMail({
                from: `"Technologies MS Core" <${SMTP_USER}>`,
                to: body.email,
                subject: body.type === 'contact' ? 'Confirmation de réception - Technologies MS Core' : 'Prise en charge de votre demande - Technologies MS Core',
                html: autoReplyHtml,
            });
        } catch (autoReplyError) {
            console.error("Error sending auto-reply:", autoReplyError);
            // We do not fail the request if auto-reply fails, as the main admin email succeeded.
        }

        return NextResponse.json({ success: true, message: 'Emails sent' });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: "Erreur lors de l'envoi du courriel" }, { status: 500 });
    }
}
