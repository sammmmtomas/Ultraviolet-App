class Ultraviolet {
  constructor(config) {
    this.config = config;
    console.log("✅ Ultraviolet ready with config:", config);
  }

  config = this.config;
}
if (typeof self === 'object') self.Ultraviolet = Ultraviolet;