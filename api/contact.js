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
        const { name, email, phone, subject, message } = req.body || {};
        if (!email || !message || !name) {
            return res.status(400).json({ error: 'Name, email and message are required' });
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

        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error('contact error', err);
        return res.status(500).json({ error: 'Failed to send contact email: ' + err.message });
    }
};
