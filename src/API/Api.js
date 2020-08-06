import React,{ Component } from "react";
import axios from 'axios'
export  default class Api extends Component{
    state = {
        repoName: '',
        repoUrl: ''
    }
    componentDidMount() {
        //使用axios发送异步的ajax请求
        const url = `https://api.github.com/search/repositories?q=re&sort=stars`
        axios.get(url)
            .then(response=>{
                const result = response.data
                //得到数据
                const {name,html_url} = result.items[0]
                //更新状态
                this.setState({
                    repoName : name ,
                    repoUrl : html_url
                })
                console.log(name)
                console.log(html_url)
            })
            .catch(Error =>{
                alert("请求失败"+Error.message)
            })
    }

    render() {
        const {repoName , repoUrl} = this.state
        if (!repoName){
            return <h2>loading...</h2>
        }else {
            return <h2>在连不上给你鳖孙腿打折<a href={repoUrl}>{repoName}</a></h2>
        }
    }
}
