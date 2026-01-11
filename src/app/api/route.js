import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const POST = async (request) => {
    try{
        const { email, name, surname, phone, content} = await request.json();

        const data = await prisma.message.create({
            data: {
                email: email,
                name: name,
                surname: surname,
                phone: phone,
                content: content
            }
        });

        return NextResponse.json({data: data}, {status: 200});
    }
    catch(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}