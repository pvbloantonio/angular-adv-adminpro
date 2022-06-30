import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string; 
  public tituloSubs$: Subscription;

  constructor( private router: Router ) { 
    this.tituloSubs$ = this.getArgumentosRuta()
                      .subscribe( (data: ActivationEnd ) => {
                          this.titulo = data.snapshot.data['titulo'];
                          document.title = `AdminPro - ${ this.titulo }`;
                        });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

getArgumentosRuta() {
  return this.router.events
  .pipe(
    filter( (event: any) => event instanceof ActivationEnd),
    filter( (event: ActivationEnd ) => event.snapshot.firstChild == null),
    
  )
}


}