import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Email configuration using environment variables
// For development/testing, using Gmail with app-specific password
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'babinbid05@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-specific-password'
    }
});

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
    try {
        const { email, name = 'Subscriber' } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER || 'babinbid05@gmail.com',
            to: 'babinbid05@gmail.com',
            subject: 'New CargoConnect Subscription',
            html: `<h2>New Subscription</h2><p><strong>${name}</strong> (${email}) has subscribed to CargoConnect</p>`
        };

        // Confirmation email to subscriber
        const subscriberMailOptions = {
            from: process.env.EMAIL_USER || 'babinbid05@gmail.com',
            to: email,
            subject: 'Welcome to CargoConnect Newsletter',
            html: `<h2>Welcome to CargoConnect!</h2><p>Thank you for subscribing to our newsletter. You'll now receive exclusive offers, logistics tips, and service updates.</p><p>Best regards,<br>CargoConnect Team</p>`
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(subscriberMailOptions);

        res.status(200).json({
            success: true,
            message: 'Subscription successful! Check your email for confirmation.'
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            error: 'Failed to process subscription. Please try again later.'
        });
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER || 'babinbid05@gmail.com',
            to: 'babinbid05@gmail.com',
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        };

        // Confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER || 'babinbid05@gmail.com',
            to: email,
            subject: 'We received your message - CargoConnect',
            html: `
        <h2>Thank You for Contacting Us</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 2 hours.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>CargoConnect Team</p>
      `
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({
            success: true,
            message: 'Message sent successfully! We will contact you soon.'
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            error: 'Failed to send message. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
