package stageconnect.backend.controller;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stageconnect.backend.model.Entreprise;
import stageconnect.backend.model.Student;
import stageconnect.backend.model.User;
import stageconnect.backend.repository.EntrepriseRepo;
import stageconnect.backend.repository.StudentRepo;
import stageconnect.backend.service.AuthService;
import org.springframework.web.bind.annotation.RestController;


import java.util.Map;

@RestController
@RequestMapping("/api/auth")

public class AuthController {

    private final AuthService authService;
    private final EntrepriseRepo entrepriseRepository;
    private final StudentRepo studentRepository;

    public AuthController(AuthService authService, EntrepriseRepo entrepriseRepository, StudentRepo studentRepository) {
        this.authService = authService;
        this.entrepriseRepository = entrepriseRepository;
        this.studentRepository = studentRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, Object> loginRequest) {
        try {
            String email = (String) loginRequest.get("email");
            String password = (String) loginRequest.get("password");

            if (email == null || password == null) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email or password");
            }

            Map<String, Object> loggedInUser = authService.login(email, password);
            return ResponseEntity.ok(loggedInUser);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if ("student".equalsIgnoreCase(user.getRole())) {
            Student student = user.getStudent();
            studentRepository.save(student);
            user.setStudent(student);

        } else if ("entreprise".equalsIgnoreCase(user.getRole())) {
            Entreprise entreprise = user.getEntreprise();
            entrepriseRepository.save(entreprise);
            user.setEntreprise(entreprise);
        }
        else {
            return ResponseEntity.status(HttpStatusCode.valueOf(500)).body("Please choose a role");
        }


        authService.register(user);
        return ResponseEntity.ok("User registered successfully");
    }


}
