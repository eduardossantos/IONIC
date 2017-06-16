import { TestBed, inject } from '@angular/core/testing';

import { BuscaTipoService } from './busca-tipo.service';

describe('BuscaTipoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscaTipoService]
    });
  });

  it('should be created', inject([BuscaTipoService], (service: BuscaTipoService) => {
    expect(service).toBeTruthy();
  }));
});
