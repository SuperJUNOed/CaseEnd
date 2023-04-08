// Define the action type
export const SET_FILTERITEM = "SET_FILTERITEM";

// Define the action creator function
export function setFilterItem(filterItem) {
  return {
    type: SET_FILTERITEM,
    payload: filterItem,
  };
}
