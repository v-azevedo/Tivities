import { createContext } from "react";
import { UIStore } from "./uiStore";

interface Store {
  uiStore: UIStore;
}

export const store: Store = {
  uiStore: new UIStore(),
};

export const StoreContext = createContext(store);
