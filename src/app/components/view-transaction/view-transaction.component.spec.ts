import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactionComponent } from './view-transaction.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrencyFormatterPipe } from 'src/app/shared/pipes/currency-formatter.pipe';

describe('ViewTransactionComponent', () => {
  let component: ViewTransactionComponent;
  let fixture: ComponentFixture<ViewTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ ViewTransactionComponent, CurrencyFormatterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
