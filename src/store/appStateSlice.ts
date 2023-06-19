import { createSlice } from "@reduxjs/toolkit";
import questions from "gameConfig/gameConfig.json";
import { InitGameStateType } from "store/types";

const initialState: InitGameStateType = {
  currentStep: 0,
  earnedReward: 0,
  questions,
  selectedAnswer: null,
};

export const gameStateSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    goToNextStep: (state) => {
      state.selectedAnswer = null;
      state.earnedReward = state.questions[state.currentStep].reward;
      state.currentStep += 1;
    },
    selectAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    endGame: (state) => {
      state.earnedReward = state.questions[state.currentStep].reward;
      state.selectedAnswer = null;
      state.currentStep = 0;
    },
    resetGame: (state) => {
      state.selectedAnswer = null;
      state.earnedReward = 0;
      state.currentStep = 0;
    },
  },
});

export const { goToNextStep, selectAnswer, resetGame, endGame } =
  gameStateSlice.actions;

export default gameStateSlice.reducer;
