import urls from './urls.js'
export default function (req, res, next) {
  let path = req.url
  path = path.toLowerCase()
  path = path.replace(/\/$/, '')

  if (urls[path]) {
    const url = urls[path]
    res.writeHead(url.code, { Location: url.dst })
    res.end()
  } else {
    next()
  }
}
