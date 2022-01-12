module.exports = {
    async redirects() {
        return [
          {
            source: '/en-us/blog',
            destination: 'https://blog.ronnapat.com',
            permanent: false,
          },
          {
            source: '/th-th/blog',
            destination: 'https://blog.ronnapat.com',
            permanent: false,
          },
          {
            source: '/blog',
            destination: 'https://blog.ronnapat.com',
            permanent: false,
          },
          {
            source: '/contact',
            destination: '/en-us/contact',
            permanent: false,
          },
          {
            source: '/s/ksejewi',
            destination: 'https://blog.ronnapat.com',
            permanent: false,
          },
          {
            source: '/subscribe',
            destination: '/en-us#subscribe',
            permanent: false,
          },
        ]
      },
}