module.exports = {
    apps: [{
      name: "simple-backend-api",
      script: "./index.js",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 80
      }
    }]
  };
  