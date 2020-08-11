export interface CarStateInterface {
  prop: boolean;
  count: number;
  categories_filter: unknown;
  brands_filter: unknown;
  cars: unknown;
}

const state: CarStateInterface = {
  prop: false,
  count: 0,
  categories_filter: [],
  brands_filter: [],
  cars: []
}

export default state
