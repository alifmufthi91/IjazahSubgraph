import { AccountCreated, AccountUpdated, AccountNameUpdated, AccountDeleted } from '../generated/AccountManager/AccountManager'
import { Account, Civita } from '../generated/schema'

export function handleNewAccount(event: AccountCreated): void {
  let account = new Account(event.params.owner.toHex())
  account.name = event.params.fullName
  account.verified = event.params.verified
  account.role = event.params.role
  account.nomorInduk = event.params.nomorInduk
  account.timeCreated = event.params.timeCreated
  account.lastUpdated = event.params.timeCreated
  account.isDeleted = false
  account.save()
}

export function handleUpdatedAccount(event: AccountUpdated): void {
  let id = event.params.owner.toHex()
  let account = Account.load(id)
  if (account == null) {
    account = new Account(id)
  }
  if (account.nomorInduk.length > 0){
    let civitas = Civita.load(event.params.nomorInduk.toString())
    if(civitas){
      civitas.role = event.params.role
      civitas.save()
    }
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

export function handleDeletedAccount(event: AccountDeleted): void {
  let id = event.params.owner.toHex()
  let account = Account.load(id)
  if (account == null) {
    account = new Account(id)
  }
  account.isDeleted = true
  account.lastUpdated = event.params.timeDeleted
  account.save()
}
