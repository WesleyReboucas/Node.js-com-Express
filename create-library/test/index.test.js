import getFile from "../index.js";

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("getFile::", () => {
  it("Need be a function.", () => {
    expect(typeof getFile).toBe("function");
  });
  it("Need return an array with results", async () => {
    const result = await getFile(
      "/home/wesley/Documents/www/Nodejs-with-Express/create-library/test/files/text1.md"
    );
    expect(result).toEqual(arrayResult);
  });
  it("Need return a message: [X] Links nonexistent", async () => {
    const result = await getFile(
      "/home/wesley/Documents/www/Nodejs-with-Express/create-library/test/files/text1_without_links.md"
    );
    expect(result).toBe('[X] Links nonexistent')
  });
});
