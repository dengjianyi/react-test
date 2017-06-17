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
      const level = 12222;
      return Promise.resolve(level);
    });

    listWraper = shallow(<RenderUser />);
  });
  it("render", () => {
    // return renderUser().then(() => {
    //   expect($("#container").text()).toBe("昵称:Bob等级:12");
    // });
    //console.log(listWraper.find('p').simulate('click'),"&&&&&&&&&&&&&")
    listWraper.find('p').simulate('click');//由于这里点后，是异步操作，（类像队列回调操作）数据回来才回调执行
    //console.log(listWraper.find('h2').text(),"我要输出结果111.................");

    setTimeout(function(){
      //但这步东西，上面点操作后，就跑下来马上执行了
      expect(listWraper.find('h2').text()).toBe("昵称:Bob等级:12");
    },10)

  });
});
