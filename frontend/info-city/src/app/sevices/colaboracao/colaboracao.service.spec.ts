import { TestBed } from '@angular/core/testing';

import { ColaboracaoService } from './colaboracao.service';

describe('ColaboracaoService', () => {
  let service: ColaboracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaboracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
