import xfetch, { BASE_URL } from "../network";
import { CardHolder } from "../models/CardHolder";
import { ErrorMessage } from "../models/ErrorMessage";
import { SpendingLimit } from "../models/SpendingLimit";
/**
 * POST Social Profile to register authentication
 * @param {SocialProfile} social is information to register
 * @returns {Promise<any>} of response body
 */
export const fetchCardInfo = async (): Promise<CardHolder | ErrorMessage> => {
  return new Promise(async (resolve, reject) => {
    try {
      let card: CardHolder = {
        holderName: "Mark Henry",
        cardType: "visa",
        cardNumber: "3742 45545 5400 1269",
        goodThrough: "12/20",
        cvvCode: 456,
        //maximumSpending: 5000,
      };
      resolve(card);
    } catch ({ message }) {
      const error: ErrorMessage = {
        message: `Can not fetch Info: ${message}`,
        code: -1,
      };
      reject(error);
    }
  });
};


export const fetchSpendingLimit = async (): Promise<SpendingLimit | ErrorMessage> => {
  return new Promise(async (resolve, reject) => {
    try {
      let social: SpendingLimit = {
        nowSpending: 0,
        limitSpending: 5000,
      };
      resolve(social);
    } catch ({ message }) {
      const error: ErrorMessage = {
        message: `Can not fetch Info: ${message}`,
        code: -1,
      };
      reject(error);
    }
  });
};
