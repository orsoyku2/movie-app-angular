import { Category } from './category';

export class CategoryRepository {
  private category: Category[];
  constructor() {
    this.category = [
      { id: 1, name: 'Komedi' },
      { id: 2, name: 'Aksiyon' },
      { id: 3, name: 'Korku' },
      { id: 4, name: 'Gizem-Gerilim' },
      { id: 5, name: 'Bilim-Korku' },
    ];
  }
  getCategories():Category[]{
      return this.category;
  }
}
