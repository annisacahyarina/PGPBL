import { Action, createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { RegisterState } from "./RegisterState";
import { register, registerFail, registerSuccess } from "./register.actions";

const initialState = AppInitialState.register;

const reducer = createReducer(initialState,
  on(register, state => {
    return {
      ...state,
      error: null,
      isRegistered: false,
      isRegistering: true
    }
  }),
  on(registerSuccess, state => {
    return {
      ...state,
      isRegistered: true,
      isRegistering: false
    }
  }),
  on(registerFail, (state, Action) => {
    return {
      ...state,
      error: Action.error,
      isRegistered: false,
      isRegistering: false
    }
  })
);

export function registerReducer(state: RegisterState, action: Action<string>){
  return reducer (state, action);
}
