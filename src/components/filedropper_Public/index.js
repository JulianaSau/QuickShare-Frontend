import React, {useState,useContext} from 'react';
import {useDropzone} from 'react-dropzone';
import {CircleProgress} from 'react-gradient-progress'
import Usersvg from '../static/user.svg'
import Avatar from '../avatar/index'
import AvatarSelector from '../avatarSelector/index'
import Lock from '../static/lock.svg'
import Button from '../../modules/button/index';
import ClipLoader from "react-spinners/BarLoader";
import { Progress } from 'react-sweet-progress';
import { Checkbox } from 'pretty-checkbox-react';
import 'pretty-checkbox'
import "react-sweet-progress/lib/style.css";
import "./style.css";
import {motion} from "framer-motion"
import { PublicMainContext } from '../../context/Maincontext';


function Filedropper(props) {
    const {fileCallback,wait,connectionEstablished,setBtnWait,load,receiver,confirmSend,sendConfirm,isloading,maxLoad,users,position,setPeers,delPeers,checkReset,checkCallback,checked,setChecked} = useContext(PublicMainContext)
    // let array = new Set()
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
        // Dropzone options and events
        noClick: true,
        noKeyboard: true,
        disabled: wait,
        onDrop: (acceptedFiles) => {
            acceptedFiles.map((file) => fileCallback(file))
        }
    });

    const handleChange = React.useCallback((e) => {
        setChecked(prev => !prev);
      }, []);

   const handleUsers = (name)=>{
        setPeers(name)
    }

    const removeUsers = (name)=>{
        delPeers(name)
    }

    return (
        <motion.div className="container" initial = {{x : -1000 , opacity : 0}} animate = {{x : 0 , opacity : 1}} transition = {{ duration : 0.5}}>
            <div {...getRootProps({className: 'dropzone public-dropper'})}>
                 <>
                        {!connectionEstablished?
                            <div className="peer-avatar align-center">
                                <div className="flex-col-center">
                                    <h2>There is no one in the room!</h2>
                                    <p>Once you have a peer connection, you will be able to share files</p>
                                </div>
                            </div>:
                            //add avatar module here
                            <>
                                <Checkbox className="pretty p-switch p-fill" state={checked} onChange={handleChange}>
                                <label>Select All</label>
                                </Checkbox>
                            <div className="avatar-wrapper"> 
                            {users.map((item,index) => item.name!=position?<AvatarSelector key={item.id} checkCallback={checkCallback} check={checked} checkReset={checkReset} peersAddCallback={handleUsers} peersRemoveCallback={removeUsers} nameID={item.id}  index={item.name}/>:null)}
                            </div>
                            </>
                            } 
                            <div className="privacy-cont">
                                <img src={Lock} />
                                <p>Private Room</p>
                            </div>
                            {
                            confirmSend?
                                <div className="file-container">
                                    <div className="input-cont">
                                    <p>Do you want to send ?</p>
                                    <div className="confirm-inputs">
                                    <Button className="button-secondary focusBtn" type="Button" onClick={()=>sendConfirm(true)}>
                                           Send
                                    </Button>
                                    <Button className="button-secondary" type="Button" onClick={()=>sendConfirm(false)}>
                                           Cancel
                                    </Button>
                                    </div>
                                    </div>
                                </div>                            
                            :
                            load?
                                <div className="file-container">
                                    <div className="input-cont">
                                        <p>Sending File</p>
                                        <div className="sweet-loading">
                                            <ClipLoader
                                            size={300}
                                            height={20}
                                            width={200}
                                            color={"#16BAC5"}
                                            loading={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            :
                                receiver?
                                <div className="file-container">
                                    <div className="input-cont">
                                        <p>Receiving File</p>
                                        <Progress
                                         percent={Math.floor((isloading/maxLoad)*100)}
                                        theme={{
                                            success: {
                                            symbol: '🏄‍',
                                            color: 'rgb(223, 105, 180)'
                                            },
                                            active: {
                                            symbol: '😀',
                                            color: '#fbc630'
                                            },
                                            default: {
                                            symbol: '😱',
                                            color: '#fbc630'
                                            }
                                        }}
                                        />
                                    </div>
                                </div>                           
                            :
                                wait?
                                <div className="file-container">
                                    <div className="input-cont">
                                        <motion.p initial = {{opacity : 0}} animate = {{opacity : 1}}>Wait till the user accepts the file</motion.p>
                                        <Button className="button-secondary" onClick={()=>setBtnWait(false)} type="Button">
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            :
                                <div className="file-container">
                                    <div className="input-cont">
                                        <input id="yolo" {...getInputProps()}/>
                                        <p>Drag a File here to Send</p>
                                        <p>OR</p>
                                        <Button className="button-primary" type="Button" onClick={open}>
                                            Select File
                                        </Button>
                                    </div>
                                </div>
                            }

                    </>
            </div>
        </motion.div>
    );
}

export default Filedropper