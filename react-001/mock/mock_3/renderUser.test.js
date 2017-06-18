import React, { Component, PropTypes } from 'react';
import { render, shallow, mount } from 'enzyme';
jest.mock("./fetchUserInfo");
jest.mock("./fetchUserLevel");
import fetchUserInfo from "./fetchUserInfo";
import fetchUserLevel from "./fetchUserLevel";
import RenderUser from "./renderUser";

describe('Listitem...', () => {

  let listWraper = null;
  beforeAll(() => {

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

    listWraper = shallow(<RenderUser />);
  });


  it("render", () => {
    listWraper.find('p').simulate('click');
    setTimeout(function(){
      expect(listWraper.find('h2').text()).toBe("昵称:Bob等级:102");
    },1000)
  });

});
