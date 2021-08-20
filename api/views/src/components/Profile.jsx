import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Profile = () => {
  useEffect(async () => {
    axios.defaults.headers.common['token'] = await localStorage.getItem('token');

  }, [])
  const [formData, setFormData] = useState({
    des: "",
    img: "",
    title: ""

  });
  const changeData = (e) => {
    const element = e.target;
    const name = element.name;
    const value = element.value;
    setFormData({
      ...formData,
      [name]: value
    });
    if (e.target.file) {
      formData.img = e.target.file[0]
    }
  }
  const create = (e) => {
    e.preventDefault();
    axios.post('/api/posts/create/', formData).then(res => {
      // if (res.data.success === true){
      console.log(res.data);
      // }
      // if (res.data.error){
      // }
    })
  }
  return (
    <div>
      <form action="" onSubmit={create}>
        <input onChange={(e) => changeData(e)} type="title" name="title" id="title" placeholder="title" />
        <input onChange={(e) => changeData(e)} type="des" name="des" id="des" placeholder="des" />
        <input onChange={(e) => changeData(e)} type="file" name="file" id="img" placeholder="img" />
        <button type="submit">sdd</button>
      </form>
    </div>
  )
}
export default Profile;
