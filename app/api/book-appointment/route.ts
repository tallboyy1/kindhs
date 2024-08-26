import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const { name, contactNumber, service, location, message } = formData;

  // Set up the email transporter using your email service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "kindheartservicellc@gmail.com",
    subject: "New Appointment Booking",
    text: `
    This message was sent by a client who booked an appointment from the appointment booking form on the Kind Heart Service, LLC website.



      Full Name: ${name}
      Contact Number: ${contactNumber}
      Service: ${service}
      Location: ${location}
      Additional Information: ${message}

      
      
      
      NB: This mail delivered because they agreed to the Privacy Policy of the Kind Heart Service.
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
