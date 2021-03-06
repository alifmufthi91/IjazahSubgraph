// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccountManagerUpdated extends ethereum.Event {
  get params(): AccountManagerUpdated__Params {
    return new AccountManagerUpdated__Params(this);
  }
}

export class AccountManagerUpdated__Params {
  _event: AccountManagerUpdated;

  constructor(event: AccountManagerUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class KalendarAkademikCreated extends ethereum.Event {
  get params(): KalendarAkademikCreated__Params {
    return new KalendarAkademikCreated__Params(this);
  }
}

export class KalendarAkademikCreated__Params {
  _event: KalendarAkademikCreated;

  constructor(event: KalendarAkademikCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tahunAjar(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get ganjil(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get timeCreated(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class KalendarAkademikTahunAjarUpdated extends ethereum.Event {
  get params(): KalendarAkademikTahunAjarUpdated__Params {
    return new KalendarAkademikTahunAjarUpdated__Params(this);
  }
}

export class KalendarAkademikTahunAjarUpdated__Params {
  _event: KalendarAkademikTahunAjarUpdated;

  constructor(event: KalendarAkademikTahunAjarUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newtahunAjar(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get oldtahunAjar(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class MatkulCreated extends ethereum.Event {
  get params(): MatkulCreated__Params {
    return new MatkulCreated__Params(this);
  }
}

export class MatkulCreated__Params {
  _event: MatkulCreated;

  constructor(event: MatkulCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get namaMatkul(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get timeCreated(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MatkulUpdated extends ethereum.Event {
  get params(): MatkulUpdated__Params {
    return new MatkulUpdated__Params(this);
  }
}

export class MatkulUpdated__Params {
  _event: MatkulUpdated;

  constructor(event: MatkulUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get namaMatkul(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get newIpfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get oldIpfsHash(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class MengajarCreated extends ethereum.Event {
  get params(): MengajarCreated__Params {
    return new MengajarCreated__Params(this);
  }
}

export class MengajarCreated__Params {
  _event: MengajarCreated;

  constructor(event: MengajarCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get idDosen(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get idMatkul(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get namaMatkul(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get idSemester(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get prodi(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get kelas(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }

  get timeCreated(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class ProdiCreated extends ethereum.Event {
  get params(): ProdiCreated__Params {
    return new ProdiCreated__Params(this);
  }
}

export class ProdiCreated__Params {
  _event: ProdiCreated;

  constructor(event: ProdiCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get namaProdi(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get namaJurusan(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get timeCreated(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ProdiUpdated extends ethereum.Event {
  get params(): ProdiUpdated__Params {
    return new ProdiUpdated__Params(this);
  }
}

export class ProdiUpdated__Params {
  _event: ProdiUpdated;

  constructor(event: ProdiUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get namaProdi(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get namaJurusan(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get newIpfsHash(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get oldIpfsHash(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class SemesterCreated extends ethereum.Event {
  get params(): SemesterCreated__Params {
    return new SemesterCreated__Params(this);
  }
}

export class SemesterCreated__Params {
  _event: SemesterCreated;

  constructor(event: SemesterCreated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get semesterKe(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get prodi(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get kelas(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get kalendarAkademik(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get statusPenilaian(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get timeCreated(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class SemesterNilaiStatusChanged extends ethereum.Event {
  get params(): SemesterNilaiStatusChanged__Params {
    return new SemesterNilaiStatusChanged__Params(this);
  }
}

export class SemesterNilaiStatusChanged__Params {
  _event: SemesterNilaiStatusChanged;

  constructor(event: SemesterNilaiStatusChanged) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get status(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get timeChanged(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SemesterUpdated extends ethereum.Event {
  get params(): SemesterUpdated__Params {
    return new SemesterUpdated__Params(this);
  }
}

export class SemesterUpdated__Params {
  _event: SemesterUpdated;

  constructor(event: SemesterUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newIpfsHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get oldIpfsHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get timeUpdated(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class AkademikHelper__getAmpuResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class AkademikHelper__getKalendarAkademikResult {
  value0: Bytes;
  value1: boolean;

  constructor(value0: Bytes, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }
}

export class AkademikHelper__getMatkulResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBytes(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class AkademikHelper__getProgramResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBytes(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class AkademikHelper__getSemesterResult {
  value0: i32;
  value1: Bytes;
  value2: BigInt;
  value3: i32;

  constructor(value0: i32, value1: Bytes, value2: BigInt, value3: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    return map;
  }
}

export class AkademikHelper extends ethereum.SmartContract {
  static bind(address: Address): AkademikHelper {
    return new AkademikHelper("AkademikHelper", address);
  }

  activeKalendarAkademik(): BigInt {
    let result = super.call(
      "activeKalendarAkademik",
      "activeKalendarAkademik():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_activeKalendarAkademik(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "activeKalendarAkademik",
      "activeKalendarAkademik():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAmpu(id: BigInt): AkademikHelper__getAmpuResult {
    let result = super.call(
      "getAmpu",
      "getAmpu(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new AkademikHelper__getAmpuResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getAmpu(id: BigInt): ethereum.CallResult<AkademikHelper__getAmpuResult> {
    let result = super.tryCall(
      "getAmpu",
      "getAmpu(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AkademikHelper__getAmpuResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getKalendarAkademik(id: BigInt): AkademikHelper__getKalendarAkademikResult {
    let result = super.call(
      "getKalendarAkademik",
      "getKalendarAkademik(uint256):(bytes9,bool)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new AkademikHelper__getKalendarAkademikResult(
      result[0].toBytes(),
      result[1].toBoolean()
    );
  }

  try_getKalendarAkademik(
    id: BigInt
  ): ethereum.CallResult<AkademikHelper__getKalendarAkademikResult> {
    let result = super.tryCall(
      "getKalendarAkademik",
      "getKalendarAkademik(uint256):(bytes9,bool)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AkademikHelper__getKalendarAkademikResult(
        value[0].toBytes(),
        value[1].toBoolean()
      )
    );
  }

  getMatkul(id: BigInt): AkademikHelper__getMatkulResult {
    let result = super.call("getMatkul", "getMatkul(uint256):(bytes,bytes)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return new AkademikHelper__getMatkulResult(
      result[0].toBytes(),
      result[1].toBytes()
    );
  }

  try_getMatkul(
    id: BigInt
  ): ethereum.CallResult<AkademikHelper__getMatkulResult> {
    let result = super.tryCall(
      "getMatkul",
      "getMatkul(uint256):(bytes,bytes)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AkademikHelper__getMatkulResult(
        value[0].toBytes(),
        value[1].toBytes()
      )
    );
  }

  getProgram(id: BigInt): AkademikHelper__getProgramResult {
    let result = super.call("getProgram", "getProgram(uint256):(bytes,bytes)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return new AkademikHelper__getProgramResult(
      result[0].toBytes(),
      result[1].toBytes()
    );
  }

  try_getProgram(
    id: BigInt
  ): ethereum.CallResult<AkademikHelper__getProgramResult> {
    let result = super.tryCall(
      "getProgram",
      "getProgram(uint256):(bytes,bytes)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AkademikHelper__getProgramResult(
        value[0].toBytes(),
        value[1].toBytes()
      )
    );
  }

  getSemester(id: BigInt): AkademikHelper__getSemesterResult {
    let result = super.call(
      "getSemester",
      "getSemester(uint256):(uint8,bytes,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new AkademikHelper__getSemesterResult(
      result[0].toI32(),
      result[1].toBytes(),
      result[2].toBigInt(),
      result[3].toI32()
    );
  }

  try_getSemester(
    id: BigInt
  ): ethereum.CallResult<AkademikHelper__getSemesterResult> {
    let result = super.tryCall(
      "getSemester",
      "getSemester(uint256):(uint8,bytes,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AkademikHelper__getSemesterResult(
        value[0].toI32(),
        value[1].toBytes(),
        value[2].toBigInt(),
        value[3].toI32()
      )
    );
  }

  isDosenPengampu(idAmpu: BigInt, idDosen: BigInt): boolean {
    let result = super.call(
      "isDosenPengampu",
      "isDosenPengampu(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(idAmpu),
        ethereum.Value.fromUnsignedBigInt(idDosen)
      ]
    );

    return result[0].toBoolean();
  }

  try_isDosenPengampu(
    idAmpu: BigInt,
    idDosen: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isDosenPengampu",
      "isDosenPengampu(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(idAmpu),
        ethereum.Value.fromUnsignedBigInt(idDosen)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isKalendarAkademikExist(_tahunAjar: Bytes, _ganjil: boolean): boolean {
    let result = super.call(
      "isKalendarAkademikExist",
      "isKalendarAkademikExist(bytes9,bool):(bool)",
      [
        ethereum.Value.fromFixedBytes(_tahunAjar),
        ethereum.Value.fromBoolean(_ganjil)
      ]
    );

    return result[0].toBoolean();
  }

  try_isKalendarAkademikExist(
    _tahunAjar: Bytes,
    _ganjil: boolean
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isKalendarAkademikExist",
      "isKalendarAkademikExist(bytes9,bool):(bool)",
      [
        ethereum.Value.fromFixedBytes(_tahunAjar),
        ethereum.Value.fromBoolean(_ganjil)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isStatusSemesterOpen(id: BigInt): boolean {
    let result = super.call(
      "isStatusSemesterOpen",
      "isStatusSemesterOpen(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toBoolean();
  }

  try_isStatusSemesterOpen(id: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isStatusSemesterOpen",
      "isStatusSemesterOpen(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get accountManagerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateKalendarAkademikCall extends ethereum.Call {
  get inputs(): CreateKalendarAkademikCall__Inputs {
    return new CreateKalendarAkademikCall__Inputs(this);
  }

  get outputs(): CreateKalendarAkademikCall__Outputs {
    return new CreateKalendarAkademikCall__Outputs(this);
  }
}

export class CreateKalendarAkademikCall__Inputs {
  _call: CreateKalendarAkademikCall;

  constructor(call: CreateKalendarAkademikCall) {
    this._call = call;
  }

  get _tahunAjar(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _ganjil(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class CreateKalendarAkademikCall__Outputs {
  _call: CreateKalendarAkademikCall;

  constructor(call: CreateKalendarAkademikCall) {
    this._call = call;
  }
}

export class CreateMatkulCall extends ethereum.Call {
  get inputs(): CreateMatkulCall__Inputs {
    return new CreateMatkulCall__Inputs(this);
  }

  get outputs(): CreateMatkulCall__Outputs {
    return new CreateMatkulCall__Outputs(this);
  }
}

export class CreateMatkulCall__Inputs {
  _call: CreateMatkulCall;

  constructor(call: CreateMatkulCall) {
    this._call = call;
  }

  get _namaMatkul(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CreateMatkulCall__Outputs {
  _call: CreateMatkulCall;

  constructor(call: CreateMatkulCall) {
    this._call = call;
  }
}

export class CreateProdiCall extends ethereum.Call {
  get inputs(): CreateProdiCall__Inputs {
    return new CreateProdiCall__Inputs(this);
  }

  get outputs(): CreateProdiCall__Outputs {
    return new CreateProdiCall__Outputs(this);
  }
}

export class CreateProdiCall__Inputs {
  _call: CreateProdiCall;

  constructor(call: CreateProdiCall) {
    this._call = call;
  }

  get _namaProdi(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _namaJurusan(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateProdiCall__Outputs {
  _call: CreateProdiCall;

  constructor(call: CreateProdiCall) {
    this._call = call;
  }
}

export class CreateSemesterCall extends ethereum.Call {
  get inputs(): CreateSemesterCall__Inputs {
    return new CreateSemesterCall__Inputs(this);
  }

  get outputs(): CreateSemesterCall__Outputs {
    return new CreateSemesterCall__Outputs(this);
  }
}

export class CreateSemesterCall__Inputs {
  _call: CreateSemesterCall;

  constructor(call: CreateSemesterCall) {
    this._call = call;
  }

  get _semesterKe(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _ipfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _listIdDosen(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _listMatkul(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _listSKS(): Array<i32> {
    return this._call.inputValues[4].value.toI32Array();
  }

  get _prodi(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get _kelas(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class CreateSemesterCall__Outputs {
  _call: CreateSemesterCall;

  constructor(call: CreateSemesterCall) {
    this._call = call;
  }
}

export class SetKalendarActiveCall extends ethereum.Call {
  get inputs(): SetKalendarActiveCall__Inputs {
    return new SetKalendarActiveCall__Inputs(this);
  }

  get outputs(): SetKalendarActiveCall__Outputs {
    return new SetKalendarActiveCall__Outputs(this);
  }
}

export class SetKalendarActiveCall__Inputs {
  _call: SetKalendarActiveCall;

  constructor(call: SetKalendarActiveCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetKalendarActiveCall__Outputs {
  _call: SetKalendarActiveCall;

  constructor(call: SetKalendarActiveCall) {
    this._call = call;
  }
}

export class UbahStatusNilaiSemesterCall extends ethereum.Call {
  get inputs(): UbahStatusNilaiSemesterCall__Inputs {
    return new UbahStatusNilaiSemesterCall__Inputs(this);
  }

  get outputs(): UbahStatusNilaiSemesterCall__Outputs {
    return new UbahStatusNilaiSemesterCall__Outputs(this);
  }
}

export class UbahStatusNilaiSemesterCall__Inputs {
  _call: UbahStatusNilaiSemesterCall;

  constructor(call: UbahStatusNilaiSemesterCall) {
    this._call = call;
  }

  get _semesterId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _status(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class UbahStatusNilaiSemesterCall__Outputs {
  _call: UbahStatusNilaiSemesterCall;

  constructor(call: UbahStatusNilaiSemesterCall) {
    this._call = call;
  }
}

export class UpdateAccountManagerCall extends ethereum.Call {
  get inputs(): UpdateAccountManagerCall__Inputs {
    return new UpdateAccountManagerCall__Inputs(this);
  }

  get outputs(): UpdateAccountManagerCall__Outputs {
    return new UpdateAccountManagerCall__Outputs(this);
  }
}

export class UpdateAccountManagerCall__Inputs {
  _call: UpdateAccountManagerCall;

  constructor(call: UpdateAccountManagerCall) {
    this._call = call;
  }

  get newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateAccountManagerCall__Outputs {
  _call: UpdateAccountManagerCall;

  constructor(call: UpdateAccountManagerCall) {
    this._call = call;
  }
}

export class UpdateMatkulDataCall extends ethereum.Call {
  get inputs(): UpdateMatkulDataCall__Inputs {
    return new UpdateMatkulDataCall__Inputs(this);
  }

  get outputs(): UpdateMatkulDataCall__Outputs {
    return new UpdateMatkulDataCall__Outputs(this);
  }
}

export class UpdateMatkulDataCall__Inputs {
  _call: UpdateMatkulDataCall;

  constructor(call: UpdateMatkulDataCall) {
    this._call = call;
  }

  get _matkulId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newIpfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _namaMatkul(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UpdateMatkulDataCall__Outputs {
  _call: UpdateMatkulDataCall;

  constructor(call: UpdateMatkulDataCall) {
    this._call = call;
  }
}

export class UpdateProdiDataCall extends ethereum.Call {
  get inputs(): UpdateProdiDataCall__Inputs {
    return new UpdateProdiDataCall__Inputs(this);
  }

  get outputs(): UpdateProdiDataCall__Outputs {
    return new UpdateProdiDataCall__Outputs(this);
  }
}

export class UpdateProdiDataCall__Inputs {
  _call: UpdateProdiDataCall;

  constructor(call: UpdateProdiDataCall) {
    this._call = call;
  }

  get _prodiId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newIpfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _namaProdi(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _namaJurusan(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class UpdateProdiDataCall__Outputs {
  _call: UpdateProdiDataCall;

  constructor(call: UpdateProdiDataCall) {
    this._call = call;
  }
}

export class UpdateSemesterDataCall extends ethereum.Call {
  get inputs(): UpdateSemesterDataCall__Inputs {
    return new UpdateSemesterDataCall__Inputs(this);
  }

  get outputs(): UpdateSemesterDataCall__Outputs {
    return new UpdateSemesterDataCall__Outputs(this);
  }
}

export class UpdateSemesterDataCall__Inputs {
  _call: UpdateSemesterDataCall;

  constructor(call: UpdateSemesterDataCall) {
    this._call = call;
  }

  get _semesterId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newIpfsHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpdateSemesterDataCall__Outputs {
  _call: UpdateSemesterDataCall;

  constructor(call: UpdateSemesterDataCall) {
    this._call = call;
  }
}

export class UpdateTahunAjarKalendarCall extends ethereum.Call {
  get inputs(): UpdateTahunAjarKalendarCall__Inputs {
    return new UpdateTahunAjarKalendarCall__Inputs(this);
  }

  get outputs(): UpdateTahunAjarKalendarCall__Outputs {
    return new UpdateTahunAjarKalendarCall__Outputs(this);
  }
}

export class UpdateTahunAjarKalendarCall__Inputs {
  _call: UpdateTahunAjarKalendarCall;

  constructor(call: UpdateTahunAjarKalendarCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tahunAjar(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpdateTahunAjarKalendarCall__Outputs {
  _call: UpdateTahunAjarKalendarCall;

  constructor(call: UpdateTahunAjarKalendarCall) {
    this._call = call;
  }
}
