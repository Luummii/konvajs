import url from 'url'

const env = process.env.NODE_ENV === 'production'
const params = env ? url.parse(process.env.DATABASE_URL) : ''
const auth = env ? params.auth.split(':') : ''

export default {
  db: {
    client: 'pg',
    host: env ? params.hostname : 'ec2-79-125-2-69.eu-west-1.compute.amazonaws.com',
    database: env ? params.pathname.split('/')[1] : 'd6l7l9bd4ipqtc',
    user: env ? auth[0] : 'ybcbnnyfruxyvn',
    password: env ? auth[1] : '0386671d135b1a49ef5019e4761873a85790f45fe2ebbb8a512937153df19369', 
    port: env ? params.port : 5432
  }
}
