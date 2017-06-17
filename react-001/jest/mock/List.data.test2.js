import React, { Component, PropTypes } from 'react';
import { render, shallow, mount } from 'enzyme';
import List from './List';
jest.mock('./listData');
import ListDataCom  from './listData';

describe('Listitem...', () => {
  let listWraper = null;
  beforeAll(() => {

    //原生处理
    ListDataCom.listData = () => {
      return [
        {
          id: 11,
          description: '原生处理出来的'
        }
      ];
    };
    ListDataCom.treedata = () => {
      return [
        {
          id: 12,
          description: '33333'
        }
      ];
    };


    //jest.setMock('./listData', 'listData');
    //jest.setMock('./listData', { treedata });
    //console.log(listCom,"********555555555******");
    let listData = jest.fn();
    console.log("----------------");
    console.log(listData);
    console.log("----------------");
    // console.log(treedata,"********treedata******");
    //官网处理
  //   ListDataCom.mockImplementation(() => {
  //     let obj = new Object;
  //     obj.listCom = () => {
  //       return [
  //         {
  //           id: 14,
  //           description: '33333'
  //         }
  //       ];
  //     };
  //     obj.treedata = () => {
  //       return [
  //         {
  //           id: 14,
  //           description: '33333'
  //         }
  //       ];
  //     };
  //     return obj;
  //   });
  //
    //渲染出来
    listWraper = shallow(<List />);
  });

  it('html....', () => {
    console.log(listWraper.html());
  })

})
