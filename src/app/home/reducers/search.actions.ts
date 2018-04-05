import { Action } from '@ngrx/store';

export class SearchActions {
    static GET_ALL_FILTERS = 'GET_ALL_FILTERS';
    static ADD_FILTER = 'ADD_FILTER';
    static REMOVE_FILTER = 'REMOVE_FILTER';

    getAllFiltes() {
        return { type: SearchActions.GET_ALL_FILTERS };
    }

    addFilter(category: any) {
      return {
        type: SearchActions.ADD_FILTER,
        payload: category
      };
    }

    removeFilter(category: any) {
      return {
        type: SearchActions.REMOVE_FILTER,
        payload: category
      };
    }
}
