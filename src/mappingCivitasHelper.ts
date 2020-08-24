import { MahasiswaCreated, CivitasCreated, CivitasAccountLinked, 
    CivitasAccountUnlinked, CivitasNIPUpdated, CivitasUpdated,
    MahasiswaAccountLinked, MahasiswaAccountUnlinked,
    MahasiswaNIMUpdated, MahasiswaUpdated, DosenAdded, DosenStatusChanged, MahasiswaLulusUpdated } from '../generated/CivitasHelper/CivitasHelper'
import { Civita, Mahasiswa, Account, Dosen } from '../generated/schema'

export function handleNewMahasiswa(event: MahasiswaCreated): void {
  let mahasiswa = new Mahasiswa(event.params.nim.toHexString())
  mahasiswa.name = event.params.fullName
  mahasiswa.prodi = event.params.prodi
  mahasiswa.isLulus = event.params.isLulus
  mahasiswa.timeCreated = event.params.timeCreated
  mahasiswa.lastUpdated = event.params.timeCreated
  mahasiswa.save()
}

export function handleNewCivitas(event: CivitasCreated): void {
  let civitas = new Civita(event.params.nip.toHexString())
  civitas.name = event.params.fullName
  civitas.timeCreated = event.params.timeCreated
  civitas.lastUpdated = event.params.timeCreated
  civitas.save()
}

export function handleNewDosen(event: DosenAdded): void {
  let dosen = new Dosen(event.params.ID.toString())
  dosen.name = event.params.fullName
  dosen.nip = event.params.nip
  dosen.status = true
  dosen.timeCreated = event.params.timeAdded
  dosen.lastUpdated = event.params.timeAdded
  dosen.save()
}

export function handleDosenStatusChanged(event: DosenStatusChanged): void {
  let dosen = Dosen.load(event.params.ID.toString())
  if (dosen == null){
    dosen = new Dosen(event.params.ID.toString())
  }
  dosen.status = event.params.status
  dosen.lastUpdated = event.params.timeUpdated
  dosen.save()
}

export function handleCivitasLinked(event: CivitasAccountLinked): void {
  let civitas = Civita.load(event.params.nip.toHexString())
  let account = Account.load(event.params.account.toHex())
  if(civitas != null && account != null) {
    civitas.linkedAccount = account.id
    account.linkedCivitas = civitas.id
    civitas.role = account.role
    account.lastUpdated = event.params.timeLinked
    civitas.lastUpdated = event.params.timeLinked
    civitas.save()
    account.save()
  }
}

export function handleMahasiswaLinked(event: MahasiswaAccountLinked): void {
  let mahasiswa = Mahasiswa.load(event.params.nim.toHexString())
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
  let mahasiswa = Mahasiswa.load(event.params.nim.toHexString())
  if (mahasiswa == null) {
    mahasiswa = new Mahasiswa(event.params.nim.toHexString())
  }
 mahasiswa.name = event.params.fullName
 mahasiswa.lastUpdated = event.params.timeUpdated
 mahasiswa.save()
}

export function handleCivitasUpdated(event: CivitasUpdated): void {
  let civitas = Civita.load(event.params.nip.toHexString())
  if (civitas == null) {
    civitas = new Civita(event.params.nip.toHexString())
  }
 civitas.name = event.params.fullName
 civitas.lastUpdated = event.params.timeUpdated
 civitas.save()
}

export function handleCivitasNIPUpdated(event: CivitasNIPUpdated): void {
  let civitas = Civita.load(event.params.oldNIP.toHexString())
  if( civitas != null){
    civitas.id = event.params.newNIP.toHexString()
    civitas.lastUpdated = event.params.timeUpdated
    civitas.save()
  }
}

export function handleMahasiswaNIMUpdated(event: MahasiswaNIMUpdated): void {
  let mahasiswa = Mahasiswa.load(event.params.oldNIM.toHexString())
  if( mahasiswa != null){
    mahasiswa.id = event.params.newNIM.toHexString()
    mahasiswa.lastUpdated = event.params.timeUpdated
    mahasiswa.save()
  }
}

export function handleMahasiswaLulusUpdated(event: MahasiswaLulusUpdated): void {
  let mahasiswa = Mahasiswa.load(event.params.nim.toHexString())
  if( mahasiswa != null){
    mahasiswa.isLulus = event.params.isLulus
    mahasiswa.lastUpdated = event.params.timeUpdated
    mahasiswa.save()
  }
}

