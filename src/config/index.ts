// let config: any
// if (process.env.NODE_ENV === 'dev') {
//   config = {
//     apiUrl: 'http://10.204.42.244:9099',
//     thumb_url: '',
//     cookie_prefix: 'db_'
//   }
// } else if (process.env.NODE_ENV === 'uat') {
//   config = {
//     apiUrl: '',
//     thumb_url: '',
//     cookie_prefix: 'db_'
//   }
// } else if (process.env.NODE_ENV === 'pro') {
//   config = {
//     apiUrl: '',
//     thumb_url: '',
//     cookie_prefix: 'db_'
//   }
// }
const config = {
  dev: {
    apiUrl: 'http://10.204.42.244:9099',
    thumb_url: '',
    cookie_prefix: 'db_'
  },
  uat: {
    apiUrl: '',
    thumb_url: '',
    cookie_prefix: 'db_'
  },
  pro: {
    apiUrl: '',
    thumb_url: '',
    cookie_prefix: 'db_'
  }
}
export default config
