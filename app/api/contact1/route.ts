import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    console.log("🔍 Vérification des variables d’environnement...");
    console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
    console.log("EMAIL_TO:", process.env.EMAIL_TO);

    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
      return NextResponse.json(
        { error: "Configuration manquante. Vérifiez les variables d’environnement." },
        { status: 500 }
      );
    }

    // Envoi de l'email avec Resend
    const { data, error }= await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: [process.env.EMAIL_TO!],
      subject: "Nouveau message du formulaire de contact",
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("📩 Réponse Resend:", data); // Debug response

    if (error) {
      console.error("❌ Erreur API Resend:", error);
      return NextResponse.json(
        { error: error.message || "Erreur inconnue" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès !", data: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Impossible d'envoyer l'email." },
      { status: 500 }
    );
  }
}