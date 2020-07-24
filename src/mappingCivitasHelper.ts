import { MahasiswaCreated, CivitasCreated } from '../generated/CivitasHelper/CivitasHelper'
import { Civita, Mahasiswa } from '../generated/schema'

export function handleNewMahasiswa(event: MahasiswaCreated): void {
  let mahasiswa = new Mahasiswa(event.params.nim.toHex())
  mahasiswa.name = event.params.fullName
  mahasiswa.prodi = event.params.prodi
  mahasiswa.isLulus = event.params.isLulus
  mahasiswa.timeCreated = event.params.timeCreated
  mahasiswa.save()
}

export function handleNewCivitas(event: CivitasCreated): void {
  let civitas = new Civita(event.params.nip.toHex())
  civitas.name = event.params.fullName
  civitas.timeCreated = event.params.timeCreated
  civitas.save()
}
