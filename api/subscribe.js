const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email, name = 'Subscriber' } = req.body || {};
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Check if environment variables are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            console.error('Missing EMAIL_USER or EMAIL_PASSWORD environment variables');
            return res.status(500).json({ error: 'Server configuration error' });
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
            text: `Hi ${name},\n\nThanks for subscribing to CargoConnect. We'll send updates and offers to this email.\n\n- CargoConnect Team`,
            html: `<p>Hi ${name},</p><p>Thanks for subscribing to CargoConnect. We'll send updates and offers to this email.</p><p>- CargoConnect Team</p>`,
        };

        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);

        return res.status(200).json({ message: 'Subscription successful. Confirmation sent.' });
    } catch (err) {
        console.error('subscribe error', err);
        return res.status(500).json({ error: 'Failed to send subscription email: ' + err.message });
    }
};
