export interface CarStateInterface {
  prop: boolean;
  count: number;
  cars: unknown;
}

const state: CarStateInterface = {
  prop: false,
  count: 0,
  cars: [
    {
      model: 'Palio',
      brand: 'Fiat',
      category: 'E'
    },
    {
      model: 'hb20',
      brand: 'Hyundai',
      category: 'D'
    },
    {
      model: 'Duster',
      brand: 'Renault',
      category: 'C'
    },
    {
      model: 'Creta',
      brand: 'Hyundai',
      category: 'B'
    },
    {
      model: 'Busao',
      brand: 'Volvo',
      category: 'A'
    },
    {
      model: 'Up',
      brand: 'Wolkswagen',
      category: 'E'
    }
  ]
}

export default state
