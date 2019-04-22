import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = { 
      fields: [
        {
          type: "textSingle"
        },
        {
          type: "textParagraph"
        },
        {
          type: "multipleChoice",
          choices: []
        },
        {
          type: "checkBoxes",
          choices: []
        }
      ] 
    };;

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState
  );

 

  return store;
}