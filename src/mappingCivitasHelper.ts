import { MahasiswaCreated, CivitasCreated } from '../generated/CivitasHelper/CivitasHelper'
import { Civitas, Mahasiswa } from '../generated/schema'

export function handleNewMahasiswa(event: MahasiswaCreated): void {
  let mahasiswa = new Mahasiswa(event.params.nim.toHex())
  mahasiswa.nim = event.params.nim
  mahasiswa.name = event.params.fullName
  mahasiswa.prodi = event.params.prodi
  mahasiswa.isLulus = event.params.isLulus
  mahasiswa.timeCreated = event.params.timeCreated
  mahasiswa.save()
}

export function handleNewCivitas(event: CivitasCreated): void {
  let civitas = new Civitas(event.params.nip.toHex())
  civitas.nip = event.params.nip
  civitas.name = event.params.fullName
  civitas.timeCreated = event.params.timeCreated
  civitas.save()
}
