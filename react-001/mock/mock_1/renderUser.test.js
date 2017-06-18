import React, { Component, PropTypes } from 'react';
jest.mock("./fetch");
import $ from "jquery";
import fetch from "./fetch";
import renderUser from "./renderUser";
import { render } from 'enzyme';

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

it("render", () => {
  document.body.innerHTML = '<div id="container"></div>';
  //let listWraper = render(<p id='container'></p>);
  return renderUser().then(() => {
    expect($("#container").text()).toBe("昵称:Bob等级:12");
    //expect(listWraper.find('p').text()).toBe("昵称:Bob等级:12");
  });
});
