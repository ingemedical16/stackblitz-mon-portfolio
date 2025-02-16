import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      );
    }
    const HOST = process.env.EMAIL_HOST
    const PORT = Number(process.env.EMAIL_PORT)
    const AUTH_USER = process.env.EMAIL_USER
    const AUTH_PASS = process.env.EMAIL_PASS

    console.log("check env",HOST,PORT,AUTH_USER,AUTH_PASS)

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "api",
        pass: "a9c1af3ce05c4b9438092e812e086c99"
      }
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: 'Nouveau message du formulaire de contact',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès !', info },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Impossible d'envoyer l'email." },
      { status: 500 }
    );
  }
}
