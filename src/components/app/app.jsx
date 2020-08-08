import React,{ Component } from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

import Api from "../../API/Api";
import Apps from "../../Sou/app";
import './app.css'

export default class App extends Component{
    //初始化状态
    constructor(props) {
        super(props);
        this.state = {
            comments:[
                {username: '张无忌', content: 'React挺好的!'},
                {username: '杨过', content: 'React太难了!'}
            ]
        }
    }
    //添加评论
    addComment = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        //更新状态
        this.setState({comments})
    }
    //删除指定评论
    deleteComment = (index) => {
        const {comments} = this.state
        comments.splice(index,1)
        //更新状态
        this.setState({comments})
    }
    render() {
        //可以事先定义一下
        const {comments} = this.state
        return (
                <div className="solo">
                    {<Apps />}
                    <header className="site-header jumbotron">
                        <div className="containers">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1 style={{textAlign:'center'}}>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <CommentAdd
                            addComment = {this.addComment}
                        />
                        <CommentList
                            comments = {comments}
                            deleteComment={this.deleteComment}
                        />
                        {/*下面是拆分部分*/}
                        {/*将这两个部分拆分出去
                            <div className="col-md-4">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label>用户名</label>
                                    <input type="text" className="form-control" placeholder="用户名" />
                                </div>
                                <div className="form-group">
                                    <label>评论内容</label>
                                    <textarea className="form-control" rows="6" placeholder="评论内容"></textarea>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="button" className="btn btn-default pull-right">提交</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8">
                            <h3 className="reply">评论回复：</h3>
                            <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                            <ul className="list-group">
                                <li className="list-group-item">
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
                                </li>
                            </ul>
                        </div>
                        */}
                    </div>

                    {<Api />}


                </div>
        )
    }
}