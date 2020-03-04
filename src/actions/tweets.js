import {saveLikeToggle, saveTweet} from '../utils/api'
import {showLoading, hideLoading,} from "react-redux-loading";

export const RECIEVE_TWEETS = 'RECIEVE_TWEETS';
export const TOGGLE_TWEETS ='TOGGLE_TWEET';
export const ADD_NEW_TWEET= 'ADD_NEW_TWEET'


export function receiveTweets(tweets) {
    return {
        type : RECIEVE_TWEETS,
        tweets,
    }

}
export function toggleTweets({id, authedUser,hasLiked  }) {
   return {
       type : TOGGLE_TWEETS,
       id,
       authedUser,
       hasLiked,

   }

}

export function addNewTweet(tweet) {
    return {
        type: ADD_NEW_TWEET,
        tweet,
    }



}

export function handleToggleTweet(info){
    return (dispatch) => {
        dispatch(toggleTweets(info));
        return saveLikeToggle(info)
            .catch((e)=> {
                console.warn("Error in handling", e)
                dispatch(toggleTweets(info))
            })
    }


}

export function handleAddTweet(text,replyingTo) {
    return (dispatch, getState)=>{
        const {authedUser} = getState();
        dispatch(showLoading());
        return saveTweet({
            text,
            replyingTo,
            author: authedUser
        }).then((tweet)=>{
            dispatch(addNewTweet(tweet))
        }).then(()=>{
            dispatch(hideLoading())
        })


    }

}