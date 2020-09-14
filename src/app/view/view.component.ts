import { Component, OnInit } from '@angular/core';
import { AnimalService} from './../shared/animal.service'

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    myAnimals: any = [
        {
            name: 'dog',
            sound: 'woof'
        },
        {
            name: 'cat',
            sound: 'meow'
        },
        {
            name: 'pig',
            sound: 'gruh'
        },
        {
            name: 'cow',
            sound: 'moo'
        },
        {
            name: 'duck',
            sound: 'kvak'
        }
    ];

    constructor(
        private animalService: AnimalService
    ) {
    }

    ngOnInit(): void {
        if (this.animalService.customAnimals) {
            this.myAnimals = this.myAnimals.concat(this.animalService.customAnimals);
        }
    }

}
