export interface CardHolder {
  cardType: string | undefined | null;
  cardNumber: string;
  goodThrough: string;
  cvvCode: number | 0;
  holderName: string;
}

export interface CardHoldeProps {
  cardHolder: CardHolder;
}
