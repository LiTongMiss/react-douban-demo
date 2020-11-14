import React, { Component } from 'react'
import './myCenter.scss'
export default class RecordCard extends Component {
    render() {
        return (
            <div className="recordCard">
                <div className="recordTip">
                    <span>影视*想看</span>
                    <span>></span>
                </div>
                <div className="recordNum">3</div>
                <div className="recordImages">
                    {/* <div className="record_img"> */}
                        <img className="record_img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3115213706,1401162212&fm=26&gp=0.jpg" alt=""/>
                    {/* </div> */}
                    <img className="record_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595417145485&di=ad81994aa31374c757aaba3fd2a4f4b2&imgtype=0&src=http%3A%2F%2Fimage14.m1905.cn%2Fuploadfile%2F2015%2F0402%2F20150402093928157492.jpg"/>
                    <img className="record_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595417299370&di=369a8510e44c3f8aa8a0fbb2402d39a9&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180913%2F5e691d3c34df4def83452886f5884f70.jpeg" alt=""/>
                </div>
                <div className="enableRecord">3部可播放</div>
                <div className="empty"></div>
            </div>
        )
    }
}
