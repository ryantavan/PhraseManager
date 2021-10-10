import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhraseViewModel, IPhraseViewModel as IPhraseViewModel1 } from '../models/phrase-viewmodel.model';
import { PhraseService } from "../services/phrase.service";

@Component({
  selector: 'phrase',
  templateUrl: './phrase.component.html'
})
export class PhraseComponent {
  public phrases: IPhraseViewModel[];
  public selectedPhrase = {} as IPhraseViewModel ;
  public isWorking: boolean;
  public isEditing: boolean = false;
  private sortAscending: boolean = true;
  public errorMessage: string = "";
  public showAlert: boolean = false;

  constructor(http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private phraseService: PhraseService) {
    this.load();
  }

  private alert(message: string) {
    this.showAlert = true;
    this.errorMessage = message;
    setTimeout(() => {
      this.showAlert = false;
    }, 2000);
  }

  private compareObjects(object1, object2, key) {
    const obj1 = object1[key].toUpperCase();
    const obj2 = object2[key].toUpperCase();

    if (obj1 < obj2) {
      return -1;
    }
    if (obj1 > obj2) {
      return 1;
    }
    return 0;
  }


  public sort(fieldName: string) {
    this.sortAscending = !this.sortAscending;
    if (this.sortAscending) {
      this.phrases.sort((book1, book2) => {
        return this.compareObjects(book1, book2, fieldName);
      });
    } else {
      this.phrases.sort((book1, book2) => {
        return this.compareObjects(book2, book1, fieldName);
      });
    }
  }


  public load() {
    this.isWorking = true;
    this.phraseService.getPhrases().subscribe(result => {
      this.isWorking = false;
      this.isEditing = false;
        this.phrases = result;
      },
      error => console.error(error));
  }

  public add() {
    this.isWorking = true;
    //let phrase = { term: this.selectedPhrase.term, definition: this.selectedPhrase.definition } as IPhraseViewModel;

    this.phraseService.savePhrase(this.selectedPhrase).subscribe(result => {
        this.isWorking = false;
        this.load();
      this.selectedPhrase.term = "";
      this.selectedPhrase.definition = "";
      },
      error => {
        // this is not the best practice to handle the validation error.
        // validation errors should be encapsulated inside the return type.
        this.isWorking = false;
        this.alert("There have been some errors! Please check your inputs");
        console.error(error);
      });

  }

  public update() {
    this.isEditing = false;
    this.phraseService.updatePhrase(this.selectedPhrase).subscribe(result => {
        this.isWorking = false;
        this.load();
      },
      error => {
        // this is not the best practice to handle the validation error.
        // validation errors should be encapsulated inside the return type.
        this.isWorking = false;
        this.alert("There have been some errors! Please check your inputs");
        console.error(error);
      });

  }

  public cancel() {
    this.isEditing = false;
    this.selectedPhrase.term = "";
    this.selectedPhrase.definition = "";
    // this is not the best practice, I ran out of time,
    // the adding fields and selected items should be held in the different variables.
    this.load();
  }

  public edit(phrase: IPhraseViewModel1) {
    this.selectedPhrase = phrase;
    this.isEditing = true;
  }


  public delete(phrase: IPhraseViewModel) {
    this.isWorking = true;

    this.phraseService.deletePhrase(phrase.id).subscribe(result => {
      this.isWorking = false;
        //we also can delete the from the local collection, but for the test app it should Ok 
        this.load();
      },
      error => console.error(error));
  }




}


