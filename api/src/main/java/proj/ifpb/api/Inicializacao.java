package proj.ifpb.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;

import proj.ifpb.api.service.UsuarioService;

@Component
public class Inicializacao {

    @Autowired
    private UsuarioService usuarioService;

    @PostConstruct
    public void init() {
        usuarioService.garantirUnicoAdmin();
    }
}
