package stageconnect.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import stageconnect.backend.model.User;
import stageconnect.backend.repository.UserRepo;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {
    @Autowired
    UserRepo userRepo;
    
    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    

 
    public User register(User newUser) {
        if (newUser.getEmail() == null || newUser.getEmail().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email cannot be empty");
        }

        if (userRepo.existsByEmail(newUser.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with this email already exists");
        }

        return userRepo.save(newUser);
    }


    public Map<String, Object> login(String email, String password) {
        User user = userRepo.findByEmail(email);

        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("role", user.getRole());
        response.put("id", user.getId());

        return response;
    }
}
