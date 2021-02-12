import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColaboracoesPage } from './colaboracoes.page';

describe('ColaboracoesPage', () => {
  let component: ColaboracoesPage;
  let fixture: ComponentFixture<ColaboracoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboracoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
