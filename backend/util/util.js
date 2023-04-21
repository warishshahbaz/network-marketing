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
}

module.exports = new Util();
