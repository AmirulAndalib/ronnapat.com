const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      process: false,
      buffer: false,
    };
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
  async redirects() {
    return [
      // {
      //   source: "/en-us/blog",
      //   destination: "https://blog.ronnapat.com",
      //   permanent: false,
      // },
      {
        source: "/th-th/blog",
        destination: "https://blog.ronnapat.com",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "https://blog.ronnapat.com",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/en-us/contact",
        permanent: false,
      },
      {
        source: "/cookie",
        destination: "/en-us/cookie",
        permanent: false,
      },
      {
        source: "/donate",
        destination: "/en-us/donate",
        permanent: false,
      },
      {
        source: "/d/patreon",
        destination: "https://www.patreon.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/d/buymeacoffee",
        destination: "https://www.buymeacoffee.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/tw-bot",
        destination: "https://github.com/ronnapatp/twitter-bot",
        permanent: false,
      },
      {
        source: "/b/tw-bot",
        destination: "https://blog.ronnapat.com/blog/my-twitter-bot",
        permanent: false,
      },
      {
        source: "/b/my-web",
        destination: "https://blog.ronnapat.com/blog/my-website",
        permanent: false,
      },
      {
        source: "/s/github",
        destination: "https://github.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/s/twitter",
        destination: "https://twitter.com/ronnapatp",
        permanent: false,
      },
      {
        source: "/s/facebook",
        destination: "https://facebook.com/pieronnapatp",
        permanent: false,
      },
      {
        source: "/s/mail",
        destination: "mailto:me@ronnapat.com",
        permanent: false,
      },
      {
        source: "/terms",
        destination: "/en-us/terms",
        permanent: false,
      },
      {
        source: "/privacy",
        destination: "/en-us/privacy",
        permanent: false,
      },
      {
        source: "/bot/antidiscordbot",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=910769096197562387&permissions=8&scope=bot",
        permanent: false,
      },
      {
        source: "/social",
        destination: "/en-us/social",
        permanent: false,
      },
    ];
  },

})
// module.exports = {
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = {
//       fs: false,
//       path: false,
//       process: false,
//       buffer: false,
//     };
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader",
//     });

//     return config;
//   },
//   async redirects() {
//     return [
//       // {
//       //   source: "/en-us/blog",
//       //   destination: "https://blog.ronnapat.com",
//       //   permanent: false,
//       // },
//       {
//         source: "/th-th/blog",
//         destination: "https://blog.ronnapat.com",
//         permanent: false,
//       },
//       {
//         source: "/blog",
//         destination: "https://blog.ronnapat.com",
//         permanent: false,
//       },
//       {
//         source: "/contact",
//         destination: "/en-us/contact",
//         permanent: false,
//       },
//       {
//         source: "/cookie",
//         destination: "/en-us/cookie",
//         permanent: false,
//       },
//       {
//         source: "/donate",
//         destination: "/en-us/donate",
//         permanent: false,
//       },
//       {
//         source: "/d/patreon",
//         destination: "https://www.patreon.com/ronnapatp",
//         permanent: false,
//       },
//       {
//         source: "/d/buymeacoffee",
//         destination: "https://www.buymeacoffee.com/ronnapatp",
//         permanent: false,
//       },
//       {
//         source: "/tw-bot",
//         destination: "https://github.com/ronnapatp/twitter-bot",
//         permanent: false,
//       },
//       {
//         source: "/b/tw-bot",
//         destination: "https://blog.ronnapat.com/blog/my-twitter-bot",
//         permanent: false,
//       },
//       {
//         source: "/b/my-web",
//         destination: "https://blog.ronnapat.com/blog/my-website",
//         permanent: false,
//       },
//       {
//         source: "/s/github",
//         destination: "https://github.com/ronnapatp",
//         permanent: false,
//       },
//       {
//         source: "/s/twitter",
//         destination: "https://twitter.com/ronnapatp",
//         permanent: false,
//       },
//       {
//         source: "/s/facebook",
//         destination: "https://facebook.com/pieronnapatp",
//         permanent: false,
//       },
//       {
//         source: "/s/mail",
//         destination: "mailto:me@ronnapat.com",
//         permanent: false,
//       },
//       {
//         source: "/terms",
//         destination: "/en-us/terms",
//         permanent: false,
//       },
//       {
//         source: "/privacy",
//         destination: "/en-us/privacy",
//         permanent: false,
//       },
//       {
//         source: "/bot/antidiscordbot",
//         destination:
//           "https://discord.com/api/oauth2/authorize?client_id=910769096197562387&permissions=8&scope=bot",
//         permanent: false,
//       },
//       {
//         source: "/social",
//         destination: "/en-us/social",
//         permanent: false,
//       },
//     ];
//   },
// };
