const API_KEY = process.env.API_KEY

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/test1/:path*',
        destination: "test2/:path*",
        permanent: false
      }
    ]
  },
  async rewrites () {
    return [
      {
        source: '/api/test',
        destination: `https://api호스트주소?api_key=${API_KEY}`
      }
    ]
  }
}
