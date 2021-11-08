import { createAsyncAction } from "typesafe-actions";
import { CardHolder } from "../../models/CardHolder";
import { ErrorMessage } from "../../models/ErrorMessage";
import { SpendingLimit } from "../../models/SpendingLimit";

export const REQUEST_CARD_HOLDER_INFO = "REQUEST_CARD_HOLDER_INFO";
export const CARD_HOLDER_INFO_SUCCESS = "CARD_HOLDER_INFO_SUCCESS";
export const CARD_HOLDER_INFO_FAILED = "CARD_HOLDER_INFO_FAILED";

export const REQUEST_CARD_SPENDING_INFO = "REQUEST_CARD_SPENDING_INFO";
export const CARD_SPENDING_INFO_SUCCESS = "CARD_SPENDING_INFO_SUCCESS";
export const CARD_SPENDING_INFO_FAILED = "CARD_SPENDING_INFO_FAILED";

export const REQUEST_SHOW_HIDE_CARD_INFO = "REQUEST_SHOW_HIDE_CARD_INFO";
export const REQUEST_SHOW_HIDE_CARD_INFO_SUCCESS =
  "REQUEST_SHOW_HIDE_CARD_INFO_SUCCESS";
export const REQUEST_SHOW_HIDE_CARD_INFO_FAILED =
  "REQUEST_SHOW_HIDE_CARD_INFO_FAILED";

export const REQUEST_SET_SPENDING = "REQUEST_SET_SPENDING";
export const REQUEST_SET_SPENDING_SUCCESS = "REQUEST_SET_SPENDING_SUCCESS";
export const REQUEST_SET_SPENDING_FAILED = "REQUEST_SHOW_HIDE_CARD_INFO_FAILED";

export const fetchCardHolder = createAsyncAction(
  REQUEST_CARD_HOLDER_INFO,
  CARD_HOLDER_INFO_SUCCESS,
  CARD_HOLDER_INFO_FAILED
)<string, CardHolder, ErrorMessage>();

export const fetchCardSpending = createAsyncAction(
  REQUEST_CARD_SPENDING_INFO,
  CARD_SPENDING_INFO_SUCCESS,
  CARD_SPENDING_INFO_FAILED
)<string, SpendingLimit, ErrorMessage>();

export const reqShowHideCardInfo = createAsyncAction(
  REQUEST_SHOW_HIDE_CARD_INFO,
  REQUEST_SHOW_HIDE_CARD_INFO_SUCCESS,
  REQUEST_SHOW_HIDE_CARD_INFO_FAILED
)<boolean, boolean, ErrorMessage>();

export const updateSpendingMoney = createAsyncAction(
  REQUEST_SET_SPENDING,
  REQUEST_SET_SPENDING_SUCCESS,
  REQUEST_SET_SPENDING_FAILED
)<number, number, ErrorMessage>();
