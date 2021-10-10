import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhraseViewModel } from "../models/phrase-viewmodel.model";

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getPhrases() {
    return this.http.get<IPhraseViewModel[]>(this.baseUrl + 'phrase');
  }

  public savePhrase(phrase : IPhraseViewModel) {
    return this.http.post(this.baseUrl + 'phrase',phrase);
  }

  public updatePhrase(phrase: IPhraseViewModel) {
    return this.http.put(this.baseUrl + 'phrase', phrase);
  }

  public deletePhrase(phraseId: string) {
    return this.http.delete(this.baseUrl + 'phrase/?phraseId='+phraseId);
  }
  
}
