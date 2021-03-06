import { Component, OnInit } from '@angular/core';
import { EtudiantCreateDto } from 'src/app/models/etudiant-create-dto';
import { EtudiantsService } from 'src/app/services/etudiant/etudiants.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {

  etudiant = new EtudiantCreateDto();
  messageValidation = '';

  constructor(private service: EtudiantsService) { }

  ngOnInit() {
  }

  save() {
    this.service.create(this.etudiant).subscribe(
      (responseDto) => {
        console.log('debug responseDto : ', responseDto);
        if (!responseDto.error) {
          this.messageValidation = responseDto.message;
        }
      }
    );
  }

}
