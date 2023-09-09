import {randomInteger} from "./randomNumber";

export const ACTIONS = {
  ROLL: "ROLL",
  AUTO_ROLL: "AUTO_ROLL",
  CLEAR: "CLEAR",
  SET_ITERATIONS: "SET_ITERATIONS"
}

export const INITIAL_STATE = {
  iterations: 1,
  rolls: []
}

export const rollReducer = (state, action) => {

  switch (action.type) {

    case ACTIONS.CLEAR:
      return {
        ...state,
        rolls: []
      }

    case ACTIONS.ROLL:
      return {
        ...state,
        rolls: [...state.rolls, randomInteger()]
      }

    case ACTIONS.AUTO_ROLL:
      const newRolls = [...state.rolls]

      for (let i = 0; i < state.iterations; i++) {
        newRolls.push(randomInteger())
      }

      return {
        ...state,
        rolls: newRolls
      }

    case ACTIONS.SET_ITERATIONS:
      return {
        ...state,
        iterations: action.payload.iterations
      }

    default:
      throw new Error(`Unrecognized action '${action.type}'`)
  }
}

