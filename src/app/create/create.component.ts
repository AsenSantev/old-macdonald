import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService} from './../shared/animal.service'

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent {
    animals: any[];
    validAnimals: any[];
    @ViewChild('firstAnimalName') firstAnimalName;
    @ViewChild('firstAnimalSound') firstAnimalSound;
    @ViewChild('secondAnimalName') secondAnimalName;
    @ViewChild('secondAnimalSound') secondAnimalSound;
    @ViewChild('thirdAnimalName') thirdAnimalName;
    @ViewChild('thirdAnimalSound') thirdAnimalSound;
    @ViewChild('fourthAnimalName') fourthAnimalName;
    @ViewChild('fourthAnimalSound') fourthAnimalSound;
    @ViewChild('fifthAnimalName') fifthAnimalName;
    @ViewChild('fifthAnimalSound') fifthAnimalSound;

    constructor(
        private router: Router,
        private animalService: AnimalService
    ) { }

    /**
     * Saves the added animals
     * @returns {void}
     */
    saveAnimals(): void {
        this.createAnimalsObject();
        this.checkValidAnimals();
        this.goToViewAnimals();
    }

    /**
     * Creates the new animals array from input values
     * @returns {void}
     */
    createAnimalsObject(): void {
        this.animals = [
            {
                name: this.firstAnimalName.nativeElement.value,
                sound: this.firstAnimalSound.nativeElement.value
            }, {
                name: this.secondAnimalName.nativeElement.value,
                sound: this.secondAnimalSound.nativeElement.value
            }, {
                name: this.thirdAnimalName.nativeElement.value,
                sound: this.thirdAnimalSound.nativeElement.value
            }, {
                name: this.fourthAnimalName.nativeElement.value,
                sound: this.fourthAnimalSound.nativeElement.value
            }, {
                name: this.fifthAnimalName.nativeElement.value,
                sound: this.fifthAnimalSound.nativeElement.value
            }
        ];
    }

    /**
     * Gets the valid animals
     * @returns {void}
     */
    checkValidAnimals(): void {
        this.validAnimals = this.animals.filter((animal) => {
            return animal.name && animal.sound;
        });

        this.animalService.setCustomAnimals(this.validAnimals);
    }

    /**
     * Navigates to view animals template
     * @returns {void}
     */
    goToViewAnimals(): void {
        this.router.navigate(['view']);
    }
}
