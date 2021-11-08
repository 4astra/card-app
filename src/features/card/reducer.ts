import { createReducer, RootState } from "typesafe-actions";
import { CardHolder } from "../../models/CardHolder";
import { CardState } from "../../models/CardState";
import { ErrorMessage } from "../../models/ErrorMessage";
import { SpendingLimit } from "../../models/SpendingLimit";
import {
  fetchCardHolder,
  reqShowHideCardInfo,
  updateSpendingMoney,
} from "./actions";

const initState: CardState = {
  isLoading: false,
  toggleShowHideCard: false,
  cardInfo: {
    cardType: undefined,
    cardNumber: "",
    goodThrough: "",
    cvvCode: 0,
    holderName: "",
  },
  spendingLimit: {
    nowSpending: 0,
    limitSpending: 100000,
  },
  error: undefined,
};

const cardHolderReducer = createReducer<CardState, any>(initState)
  .handleAction(
    fetchCardHolder.request,
    (state: CardState, _action: any = {}) => ({
      ...state,
      isLoading: true,
    })
  )
  .handleAction(
    fetchCardHolder.success,
    (state: CardState, action: any = {}) => ({
      ...state,
      cardInfo: action.payload,
      isLoading: false,
    })
  )
  .handleAction(fetchCardHolder.failure, (state: CardState, _action: any) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(
    reqShowHideCardInfo.success,
    (state: CardState, _action: any = {}) => ({
      ...state,
      toggleShowHideCard: !state.toggleShowHideCard,
    })
  )
  .handleAction(
    updateSpendingMoney.success,
    (state: CardState, action: any = {}) => ({
      ...state,
      spendingLimit: {
        ...state.spendingLimit,
        nowSpending: action.payload,
      },
    })
  )
  .handleAction(
    updateSpendingMoney.failure,
    (state: CardState, action: any = {}) => ({
      ...state,
      error: (action.payload as ErrorMessage).message,
    })
  );

export default cardHolderReducer;
