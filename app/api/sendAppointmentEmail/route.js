"use server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, mobile, company, date, time } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Appointment Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Booking",
      text: `Email: ${email}\nMobile: ${mobile}\nCompany: ${company}\nDate: ${date}\nTime: ${time}`,
    });

    await transporter.sendMail({
      from: `"LeapBridge Consulting" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Appointment Confirmation",
      text: `Hello,\n\nYour appointment is booked for ${date} at ${time}.\nWe’ll confirm shortly.\n\n- LeapBridge Consulting`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
