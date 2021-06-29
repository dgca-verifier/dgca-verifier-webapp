import { fromBER } from 'asn1js'
import { Certificate } from 'pkijs'

function base64StringToArrayBuffer (b64str) {
  const byteStr = atob(b64str)
  const bytes = new Uint8Array(byteStr.length)
  for (let i = 0; i < byteStr.length; i++) {
    bytes[i] = byteStr.charCodeAt(i)
  }
  return bytes.buffer
}

const verifySignature = async function (pubkey, payload, signature) {
  const algorithm = {}
  const binaryDer = base64StringToArrayBuffer(pubkey)
  const asn1 = fromBER(binaryDer)
  const certificate = new Certificate({ schema: asn1.result })

  const jsonCert = certificate.subjectPublicKeyInfo.toJSON()
  jsonCert.ext = true

  algorithm.hash = {
    name: 'SHA-256'
  }
  if (jsonCert.kty === 'EC') {
    algorithm.name = 'ECDSA'
    algorithm.namedCurve = jsonCert.crv
  } else if (jsonCert.kty === 'RSA') {
    algorithm.name = 'RSA-PSS'
    algorithm.saltLength = 32
  }
  const verified = await crypto.subtle.importKey('jwk', jsonCert, algorithm, false, ['verify'])
    .then(pk => crypto.subtle.verify(
      algorithm,
      pk,
      signature,
      payload
    )).catch(e => console.log('Failed to verify signature:\n' + e))
  const certificateData = {}
  certificateData.issuer = {
    country: certificate.issuer.typesAndValues[0].value.valueBlock.value,
    org: certificate.issuer.typesAndValues[1].value.valueBlock.value,
    cn: certificate.issuer.typesAndValues[2].value.valueBlock.value
  }
  certificateData.subject = {
    country: certificate.subject.typesAndValues[0].value.valueBlock.value,
    org: certificate.subject.typesAndValues[1].value.valueBlock.value,
    cn: certificate.subject.typesAndValues[2].value.valueBlock.value
  }
  certificateData.notBefore = certificate.notBefore
  certificateData.notAfter = certificate.notAfter

  return {
    verified,
    certificate: certificateData
  }
}

export default verifySignature
