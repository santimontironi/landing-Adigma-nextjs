import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS
    }
})

export const POST = async (request) => {
    try {
        const { email, name, surname, phone, content } = await request.json();

        const data = await prisma.message.create({
            data: {
                email: email,
                name: name,
                surname: surname,
                phone: phone,
                content: content
            }
        });

        await transporter.sendMail({
            from: email,
            to: process.env.NEXT_PUBLIC_EMAIL_USER,
            subject: "Adigma - Contacto",
            text: content,
            subject: "Adigma - Contacto",
            html: `<div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
                    <h2 style="color: #333; border-bottom: 3px solid #667eea; padding-bottom: 10px;">
                        Nueva Consulta
                    </h2>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 5px 0;"><strong>Nombre:</strong> ${name} ${surname}</p>
                        <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
                    </div>
                    
                    <div style="background-color: #fff; padding: 15px; border-left: 4px solid #667eea;">
                        <p style="margin: 0;"><strong>Mensaje:</strong></p>
                        <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${content}</p>
                    </div>
                </div>`
        })

        return NextResponse.json({ data: data }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}