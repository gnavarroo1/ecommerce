import { Category } from './category';
import { Terms } from './terms';

export class Product {
    id: number;
    name: string;
    description: string;
    categoryId: Category;
    qty: number;
    price: number;
    terms: Terms;
    available: boolean;
    image: string;
}
