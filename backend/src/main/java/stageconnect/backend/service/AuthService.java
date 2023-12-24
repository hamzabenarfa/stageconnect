package stageconnect.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import stageconnect.backend.model.User;
import stageconnect.backend.repository.UserRepo;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    private final UserRepo userRepo;

    @Autowired
    public AuthService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User register(User newUser) {
        if (userRepo.existsByEmail(newUser.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with this email already exists");
        }

        return userRepo.save(newUser);
    }

    public  Map<String, Object> login(String email, String password) {
        User user = userRepo.findByEmailAndPassword(email, password);

        if (user == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("role", user.getRole());
        response.put("id", user.getId());

        return response;
    }
}
