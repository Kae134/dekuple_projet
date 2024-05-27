import React from 'react'
import style from './tabledrag.module.css'
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TableDrag() {
  return (
    <div className={style.part}>
      <div className={style.right}>
        <p className={style.p}>Lorem, ipsum.</p>
      </div>
      <div className={style.right}>
        <MdOutlineModeEdit />
        <RiDeleteBin6Line />
      </div>
    </div>
  )
}
