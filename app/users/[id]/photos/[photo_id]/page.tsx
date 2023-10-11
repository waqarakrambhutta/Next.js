import React from 'react'

interface Props{
    params:{id:number,photo_id:number};
}

const UserPhoto = ({params:{id,photo_id}}:Props) => {
  return (
    <div>photos {id} {photo_id}</div>
  )
}

export default UserPhoto