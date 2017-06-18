import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
jest.mock("./fetchUserInfo");
jest.mock("./fetchUserLevel");
import fetchUserInfo from "./fetchUserInfo";
import fetchUserLevel from "./fetchUserLevel";
import renderUser from "./renderUser";

//二级方法
// fetchUserInfo.aa = () => {
//   const data = {
//     nick:"Bob"
//   };
//   return Promise.resolve(data);
// };

//一级方法
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


describe('test...', () => {
  it("render", () => {
      ReactDOM.render(
        <p id='container'></p>,
        document.body
      );
      return renderUser().then(() => {
        expect(document.getElementById('container').innerHTML).toBe("昵称:Bob等级:12");
      });
  });
});
