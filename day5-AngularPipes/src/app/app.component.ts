import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>Pipes in Angular</h1>
    </div>
    <h2>Inbuilt Pipes</h2>
    <hr />
    <!-- <ul>
      <ol *ngFor="let hero of heroes">{{ hero.title }}</ol>
    </ul> -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Sl#</th>
          <th>Title</th>

          <th>Full Name</th>
          <th>City</th>
          <th>Ticket Price</th>
          <th>Release Date</th>
          <th>Movies List</th>
          <th>Icons</th>
          <th>Lable</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let hero of heroes">
          <td>{{ hero.sl }}</td>
          <td>{{ hero.title }}</td>

          <td>{{ hero.firstname + ' ' + hero.lastname }}</td>
          <td>{{ hero.city }}</td>
          <td>{{ hero.ticketprice }}</td>
          <td>{{ hero.releasedate | date }}</td>
          <td>{{ hero.movieslist.length }}</td>

          <td [ngSwitch]="hero.title">
            <Img
              width="60"
              *ngSwitchCase="'Batman'"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBY-F9vb2S8dK2RZOMJj1UPSNzTVi0zC09DA&usqp=CAU"
              [alt]="hero.title"
            />

            <Img
              width="60"
              *ngSwitchCase="'Superman'"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXEiSGUsLOvHLbpUUl-9QMr4KN28HxHMJ2g&usqp=CAU"
              [alt]="hero.title"
            />
            <Img
              width="60"
              *ngSwitchCase="'Ironman'"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bnyDtRVSels-BlqJcJPf2RfLBs6Orb66YA&usqp=CAU"
              [alt]="hero.title"
            />
            <Img
              width="60"
              *ngSwitchCase="'Phantom'"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_MaTYzqj2Hp0DtSmB95qkz-RZBvJ1qpcyA&usqp=CAU"
              [alt]="hero.title"
            />
            <Img
              width="60"
              *ngSwitchCase="'Spiderman'"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEEjVY6IqaOUygOHNqsRK-TT8ADqbA7HPyw&usqp=CAU"
              [alt]="hero.title"
            />
            <Img
              width="60"
              *ngSwitchCase="'Wonder Women'"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2c_DU2eptMz3ZxvZzQ4c4s36F_Tj5hFnaA&usqp=CAU"
              [alt]="hero.title"
            />
            <Img
              width="60"
              *ngSwitchDefault
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpUT2Bfr2h8pq6ter0EIwdkQgrIMac8RRkA&usqp=CAU"
              [alt]="hero.title"
            />
          </td>
          <td *ngIf="hero.gender == 'male'">Male SuperHero</td>
          <td *ngIf="hero.gender == 'female'">Female SuperHero</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class AppComponent {
  title = 'step2-pipes';
  heroes = [
    {
      sl: 1,
      title: 'Batman',
      gender: 'male',
      firstname: 'Bruce',
      lastname: 'Wayne',
      city: 'Gotham',
      ticketprice: 123.4567,
      releasedate: '1/26/2018',
      poster: 'assets/images/batman.jpg',
      movieslist: [
        {
          title: 'Batman Begins',
          poster: 'assets/images/bat1_tn.jpg',
        },
        {
          title: 'Dark Knight',
          poster: 'assets/images/bat2_tn.jpg',
        },
        {
          title: 'Dark Knight Raises',
          poster: 'assets/images/bat3_tn.jpg',
        },
      ],
    },
    {
      sl: 2,
      title: 'Superman',
      gender: 'male',
      firstname: 'Clark',
      lastname: 'Kent',
      city: 'Metropolis',
      ticketprice: 178.6789,
      releasedate: '1/27/2018',
      poster: 'assets/images/superman.jpg',
      movieslist: [
        {
          title: 'Superman The Movie',
          poster: 'assets/images/super1_tn.jpg',
        },
        {
          title: 'Superman Returns',
          poster: 'assets/images/super2_tn.jpg',
        },
        {
          title: 'Superman Man of Steel',
          poster: 'assets/images/super3_tn.jpg',
        },
      ],
    },
    {
      sl: 3,
      title: 'Ironman',
      gender: 'male',
      firstname: 'Tony',
      lastname: 'Stark',
      city: 'New York',
      ticketprice: 122,
      releasedate: '1/27/2018',
      poster: 'assets/images/ironman.jpg',
      movieslist: [
        {
          title: 'Ironman',
          poster: 'assets/images/iron1_tn.jpg',
        },
        {
          title: 'Ironman 2',
          poster: 'assets/images/iron2_tn.jpg',
        },
        {
          title: 'Ironman 3',
          poster: 'assets/images/iron3_tn.jpg',
        },
      ],
    },
    {
      sl: 4,
      title: 'Phantom',
      gender: 'male',
      firstname: 'Kit',
      lastname: 'Walker',
      city: 'Bhangala',
      ticketprice: 98.6456,
      releasedate: '1/27/2018',
      poster: 'assets/images/phantom.jpg',
      movieslist: [
        {
          title: 'The Phantom Slam Evilz',
          poster: 'assets/images/phantom1_tn.jpg',
        },
      ],
    },
    {
      sl: 5,
      title: 'Spiderman',
      gender: 'male',
      firstname: 'Peter',
      lastname: 'Parker',
      city: 'New York',
      ticketprice: 1.3456,
      releasedate: '9/26/2018',
      poster: 'assets/images/spiderman.jpg',
      movieslist: [
        {
          title: 'Spiderman',
          poster: 'assets/images/spider1_tn.jpg',
        },
        {
          title: 'Spiderman 2',
          poster: 'assets/images/spider2_tn.jpg',
        },
        {
          title: 'Spiderman 3',
          poster: 'assets/images/spider3_tn.jpg',
        },
      ],
    },
    {
      sl: 6,
      title: 'Wonder Women',
      gender: 'female',
      firstname: 'Princess',
      lastname: 'Diana',
      city: 'Amazon',
      ticketprice: 341.3456978978,
      releasedate: '11/26/2018',
      poster: 'assets/images/wonderwoman.jpg',
      movieslist: [],
    },
  ];
}
