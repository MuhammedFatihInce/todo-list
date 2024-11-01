import React from 'react'
import { useDispatch } from 'react-redux'
import { TABS, toggleTab } from "../redux/tabSlice";

function Tabs({currentTab}) {
  const dispatch = useDispatch();

  return (
    TABS.map(tab => (
        <button className={tab === currentTab ? 'button selected' : 'button'} onClick={() => dispatch(toggleTab(tab))}>
            {tab}
        </button>
    ))
  )
}

export default Tabs