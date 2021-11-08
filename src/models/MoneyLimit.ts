export interface MoneyLimit {
  currencyType: string;
  value: number | 0;
}

export interface MoneyLimitProps {
  moneyLimit: MoneyLimit;
  onPress(params: any): void;
}
