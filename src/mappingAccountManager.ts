import { AccountCreated, AccountUpdated, AccountNameUpdated } from '../generated/AccountManager/AccountManager'
import { Account } from '../generated/schema'

export function handleNewAccount(event: AccountCreated): void {
  let account = new Account(event.params.owner.toHex())
  account.owner = event.params.owner
  account.name = event.params.fullName
  account.verified = event.params.verified
  account.role = event.params.role
  account.nomorInduk = event.params.nomorInduk
  account.timeCreated = event.params.timeCreated
  account.save()
}

export function handleUpdatedAccount(event: AccountUpdated): void {
  let id = event.params.owner.toHex()
  let account = Account.load(id)
  if (account == null) {
    account = new Account(id)
  }
  account.name = event.params.fullName
  account.verified = event.params.verified
  account.role = event.params.role
  account.nomorInduk = event.params.nomorInduk
  account.lastUpdated = event.params.timeUpdated
  account.save()
}

export function handleUpdatedNameAccount(event: AccountNameUpdated): void {
  let id = event.params.owner.toHex()
  let account = Account.load(id)
  if (account == null) {
    account = new Account(id)
  }
  account.name = event.params.newName
  account.lastUpdated = event.params.timeUpdated
  account.save()
}
