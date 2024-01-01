package stageconnect.backend.controller;

import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import stageconnect.backend.model.Entreprise;
import stageconnect.backend.model.Student;
import stageconnect.backend.model.User;
import stageconnect.backend.repository.EntrepriseRepo;
import stageconnect.backend.repository.StudentRepo;
import stageconnect.backend.service.AuthService;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;
    private final EntrepriseRepo entrepriseRepository;
    private final StudentRepo studentRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public AuthController(AuthService authService, EntrepriseRepo entrepriseRepository, StudentRepo studentRepository) {
        this.authService = authService;
        this.entrepriseRepository = entrepriseRepository;
        this.studentRepository = studentRepository;

    }

     @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginRequest) {
        try {
            String email = loginRequest.get("email");
            String password = loginRequest.get("password");

            if (email == null || password == null) {
                throw new IllegalArgumentException("Invalid email or password");
            }

            Map<String, Object> loggedInUser = authService.login(email, password);
            return ResponseEntity.ok(loggedInUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if (user.getRole() == null || user.getRole().isEmpty()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Please choose a role");
        }

        if ("student".equalsIgnoreCase(user.getRole())) {
            Student student = user.getStudent();
            if (student == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Student details are required");
            }
            studentRepository.save(student);
            user.setStudent(student);
        } else if ("entreprise".equalsIgnoreCase(user.getRole())) {
            Entreprise entreprise = user.getEntreprise();
            if (entreprise == null) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Entreprise details are required");
            }
            entrepriseRepository.save(entreprise);
            user.setEntreprise(entreprise);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Invalid role");
        }

        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);

        authService.register(user);
        return ResponseEntity.ok("User registered successfully");
    }

}
