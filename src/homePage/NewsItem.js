import React, { Component } from 'react'
import './newsItem.css'
import ItemHandlerButtons from './ItemHandlerButtons'

// export default class NewsItem extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }


export default function NewsItem() {
    return (
        <div id="newsItem">
            <div className="item_header">
                <div className="nickName">
                    <span className="portrait"></span>
                    <span className="nick">小时同学</span>
                </div>
                <div className="handlerIcon"></div>
            </div>
            <span className="topic_tip">#关于宇宙的浪漫句子</span>
            <div className="item_content"></div>
            <div className="itemPics">
                <div className="picItem"></div>
            </div>
            <ItemHandlerButtons></ItemHandlerButtons>
        </div>
    )
}