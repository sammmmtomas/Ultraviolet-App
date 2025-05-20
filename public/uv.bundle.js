class Ultraviolet {
  constructor(config) {
    this.config = config;
    console.log("✅ Ultraviolet ready with config:", config);
  }

  url = {
    encode: (url) => this.config.prefix + encodeURIComponent(url),
    decode: (str) => decodeURIComponent(str.replace(this.config.prefix, "")),
  };
}

// ✅ Assign ทั้ง class และ instance
if (typeof self === 'object') {
  self.Ultraviolet = Ultraviolet;

  // ✅ สร้าง instance ให้พร้อมใช้งาน
  self.__uv = new Ultraviolet({
    ...self.__uv$config,
    window: self,
  });
}
