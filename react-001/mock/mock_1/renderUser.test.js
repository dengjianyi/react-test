import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
jest.mock("./fetch");
import fetch from "./fetch";
import renderUser from "./renderUser";

fetch.mockImplementation((url, params) => {
  let data;
  if(/getUserInfo/.test(url)){
    data = {
      nick:"Bob"
    };
  }else if(/getUserLevel/.test(url)){
    data = {
      level:12
    };
  }

  return new Promise((resolve, reject) => {
    resolve({
      json:() => {
        return new Promise((_resolve, _reject) => {
          _resolve({
            code:0,
            data:data
          });
        });
      }
    });
  });
});

describe('Listitem...', () => {
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
