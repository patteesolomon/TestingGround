import { describe } from 'mocha';
import { expect } from 'chai';

class TaxCalculator {
    calculateTaxAmount(salePrice: number, taxRate: number) : number {
        return salePrice * (1 + taxRate)
    }
}

describe('TaxCalculator', () =>
{
  describe('test calculateTaxAmount(salesPrice, taxRate)', () =>
  {
    it('should calculate the tax for an item', () =>
    {
      let taxCalculator = new TaxCalculator();
      expect(taxCalculator
      .calculateTaxAmount(25, .05))
      .to
      .equal(26.25);
    });
  });
});
