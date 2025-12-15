import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const { name, email, phone, subject, message } = req.body || {};
        if (!email || !message || !name) {
            res.status(400).json({ error: 'Name, email and message are required' });
            return;
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const adminMail = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Contact Form: ${subject || 'New Message'}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\n${message}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || '-'}</p><hr/><p>${message}</p>`,
        };

        const userMail = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We received your message',
            text: `Hi ${name},\n\nThanks for contacting CargoConnect. We received your message and will get back to you shortly.\n\n- CargoConnect Team`,
            html: `<p>Hi ${name},</p><p>Thanks for contacting CargoConnect. We received your message and will get back to you shortly.</p><p>- CargoConnect Team</p>`,
        };

        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error('contact error', err);
        res.status(500).json({ error: 'Failed to send contact email' });
    }
}
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, subject, message } = req.body || {};
        if (!email || !name || !message) return res.status(400).json({ error: 'Missing required fields' });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const admin = process.env.EMAIL_USER;
        const adminMail = {
            from: admin,
            to: admin,
            subject: `Contact Form: ${subject || 'No subject'}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
        };

        const userMail = {
            from: admin,
            to: email,
            subject: 'We received your message',
            text: `Hi ${name},\n\nThanks for contacting CargoConnect. We received your message and will respond shortly.\n\n— CargoConnect Team`,
        };

        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error('contact error', err);
        res.status(500).json({ error: 'Failed to send contact email' });
    }
}
