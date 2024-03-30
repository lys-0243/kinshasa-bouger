import { NextResponse } from "next/server";
import { prisma } from "../../components/utils/prisma";

export async function POST(request: Request) {
  let comment;
  try {
    const { pseudo, commune, prenom, nom, email, telephone, message } =
      await request.json();

    comment = await prisma.comment.create({
      data: {
        pseudo: pseudo,
        commune: commune,
        prenom: prenom,
        nom: nom,
        email: email.toLowerCase().trim(),
        telephone: telephone,
        message: message,
      },
    });
  } catch (error) {
    console.log({ error });
  }

  return NextResponse.json({ ...comment });
}

export async function GET() {
  const allComments = await prisma.comment.findMany();

  return NextResponse.json(allComments);
}
