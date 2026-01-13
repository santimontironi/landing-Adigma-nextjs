import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
    try {
        const { email, name, surname, phone, content } = await request.json();

        const transporter = nodemailer.createTransport({
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

        const info = await transporter.sendMail({
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

        // ✅ Cerrar la conexión después de enviar
        transporter.close();

        return NextResponse.json({ 
            success: true,
            message: 'Email enviado correctamente'
        }, { status: 200 });
    }
    catch (error) {
        console.error('Error al enviar email:', error);
        return NextResponse.json({ 
            error: error.message 
        }, { status: 500 });
    }
};