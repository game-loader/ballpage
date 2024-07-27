/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.ltzf.cn",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "pic.superbed.cc",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s.lconai.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "filesystem.site",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "pic.imgdb.cn",
        port: "",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: false,
};
