module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.cache = false; // Desabilitar cache no lado do cliente
    }

    return config;
  },
};
