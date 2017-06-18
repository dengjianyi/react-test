import fetch from './fetch';

export default function(){
  return Promise.all([
    fetch("http://example.com/getUserInfo?uid=123")
      .then(response => response.json())
      .then(json => {
        if(json.code == 0){
          return json.data;
        }else{
          throw new Error(json.message);
        }
      }),
    fetch("http://example.com/getUserLevel?uid=123")
      .then(response => response.json())
      .then(json => {
        if(json.code == 0 && json.data && json.data.level){
          return json.data.level;
        }else{
          throw new Error(json.message);
        }
      })
  ])
  .then(([userInfo, level]) => {
    const text = "昵称:" + userInfo.nick + "等级:" + level;
    document.getElementById('container').innerHTML = text;
  }).catch(err => {
    alert(err)
  });

}
