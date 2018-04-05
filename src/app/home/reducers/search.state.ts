import { List, Record, Map } from 'immutable';

export interface SearchState extends Map<string, any> {
  selectedFilters: List<Map<string, any>>;
  selectedCategoryIds: List<number>;
}

export const SearchStateRecord = Record({
  selectedFilters: List([]),
  selectedCategoryIds: List([])
});
