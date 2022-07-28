/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DB_URL: "mongodb+srv://xterminator:Killua$1234$@testdb.a8dgn.mongodb.net/Users?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
