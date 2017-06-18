jest.mock("./fetchUserInfo");
jest.mock("./fetchUserLevel");
import fetchUserInfo from "./fetchUserInfo";
import fetchUserLevel from "./fetchUserLevel";
import renderUser from "./renderUser";
import $ from "jquery";

fetchUserInfo.mockImplementation(params => {
  const data = {
    nick:"Bob"
  };
  return Promise.resolve(data);
});

fetchUserLevel.mockImplementation(params => {
  const level = 12;
  return Promise.resolve(level);
});

it("render", () => {
  document.body.innerHTML = '<div id="container"></div>';
  return renderUser().then(() => {
    expect($("#container").text()).toBe("昵称:Bob等级:12");
  });
});
