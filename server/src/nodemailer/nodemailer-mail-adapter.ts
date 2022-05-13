import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from './../adapters/mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "23fda188beb163",
      pass: "21764481ac9105"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: 'Equipe ZeroOne <contact@zeroone.com.br>',
            to: 'Leandro Lopes <programador.leandrolopes@gmail.com>',
            subject,
            html: body
        })
    }
}