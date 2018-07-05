import {_retrieveData} from '../utils/api'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD ='ADD_CARD'
export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addCard (card, deck) {
  console.log("hola")
  return {
    type: ADD_CARD,
    card,
    deck
  }
}

export function addDeck (deck) {
    return {
      type: ADD_DECK,
      deck
    }
  }
