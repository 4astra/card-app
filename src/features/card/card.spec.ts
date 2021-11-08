// import { ActionsObservable, StateObservable } from "redux-observable";
// import { fetch_card_holder } from "./epics";
// import { fetchCardHolder } from "./actions";
// import { fetchCardInfo } from "../../sevices/card-api-client";
// import { createReducer, PayloadAction } from "typesafe-actions";
// import { CombinedState } from "redux";
// import { of } from "rxjs";
// import { CardState } from "../../models/CardState";

// it("Epic", async () => {
//   const response = {
//     data: true,
//   };
//   const client = { fetchCardInfo: jest.fn() };
//   client.fetchCardInfo.mockReturnValue(Promise.resolve(response));

//   const newStore = {
//     isLoading: false,
//     toggleShowHideCard: false,
//     cardInfo: {
//       cardType: undefined,
//       cardNumber: "",
//       goodThrough: "",
//       cvvCode: 0,
//       holderName: "",
//     },
//     spendingLimit: {
//       nowSpending: 0,
//       limitSpending: 100000,
//     },
//     error: undefined,
//   } as CardState;
//   const a = createReducer<CardState, any>(newStore);

  
//   const action$ = ActionsObservable.of(fetchCardHolder.request("loading"));
//   const epic$ = fetch_card_holder(action$, StateObservable<CombinedState>({ cardHolder: unknown; }), { client }); // Get the resulting actions by using async/await.
//   const result = await epic$.toPromise(); // Test if we've received the expected action as result.
//   expect(result).toEqual([
//     { type: "USER_AUTHENTICATE_SUCCESS", idToken: "a-random-generated-jwt" },
//   ]);
// });


describe("Not Complete", () => {

})
