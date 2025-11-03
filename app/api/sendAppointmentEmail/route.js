"use server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, mobile, company, date, time } = body;

    const transporter = nodemailer.createTransport({
      host: "mail.leapbridgeconsulting.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📨 Email to Admin
    await transporter.sendMail({
      from: `"Appointment" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Booking Received",
      text: `
Hello Team,

A new appointment has been booked via the LeapBridge website. Details are below:

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile: ${mobile}
🏢 Company: ${company}
📅 Date: ${date}
⏰ Time: ${time}

Please review and confirm the appointment with the client.

Thanks.
      `,
    });

    // 📨 Confirmation Email to Client
    await transporter.sendMail({
      from: `"LeapBridge Consulting" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Appointment Request Has Been Received",
      text: `
Hello,

Thank you for booking an appointment with LeapBridge Consulting.

📅 Appointment Date: ${date}
⏰ Appointment Time: ${time}

Our team will reach out shortly to confirm the meeting details.

We look forward to connecting with you!

Warm regards,  
The LeapBridge Consulting Team  
connect@leapbridgeconsulting.com
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
