import { Hotel } from './hotel';
import { HotelRest } from './hotel-rest';

describe('Hotel', () => {
  it('should create an instance', () => {
    expect(new Hotel(
      new HotelRest()
    )).toBeTruthy();
  });
});
