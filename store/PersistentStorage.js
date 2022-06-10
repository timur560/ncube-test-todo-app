const LOCAL_STORAGE_ITEM_NAME = 'ncube-text-todo-app:state';

export class PersistentStorage {
  static preload() {
    try {
      const stateString = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME);
      return JSON.parse(stateString);
    } catch (e) {
      return undefined;
    }
  }
  
  static listener(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, serializedState);
  }

  static clear() {
    localStorage.removeItem(LOCAL_STORAGE_ITEM_NAME);
  }

}