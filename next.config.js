/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = {
  // setting up environment variables
  env: {
    mongodb_username: "aiden",
    mongodb_password: "mpKZGI6SibJ2JSMy",
    mongodb_clustername: "cluster0",
    mongodb_database: "blog-contact",
  },

  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
};
