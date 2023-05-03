class Util {
  getSponcerId() {
    let result = "";
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz";
    let counter = 0;
    while (counter < 2) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      counter += 1;
    }
    return (
      result + Math.random().toString().split(".")[1].substr(0, 3)
    ).toUpperCase();
  }
  getPassword() {
    let result = "";
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz";
    let counter = 0;
    while (counter < 3) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      counter += 1;
    }
    return (
      result + Math.random().toString().split(".")[1].substr(0, 3)
    ).toUpperCase();
  }
  getVarifactionCode() {
    return Math.floor(1000 + Math.random() * 9000);
  }
}

module.exports = new Util();
