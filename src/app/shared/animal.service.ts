import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AnimalService {
    customAnimals: any[];

    constructor() {
    }

    setCustomAnimals(customAnimals: any[]): void {
        this.customAnimals = customAnimals;
    }
}
