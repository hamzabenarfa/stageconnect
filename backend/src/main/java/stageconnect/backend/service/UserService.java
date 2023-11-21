package stageconnect.backend.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import stageconnect.backend.model.User;
import stageconnect.backend.repository.UserRepo;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getUserById(ObjectId id) {
        return userRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with id: " + id.toHexString()));
    }



    public User updateUser(ObjectId id, User updatedUser) {
        Optional<User> existingUser = userRepo.findById(id);

        if (existingUser.isPresent()) {
            User userToUpdate = existingUser.get();
            userToUpdate.setNom(updatedUser.getNom());
            userToUpdate.setPrenom(updatedUser.getPrenom());
            userToUpdate.setEmail(updatedUser.getEmail());
            userToUpdate.setPassword(updatedUser.getPassword());

            return userRepo.save(userToUpdate);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with id: " + id.toHexString());
        }
    }

    public void deleteUser(ObjectId id) {
        userRepo.deleteById(id);
    }
}
