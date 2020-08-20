import {CertificateCreated, CertificatePublished, CertificateUpdated, 
    CertificateSigned, CertificateSignedByOwner, AssignSignerToCertificate,
    RiwayatCreated, RiwayatUpdated, IjazahDinomorkan} from '../generated/SertifikatHelper/SertifikatHelper'
import {Sertifikat, RiwayatStudi, Signature, Mahasiswa} from '../generated/schema'

export function handleNewCertificate(event: CertificateCreated): void {
    let sertifikat = new Sertifikat(event.params.ID.toString())
    sertifikat.jenis = event.params.jenisSertifikat
    sertifikat.owner = event.params.owner
    sertifikat.ownerNIM = event.params.ownerNim
    sertifikat.signRequired = event.params.signRequired
    sertifikat.signedTimes = event.params.signedTimes
    sertifikat.timeCreated = event.params.timeCreated
    sertifikat.lastUpdated = event.params.timeCreated
    sertifikat.isPublished = false
    sertifikat.isSignedByOwner = false
    const ijazah = '0x696a617a6168'
    sertifikat.isIjazah = (sertifikat.jenis.toHexString().includes(ijazah))? true:false
    sertifikat.save()
}

export function handleCertificateUpdated(event: CertificateUpdated): void {
    let sertifikat = Sertifikat.load(event.params.ID.toString())
    if(sertifikat == null){
        sertifikat = new Sertifikat(event.params.ID.toString())
    }
    let mahasiswa = Mahasiswa.load(sertifikat.ownerNIM.toHexString())
    if(event.params.isUpdateNINAData){
        mahasiswa.isUpdatedNINAData = true
        mahasiswa.save()
    }
    sertifikat.lastUpdated = event.params.timeUpdated
    sertifikat.save()
}

export function handleCertificateSigned(event: CertificateSigned): void {
    let sertifikat = Sertifikat.load(event.params.ID.toString())
    sertifikat.signedTimes = event.params.signedTimes
    let signature = Signature.load(event.params.ID.toHex()+'-'+event.params.signer.toHex())
    signature.timeSigned = event.params.timeSigned
    sertifikat.lastUpdated = event.params.timeSigned
    sertifikat.signatures.push(signature.id)
    sertifikat.save()
    signature.save()
}

export function handleCertificateSignedByOwner(event: CertificateSignedByOwner): void {
    let sertifikat = Sertifikat.load(event.params.ID.toString())
    sertifikat.isSignedByOwner = true
    sertifikat.timeSignedOwner = event.params.timeSigned
    sertifikat.lastUpdated = event.params.timeSigned
    sertifikat.save()
}

export function handleNewSignature(event: AssignSignerToCertificate): void {
    let signature = new Signature(event.params.idCertificate.toHex()+'-'+event.params.asignedSigner.toHex())
    signature.signer = event.params.asignedSigner
    signature.idCertificate = event.params.idCertificate
    signature.role = event.params.role
    signature.timeAssigned = event.params.timeAssigned
    signature.save()
}

export function handleNewRiwayatStudi(event: RiwayatCreated): void {
    let riwayat = new RiwayatStudi(event.params.ID.toString())
    riwayat.ampu = event.params.ampuId.toString()
    riwayat.nilai = event.params.nilai
    riwayat.nim = event.params.nim
    riwayat.timeCreated = event.params.timeCreated
    riwayat.timeUpdated = event.params.timeCreated
    riwayat.save()
}

export function handleRiwayatStudiUpdated(event: RiwayatUpdated): void {
    let riwayat = RiwayatStudi.load(event.params.ID.toString())
    riwayat.nilai = event.params.newNilai
    riwayat.timeUpdated = event.params.timeUpdated
    riwayat.save()
}

export function handleCertificatePublished(event: CertificatePublished): void {
    let sertifikat = Sertifikat.load(event.params.ID.toString())
    sertifikat.isPublished = true
    sertifikat.lastUpdated = event.params.timePublished
    sertifikat.save()
}

export function handleCertificateNomorIjazah(event: IjazahDinomorkan): void {
    let sertifikat = Sertifikat.load(event.params.ID.toString())
    let mahasiswa = Mahasiswa.load(sertifikat.ownerNIM.toHexString())
    mahasiswa.isAssignedNINA = true
    mahasiswa.isUpdatedNINAData = false
    mahasiswa.lastUpdated = event.params.timeUpdated
    mahasiswa.save()
    sertifikat.nomorIjazah = event.params.noIjazah
    sertifikat.lastUpdated = event.params.timeUpdated
    sertifikat.save()
}