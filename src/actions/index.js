export const USER_SELECTED = "USER_SELECTED"
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED"
export const WITHDRAW_FUNDS = "WITHDRAW_FUNDS"

export function selectUser(userId) {
  return {
    type: USER_SELECTED,
    payload: userId
  }
}

export function selectAccount(accounts) {
  return {
    type: ACCOUNT_SELECTED,
    payload: accounts
  }
}

export function withdrawFunds(amount) {
  return {
    type: WITHDRAW_FUNDS,
    //need to change the amount to an integer value
    payload: parseInt(amount, 10)
  }
}
