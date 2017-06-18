import fetchUserInfo from './fetchUserInfo';
import fetchUserLevel from './fetchUserLevel';

export default function(){
  return Promise.all([
    fetchUserInfo({ uid:123 }),
    fetchUserLevel({ uid:123 })
  ])
  .then(([user, level]) => {
    const text = "昵称:" + user.nick + "等级:" + level;
    document.getElementById('container').innerHTML = text;
  })
  .catch(err => {
    alert(err)
  });
}
