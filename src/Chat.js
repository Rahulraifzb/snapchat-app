import { Avatar } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import StopRoundIcon from '@material-ui/icons/StopRounded'
import ReactTimeago from 'react-timeago'
import { selectCameraImage } from './features/cameraSlice'
import { selectImage } from './features/appSlice'
import { useDispatch } from 'react-redux'
import {db} from './firebase';
import { useHistory } from 'react-router-dom'

function Chat({id,username,timestamp,read,imageUrl,profilePic}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const open = () => {
        if(!read){
            dispatch(selectImage(imageUrl))
            db.collection('posts').doc(id).set({
                read:true
            },{merge:true})
        }
        history.push('/chats/view')
    }
    return (
        <div onClick={open} className="chat">
            <Avatar className="chat__avatar" src={profilePic} />
            <div className="chat__info">
                <h4>{username}</h4>
                <p>
                    {!read && "Tap to view"}{" "} - <ReactTimeago  date={new Date(timestamp?.toDate()).toUTCString()} /></p>
            </div>

            {!read && <StopRoundIcon className="chat__readIcon" />}
        </div>
    )
}

export default Chat
