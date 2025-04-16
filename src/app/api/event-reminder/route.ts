import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { sendReminderEmail } from "@/lib/mailer";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest) {

    try {
        await dbConnect();

        const users = await UserModel.find({});

        for (const user of users) {
            if (user.email) {
                await sendReminderEmail(
                    user.email,
                    "⏰ Friendly Reminder!",
                    `Hi ${user.username || "there"}, just a reminder`
                );
            }
        }

        return NextResponse.json({message: "Reminders sent!"}, {status: 200})
    } catch (error) {
        console.error("Failed to send reminders:", error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}