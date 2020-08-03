import { MahasiswaCreated, CivitasCreated, CivitasAccountLinked, 
    CivitasAccountUnlinked, CivitasNIPUpdated, CivitasUpdated,
    MahasiswaAccountLinked, MahasiswaAccountUnlinked,
    MahasiswaNIMUpdated, MahasiswaUpdated } from '../generated/CivitasHelper/CivitasHelper'
import { Civita, Mahasiswa, Account } from '../generated/schema'

export function handleNewMahasiswa(event: MahasiswaCreated): void {
  let mahasiswa = new Mahasiswa(event.params.nim.toString())
  mahasiswa.name = event.params.fullName
  mahasiswa.prodi = event.params.prodi
  mahasiswa.isLulus = event.params.isLulus
  mahasiswa.timeCreated = event.params.timeCreated
  mahasiswa.lastUpdated = event.params.timeCreated
  mahasiswa.save()
}

export function handleNewCivitas(event: CivitasCreated): void {
  let civitas = new Civita(event.params.nip.toString())
  civitas.name = event.params.fullName
  civitas.timeCreated = event.params.timeCreated
  civitas.lastUpdated = event.params.timeCreated
  civitas.save()
}

export function handleCivitasLinked(event: CivitasAccountLinked): void {
  let civitas = Civita.load(event.params.nip.toString())
  let account = Account.load(event.params.account.toHex())
  if(civitas != null && account != null) {
    civitas.linkedAccount = account.id
    account.linkedCivitas = civitas.id
    account.lastUpdated = event.params.timeLinked
    civitas.lastUpdated = event.params.timeLinked
    civitas.save()
    account.save()
  }
}

export function handleMahasiswaLinked(event: MahasiswaAccountLinked): void {
  let mahasiswa = Mahasiswa.load(event.params.nim.toHex())
  let account = Account.load(event.params.account.toHex())
  if(mahasiswa != null && account != null) {
    mahasiswa.linkedAccount = account.id
    account.linkedMahasiswa = mahasiswa.id
    account.lastUpdated = event.params.timeLinked
    mahasiswa.lastUpdated = event.params.timeLinked
    mahasiswa.save()
    account.save()
  }
}

export function handleMahasiswaUnlinked(event: MahasiswaAccountUnlinked): void {
  let account = Account.load(event.params.account.toHex())
  if(account != null && account.linkedMahasiswa != null) {
    let mahasiswa = Mahasiswa.load(account.linkedMahasiswa)
    mahasiswa.unset("linkedAccount")
    account.unset("linkedMahasiswa")
    account.lastUpdated = event.params.timeUnlinked
    mahasiswa.lastUpdated = event.params.timeUnlinked
    mahasiswa.save()
    account.save()
  }
}

export function handleCivitasUnlinked(event: CivitasAccountUnlinked): void {
  let account = Account.load(event.params.account.toHex())
  if(account != null && account.linkedCivitas != null) {
    let civitas = Civita.load(account.linkedCivitas)
    civitas.unset("linkedAccount")
    account.unset("linkedcivitas")
    account.lastUpdated = event.params.timeUnlinked
    civitas.lastUpdated = event.params.timeUnlinked
    civitas.save()
    account.save()
  }
}

export function handleMahasiswaUpdated(event: MahasiswaUpdated): void {
  let mahasiswa = Mahasiswa.load(event.params.nim.toString())
  if (mahasiswa == null) {
    mahasiswa = new Mahasiswa(event.params.nim.toString())
  }
 mahasiswa.name = event.params.fullName
 mahasiswa.lastUpdated = event.params.timeUpdated
 mahasiswa.save()
}

export function handleCivitasUpdated(event: CivitasUpdated): void {
  let civitas = Civita.load(event.params.nip.toString())
  if (civitas == null) {
    civitas = new Civita(event.params.nip.toString())
  }
 civitas.name = event.params.fullName
 civitas.lastUpdated = event.params.timeUpdated
 civitas.save()
}

export function handleCivitasNIPUpdated(event: CivitasNIPUpdated): void {
  let civitas = Civita.load(event.params.oldNIP.toString())
  if( civitas != null){
    civitas.id = event.params.newNIP.toString()
    civitas.lastUpdated = event.params.timeUpdated
    civitas.save()
  }
}

export function handleCahasiswaNIMUpdated(event: MahasiswaNIMUpdated): void {
  let mahasiswa = Civita.load(event.params.oldNIM.toHex())
  if( mahasiswa != null){
    mahasiswa.id = event.params.newNIM.toHex()
    mahasiswa.lastUpdated = event.params.timeUpdated
    mahasiswa.save()
  }
}

