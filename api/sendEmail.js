import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { message } = req.body; // Retrieve from req.body instead of req.query

    const mailOptions = {
      from: "idris.dev0x@gmail.com",
      to: "idris.dev0x@gmail.com",
      subject: "New Contact from Portfolio",
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while sending the email." });
  }
};


export default sendEmail;