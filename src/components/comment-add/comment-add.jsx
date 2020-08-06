import React,{ Component } from "react";
import PropTypes from 'prop-types'
export default class CommentAdd extends Component{
    //声明接收
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }
    //状态
    state = {
        username: '',
        content: ''
    }
    handleSubmi = () => {
        //收集数据,并风章程comment对象
        const comment = this.state
        //更新状态
        this.props.addComment(comment)
        //清除输入数据
        this.setState({
            username: '',
            content: ''
        })
    }
    handleNameChange = (e) => {
        const username = e.target.value
        this.setState({username})
    }
    handleContentChange = (e) => {
        const content = e.target.value
        this.setState({content})
    }

    render() {
        //先取数据
        const {username,content} = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text"
                               className="form-control"
                               placeholder="用户名"
                               value={username}
                               onChange={this.handleNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control"
                                  rows="6"
                                  placeholder="评论内容"
                                  value={content}
                                  onChange={this.handleContentChange}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmi}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}