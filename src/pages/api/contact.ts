import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(400).send({ error: 'Bad Request' });
    return;
  }

  try {
    const body = req.body;

    if (
      !body ||
      !body.fullname ||
      !body.email ||
      !body.message ||
      body.fullname > 120 ||
      body.message.length > 3000
    ) {
      res
        .status(400)
        .send({ error: 'Missing body or some field is incorrect' });
      return;
    }

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        body.email
      )
    ) {
      res.status(400).send({ error: 'Invalid email format' });
      return;
    }

    const emailTemplateSource = fs.readFileSync(
      path.join(process.cwd(), 'src/data/templates/contact.hbs'),
      'utf8'
    );
    const template = handlebars.compile(emailTemplateSource);
    const htmlToSend = template({
      fullname: body.fullname,
      email: body.email,
      message: body.message
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.seznam.cz',
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL,
      subject: process.env.EMAIL_USER,
      attachments: [
        /* {
          filename: "logo.png",
          path: path.join(
            process.cwd(),
            "src/data/templates/attachments/logo.png"
          ),
          cid: "imagename",
        }, */
      ],
      html: htmlToSend
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error });
      } else {
        return res.status(200).json({ message: 'Email has been sent' });
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
