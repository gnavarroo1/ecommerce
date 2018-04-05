import { List } from 'immutable';
import { SearchActions } from './search.actions';
import { ActionReducer, Action } from '@ngrx/store';
import { SearchState, SearchStateRecord } from './search.state';

export const initialState: SearchState = new SearchStateRecord() as SearchState;

export function reducer(state = initialState, { type, payload }: any): SearchState {
    switch (type) {
      case SearchActions.ADD_FILTER:
        let filterAlreadyPresent = false;
        state.selectedFilters.forEach(filter => {
          const filterId = filter['id'];
          if (filterId === payload.id) {
            filterAlreadyPresent = true;
          }
        });

        if (filterAlreadyPresent) {
          return state;
        } else {
          // tslint:disable-next-line:no-shadowed-variable
          const _selectedFilters = state.selectedFilters.concat([payload]);
          // tslint:disable-next-line:no-shadowed-variable
          const _selectedCategoryIds = state.selectedCategoryIds.concat(payload.id);
          return state.merge({
            selectedFilters: _selectedFilters,
            selectedCategoryIds: _selectedCategoryIds
          }) as SearchState;
        }

      case SearchActions.REMOVE_FILTER:
        let removeIndex = -1;
        state.selectedFilters.forEach((filter, index) => {
          const filterId = filter['id'];
          if (filterId === payload.id) {
            removeIndex = index;
          }
        });
        const _selectedFilters = state.selectedFilters.remove(removeIndex);
        const categoryRemoveIndex = state.selectedCategoryIds.findIndex(filterId => payload.id === filterId);
        const _selectedCategoryIds = state.selectedCategoryIds.remove(categoryRemoveIndex);
        return state.merge({
            selectedFilters: _selectedFilters,
            selectedCategoryIds: _selectedCategoryIds
        }) as SearchState;

      default:
        return state;
    }
  }
