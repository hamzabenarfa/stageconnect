package stageconnect.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import stageconnect.backend.model.User;
import stageconnect.backend.repository.UserRepo;

@Service
public class AuthService {

    private final UserRepo userRepo;

    @Autowired
    public AuthService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User register(User newUser) {
        // Check if the user with the provided email already exists
        if (userRepo.existsByEmail(newUser.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with this email already exists");
        }
        // You might want to hash the password before saving it in the database
        return userRepo.save(newUser);
    }

    public User login(String email, String password) {
        User user = userRepo.findByEmailAndPassword(email, password);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }
        // Here, you might want to generate and return a token for successful login
        return user;
    }
}
