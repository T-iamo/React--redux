import React,{ Component } from "react";
import PropTypes from 'prop-types'
export default class Search extends Component{
    static propTypes = {
        setSearchName : PropTypes.func.isRequired
    }
    search = () => {
        //得到输入的关键字
        const searchName = this.input.value.trim()
        if (searchName){

        }
        //搜索
        this.props.setSearchName(searchName)
        }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">在搜不出来给你鳖孙腿打折</h3>
                <div>
                    <input type="text" placeholder="输入搜索的名称" className="sousuo" ref={input => this.input = input}/>
                    <button onClick={this.search}
                            className="btnwe"
                    >搂它</button>
                </div>
            </section>
        )
    }
}