package proj.ifpb.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class EmailController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/enviar-email")
    public String enviarEmail(@RequestBody EmailRequest emailRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("lojadejogosweb@gmail.com");
        message.setSubject("Nova mensagem do formulário de contato");
        message.setText("Email do Cliente: " + emailRequest.getEmail() +
                "\nNome do Cliente: " + emailRequest.getNome() +
                "\nMensagem: " + emailRequest.getMensagem());

        mailSender.send(message);

        return "E-mail enviado com sucesso!";
    }

    public static class EmailRequest {

        private String email;
        private String nome;
        private String mensagem;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }

        public String getMensagem() {
            return mensagem;
        }

        public void setMensagem(String mensagem) {
            this.mensagem = mensagem;
        }
    }
}
