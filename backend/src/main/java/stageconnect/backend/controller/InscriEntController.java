package stageconnect.backend.controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stageconnect.backend.model.InscriEntreprise;
import stageconnect.backend.service.InscriEntService;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/inscri_entreprise")
public class InscriEntController {

    @Autowired
    private InscriEntService inscriEntService;

    @GetMapping
    public ResponseEntity<List<InscriEntreprise>> getAllPosts() {
        List<InscriEntreprise> insEt = inscriEntService.getAllInscri();
        return new ResponseEntity<>(insEt, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<InscriEntreprise> createInscri(@RequestBody InscriEntreprise inscriEntreprise){
        InscriEntreprise createdInscri = inscriEntService.createInscri(inscriEntreprise);
        return new ResponseEntity<>(createdInscri, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<InscriEntreprise> updateInscri(@PathVariable("id") ObjectId id, @RequestBody InscriEntreprise updatedInscri) {
        InscriEntreprise updated = inscriEntService.updateInscri(id, updatedInscri);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInscri(@PathVariable("id") ObjectId id) {
        inscriEntService.deleteInscri(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
