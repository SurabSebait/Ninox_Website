import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
): Promise<ApiResponse>{
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Ninox | Verification Code',
        react: VerificationEmail({username,otp:verifyCode}),
      });
    try{
        return {success:true, message:'Verification send successfully'}
    }catch(emailError){
        console.error("Error seding verification email",emailError)
        return {success:false, message:'Failed to send verification email'}
    }
}
