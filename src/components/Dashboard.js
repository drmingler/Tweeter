import React, { Component } from 'react'
import { connect } from "react-redux";
import Tweet from "./Tweet";
class Dashboard extends Component{

    render() {
        console.log(this.props)
        return(
            <div>
                <h3 className={'center'}> Your Timeline</h3>
                <ul className={'dashboard-list'}>
                    {this.props.tweetsIds.map((id)=>(
                        <li key={id}>
                            <Tweet id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        )

    }
}


function mapStateToProps({tweets}){
    return {tweetsIds: Object.keys(tweets)
            .sort((a, b) => (tweets[a].timestamp -tweets[b].timestamp)) }
}
export default connect(mapStateToProps)(Dashboard)