import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const { email, name = 'Subscriber' } = req.body || {};
        if (!email) {
            res.status(400).json({ error: 'Email is required' });
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
            subject: `Newsletter Signup: ${email}`,
            text: `${name} <${email}> has subscribed to CargoConnect`,
            html: `<p><strong>${name}</strong> &lt;${email}&gt; has subscribed to CargoConnect.</p>`,
        };

        const userMail = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thanks for subscribing to CargoConnect',
            text: `Hi ${name},

Thanks for subscribing to CargoConnect. We'll send updates and offers to this email.

 - CargoConnect Team`,
            html: `<p>Hi ${name},</p><p>Thanks for subscribing to CargoConnect. We'll send updates and offers to this email.</p><p>- CargoConnect Team</p>`,
        };

        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);

        res.status(200).json({ message: 'Subscription successful. Confirmation sent.' });
    } catch (err) {
        console.error('subscribe error', err);
        res.status(500).json({ error: 'Failed to send subscription email' });
    }
}

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email, name = 'Subscriber' } = req.body || {};
        if (!email) return res.status(400).json({ error: 'Email is required' });

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
            subject: `New Newsletter Subscription: ${email}`,
            text: `${name} <${email}> has subscribed to CargoConnect`,
        };

        const userMail = {
            from: admin,
            to: email,
            subject: 'Thanks for subscribing to CargoConnect',
            text: `Hi ${name || 'Subscriber'},\n\nThanks for subscribing to CargoConnect. We'll send updates and offers to ${email}.\n\n— CargoConnect Team`,
        };

        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);

        return res.status(200).json({ message: 'Subscription successful' });
    } catch (err) {
        console.error('subscribe error', err);
        return res.status(500).json({ error: 'Failed to send subscription email' });
    }
}
