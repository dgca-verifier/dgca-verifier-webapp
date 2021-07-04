import pako from 'pako'
import base45 from 'base45'
import { decode as decodeCBOR, encode as encodeCBOR } from 'cborg'
import verifySignature from '@/helpers/verification-crypto'

class GreenPassData {
  constructor (mapData) {
    this._rawData = mapData
    this._rawContent = mapData.get(-260).get(1)
  }

  get nation () {
    return this._rawData.get(1)
  }

  get version () {
    return this._rawContent.get('ver')
  }

  get dateOfBirth () {
    return this._rawContent.get('dob')
  }

  get nominative () {
    return Object.fromEntries(this._rawContent.get('nam'))
  }

  get vaccines () {
    return this._rawContent.get('v')?.map(Object.fromEntries)[0]
  }

  get tests () {
    return this._rawContent.get('t')?.map(Object.fromEntries)[0]
  }

  get recover () {
    return this._rawContent.get('r')?.map(Object.fromEntries)[0]
  }
}

class GreenPassCertificate {
  constructor (qr) {
    this._qr = qr

    // convert base45 cert to binary Uint8Array
    const decoded = base45.decode(qr.substring(4))
    this.certificate = pako.inflate(decoded)
    const cbor = decodeCBOR(this.certificate, {
      tags: { 18: (cbor) => cbor },
      useMaps: true
    })

    this.cbor = {
      protectedHeader: cbor[0],
      unprotectedHeader: cbor[1],
      content: cbor[2],
      signature: cbor[3]
    }

    const kidU8 = decodeCBOR(this.cbor.protectedHeader, { useMaps: true }).get(4) ?? this.cbor.unprotectedHeader.get(4)
    this.kid = Buffer.from(kidU8).toString('base64')
  }

  toObject () {
    const data = decodeCBOR(this.cbor.content, {
      tags: { 0: (cbor) => cbor },
      useMaps: true
    })
    return new GreenPassData(data)
  }

  async verify () {
    const validationData = encodeCBOR(['Signature1', this.cbor.protectedHeader, new Uint8Array(), this.cbor.content])
    let certificate = null
    // TODO save in local storage
    await fetch('../certificate_list.json')
      .then(response => response.json())
      .then(data => { certificate = data[this.kid] })

    if (!certificate) {
      // TODO: create a separate class that extends error
      throw Error('Issuer not found')
    }

    return verifySignature(certificate, validationData, this.cbor.signature)
  }
}

export { GreenPassCertificate, GreenPassData }
