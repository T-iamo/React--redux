import React,{ Component } from "react";
import PropTypes from 'prop-types'
import CommentItem from "../comment-item/comment-item";
import './commentList.css'
export default class CommentList extends Component{
    //给组件类指定属性
    static propTypes = {
            comments:PropTypes.array.isRequired,
            deleteComment: PropTypes.func.isRequired
    }
    render() {
        //从属性读东西 先给他取出来再说
        const {comments,deleteComment} = this.props
        //计算出是否显示
        const display = comments.length===0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display,color:'red',marginLeft:'100px'}}
                    className="shanxian"
                >暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {/*拆分出去的内容*/}
                    {/* <li className="list-group-item">
                        <div className="handle">
                            <a href="javascript:;">删除</a>
                        </div>
                        <p className="user"><span>xxx</span><span>说:</span></p>
                        <p className="centence">React不错!</p>
                    </li>
                    <li className="list-group-item">
                        <div className="handle">
                            <a href="javascript:;">删除</a>
                        </div>
                        <p className="user"><span>yyy</span><span>说:</span></p>
                        <p className="centence">React有点难!</p>
                    </li>*/}
                    {
                        comments.map(
                            (c,index) => <CommentItem comment = {c}
                                                      key={index}
                                                      deleteComment={deleteComment}
                                                      index={index}
                            />)
                    }

                </ul>
            </div>
        )
    }
}
