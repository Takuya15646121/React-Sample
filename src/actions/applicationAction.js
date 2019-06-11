export const TAB_CHANGE = "TAB_CHANGE";
export const actionCreator = {
  tabChange: (value) => {
    return { type: TAB_CHANGE, value: value }
  }
}