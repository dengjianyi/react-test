import fetchUserInfo from './fetchUserInfo';
import fetchUserLevel from './fetchUserLevel';
import $ from "jquery";
export default function(){
  return Promise.all([
    fetchUserInfo({ uid:123 }),
    fetchUserLevel({ uid:123 })
  ])
  .then(([user, level]) => {
    const text = "昵称:" + user.nick + "等级:" + level;
    $("#container").text(text);
  })
  .catch(err => {
    alert(err)
  });
}
