import { CardHolder } from "./CardHolder";
import { SpendingLimit } from "./SpendingLimit";

export type CardState = {
    isLoading: boolean | false;
    toggleShowHideCard: boolean | false;
    cardInfo: CardHolder;
    spendingLimit: SpendingLimit;
    error: string | undefined;
  };