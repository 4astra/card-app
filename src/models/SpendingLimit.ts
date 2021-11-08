export interface SpendingLimit {
  nowSpending: number | 0;
  limitSpending: number | 0;
}

export interface SpendingProps {
  spending: SpendingLimit;
}
