import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  });

  public counter = signal(10)

  public fullName = computed( () => `${this.user().first_name} ${this.user().last_name}` );

  public userChangedEffect = effect( () => {
    console.log('userChangedEffect', this.counter(), this.user())
  })


  increseBy( value: number ) {
    this.counter.update( current => current + value )
  }

  onFieldUpdated(field: string, value: string) {

    this.user.update( current => {
      return {
        ...current,
        [field]: value,
      }
    })


    // this.user.mutate((current) => {
    //   current.first_name = 'Hola Mundo';

      // switch (field) {
      //   case 'email':
      //     current.email = value;
      //     break;
      //   case 'first_name':
      //     current.first_name = value;
      //     break;
      //   case 'last_name':
      //     current.last_name = value;
      //     break;
      //   case 'id':
      //     current.id = Number(value);
      //     break;
      // }
    // });
  }
}
