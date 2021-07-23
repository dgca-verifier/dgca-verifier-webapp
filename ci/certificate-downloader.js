const fetch = require('node-fetch')
const fs = require('fs/promises')

const BASE_URL = 'https://get.dgc.gov.it/v1/dgc/signercertificate'
const STATUS_ENDPOINT = 'status'
const UPDATE_ENDPOINT = 'update'

const headers = {
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
  'x-resume-token': '0'
}

const fetchCertificates = async () => {
  console.info('Fetching kid list...')
  const kidList = await fetch(`${BASE_URL}/${STATUS_ENDPOINT}`, { headers })
    .then(response => response.json())
  console.debug(kidList)

  const certificateList = {}

  console.info('Processing kid list...')
  for (const kidId in kidList) {
    const kid = kidList[kidId]

    const response = await fetch(`${BASE_URL}/${UPDATE_ENDPOINT}`, { headers })
    if (response.headers.get('x-kid') !== kid) {
      console.warn(`Kid doesn't match: ${kid}`)
    }

    certificateList[kid] = await response.text()
    headers['x-resume-token'] = response.headers.get('x-resume-token')
    console.info(`Current token: ${headers['x-resume-token']}`)
  }

  const certificateListJson = JSON.stringify(certificateList)

  console.info('Storing certs on ./certificateList.json')
  console.debug(certificateList)
  await fs.writeFile('certificateList.json', certificateListJson)
  console.info('Certs stored successfully')
}

// if __name__ == '__main__'
if (require.main === module) {
  fetchCertificates()
    .then(() => console.log('Certificate download completed'))
    .catch((err) => console.error(err))
}
