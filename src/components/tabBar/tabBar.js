import React, {useState} from 'react'
import './tabBar.scss'

export default function TabBar(props) {
    const [activeIndex,setActiveIndex] = useState(0)

  console.log('props',props)
    // let activeIndex = 0
    const changeTab=(i)=>{
        console.log('i', i)
        setActiveIndex(i)
    }
    return (
        <div>
            <div className="tabBar">
             {props.tabList.map((item, i)=><span className={activeIndex == i ? 'active' : '' } key={item.name} onClick={()=>changeTab(i)}>{item.name}</span>)}
            </div>
            {React.Children.map(props.children,item =><div>{item}</div>)}
        </div>
        
    )
}