import { SemesterCreated, KalendarAkademikCreated, ProdiCreated,
     MengajarCreated, MatkulCreated, SemesterUpdated, 
     SemesterNilaiStatusChanged, ProdiUpdated, MatkulUpdated, 
     KalendarAkademikTahunAjarUpdated } from '../generated/AkademikHelper/AkademikHelper'
import { Semester, KalendarAkademik, Prodi, Ampu, MataKuliah } from '../generated/schema'

export function handleNewSemester(event: SemesterCreated) : void {
    let semester = new Semester(event.params.ID.toString())
    semester.timeCreated = event.params.timeCreated
    semester.semesterKe = event.params.semesterKe
    semester.KalendarAkademik = event.params.kalendarAkademik
    semester.kelas = event.params.kelas
    semester.prodi = event.params.prodi
    semester.statusPenilaian = event.params.statusPenilaian
    semester.lastUpdated = event.params.timeCreated
    semester.save()
}

export function handleNewProdi(event: ProdiCreated) : void {
    let prodi = new Prodi(event.params.ID.toString())
    prodi.namaProdi = event.params.namaProdi
    prodi.namaJurusan = event.params.namaJurusan
    prodi.timeCreated = event.params.timeCreated
    prodi.lastUpdated = event.params.timeCreated
    prodi.save()
}

export function handleNewKalendarAkademik(event: KalendarAkademikCreated) : void {
    let kalendarAkademik = new KalendarAkademik(event.params.ID.toString())
    kalendarAkademik.tahunAjar = event.params.tahunAjar
    kalendarAkademik.ganjil = event.params.ganjil
    kalendarAkademik.timeCreated = event.params.timeCreated
    kalendarAkademik.lastUpdated = event.params.timeCreated
    kalendarAkademik.save()
}

export function handleNewMatakuliah(event: MatkulCreated) : void {
    let matakuliah = new MataKuliah(event.params.ID.toString())
    matakuliah.namaMatkul = event.params.namaMatkul
    matakuliah.timeCreated = event.params.timeCreated
    matakuliah.lastUpdated = event.params.timeCreated
    matakuliah.save()
}

export function handleNewAmpu(event: MengajarCreated) : void {
    let ampu = new Ampu(event.params.ID.toString())
    ampu.namaMatkul = event.params.namaMatkul
    ampu.dosen = event.params.idDosen.toString()
    ampu.matkul = event.params.idMatkul.toString()
    ampu.semester = event.params.idSemester.toString()
    let semester = Semester.load(event.params.idSemester.toString())
    ampu.kalendar = semester.KalendarAkademik.toString()
    ampu.kelas = event.params.kelas
    ampu.prodi = event.params.prodi
    ampu.timeCreated = event.params.timeCreated
    ampu.save()
}

export function handleSemesterUpdated(event: SemesterUpdated): void {
    let semester = Semester.load(event.params.ID.toString())
    if(semester == null){
        semester = new Semester(event.params.ID.toString())
    }
    semester.lastUpdated = event.params.timeUpdated
    semester.save()
}

export function handleSemesterNilaiStatusChanged(event: SemesterNilaiStatusChanged): void {
    let semester = Semester.load(event.params.ID.toString())
    if(semester == null){
        semester = new Semester(event.params.ID.toString())
    }
    semester.statusPenilaian = event.params.status
    semester.lastUpdated = event.params.timeChanged
    semester.save()
}

export function handleProdiUpdated(event: ProdiUpdated): void {
    let prodi = Prodi.load(event.params.ID.toString())
    if(prodi == null){
        prodi = new Prodi(event.params.ID.toString())
    }
    prodi.namaJurusan = event.params.namaJurusan
    prodi.namaProdi = event.params.namaProdi
    prodi.lastUpdated = event.params.timeUpdated
    prodi.save()
}

export function handleMatakuliahUpdated(event: MatkulUpdated): void {
    let matakuliah = MataKuliah.load(event.params.ID.toString())
    if(matakuliah == null){
        matakuliah = new MataKuliah(event.params.ID.toString())
    }
    matakuliah.namaMatkul = event.params.namaMatkul
    matakuliah.lastUpdated = event.params.timeUpdated
    matakuliah.save()
}

export function handleKalendarAkademikTahunAjarChanged(event: KalendarAkademikTahunAjarUpdated): void{
    let kalendarAkademik = KalendarAkademik.load(event.params.ID.toString())
    if(kalendarAkademik == null){
        kalendarAkademik = new KalendarAkademik(event.params.ID.toString())
    }
    kalendarAkademik.tahunAjar = event.params.newtahunAjar
    kalendarAkademik.lastUpdated = event.params.timeUpdated
    kalendarAkademik.save()
}