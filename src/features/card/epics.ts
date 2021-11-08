import { from, of } from "rxjs";
import { Epic } from "redux-observable";
import { isActionOf, RootState, RootAction, Services } from "typesafe-actions";
import { filter, map, catchError, switchMap, tap } from "rxjs/operators";
import {
  fetchCardHolder,
  fetchCardSpending,
  reqShowHideCardInfo,
  updateSpendingMoney,
} from "./actions";
import { CardHolder } from "../../models/CardHolder";
import { SpendingLimit } from "../../models/SpendingLimit";
import { CardState } from "../../models/CardState";

export const fetch_card_holder: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, _state$, { Api }) =>
  action$.pipe(
    filter(isActionOf(fetchCardHolder.request)),
    switchMap((_action) =>
      from(Api.CardHolder.fetchCardInfo()).pipe(
        map((data) => fetchCardHolder.success(data as CardHolder)),
        catchError((err) => of(fetchCardHolder.failure(err)))
      )
    )
  );

export const fetch_spending_litmit: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, _state$, { Logger, Api }) =>
  action$.pipe(
    filter(isActionOf(fetchCardSpending.request)),
    switchMap((_action) =>
      from(Api.CardHolder.fetchSpendingLimit()).pipe(
        map((data) => fetchCardSpending.success(data as SpendingLimit)),
        catchError((err) => of(fetchCardSpending.failure(err)))
      )
    )
  );

export const show_hide_card_info: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, _state$, {}) =>
  action$.pipe(
    filter(isActionOf(reqShowHideCardInfo.request)),
    switchMap((_action) => of(reqShowHideCardInfo.success(_action.payload)))
  );

export const update_spending_money: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { Logger, Toast }) =>
  action$.pipe(
    filter(isActionOf(updateSpendingMoney.request)),
    // tap((_) => Logger.i("Infoxxx", JSON.stringify(state$))),
    switchMap((_action) => {
      var cardState = state$.value.cardHolder as CardState;
      if (
        cardState.spendingLimit.nowSpending + _action.payload <=
        cardState.spendingLimit.limitSpending
      ) {
        return of(
          updateSpendingMoney.success(
            cardState.spendingLimit.nowSpending + _action.payload
          )
        );
      } else {
        return of(
          updateSpendingMoney.failure({
            message: `Your can not spend more money`,
            code: -1,
          })
        );
      }
    })
  );
