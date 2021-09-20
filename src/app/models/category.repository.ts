import { Category } from './category';

export class CategoryRepository {
  private category: Category[];
  constructor() {
    this.category = [
      { id: 1, title: 'Komedi' },
      { id: 2, title: 'Aksiyon' },
      { id: 3, title: 'Korku' },
      { id: 4, title: 'Gizem-Gerilim' },
      { id: 5, title: 'Bilim-Korku' },
    ];
  }
  getCategories():Category[]{
      return this.category;
  }
}
