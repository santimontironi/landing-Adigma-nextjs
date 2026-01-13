import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.EMAIL_HOST,
    port: 587, 
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const POST = async (request) => {
    try {
        const { email, name, surname, phone, content } = await request.json();

        await transporter.sendMail({
            from: `"Contacto Web" <${process.env.EMAIL_USER}>`, 
            to: process.env.EMAIL_TO,                           
            replyTo: email,                                     
            subject: "Adigma - Contacto",
            text: content,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
                    <h2 style="color: #333; border-bottom: 3px solid #667eea;">
                        Nueva Consulta
                    </h2>

                    <p><strong>Nombre:</strong> ${name} ${surname}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>

                    <hr />

                    <p><strong>Mensaje:</strong></p>
                    <p style="white-space: pre-wrap;">${content}</p>
                </div>
            `
        });

        return NextResponse.json({ status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}