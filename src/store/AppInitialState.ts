import { AppState } from './AppState';
import { show } from "./loading/loading.actions";

export const AppInitialState: AppState = {
  loading: {
    show: false
  },

  login: {
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
    isRecoveredPassword: false,
    isRecoveringPassword: false,
  }
}
