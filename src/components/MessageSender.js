import { Avatar } from '@material-ui/core'
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db, { storage } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/appSlice';


export const MessageSender = () => {

    const [input, setInput] = useState("");
    const [archivo, setArchivo] = useState(null);
    const [image, setImage] = useState("");

    const [progress, setProgress] = useState();

    const user = useSelector(selectUser);

    const handlePictureClick = (e) => {
        e.preventDefault();
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if ( file ) {
            setArchivo(file);
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
            console.log(archivo);
        } else {
            console.log('No hay archivo');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('guardando...', archivo);

        const uploadTask = storage.ref(`images/${archivo.name}`).put(archivo);
        uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
        error => {
            console.log(error);
        },
        () => {
            storage
            .ref("images")
            .child(archivo.name)
            .getDownloadURL()
            .then(url => {
                setProgress(null);
                db.collection('posts').add({
                    message: input,
                    timestamp: new Date().getTime(),
                    profilePic: user.profilePic,
                    username: user.username,
                    image: url,
                });
            });
        }
        );

        setArchivo(null);
        setInput("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.profilePic} />
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Que estas pensando ${user.username}`}
                        className="messageSender__input"
                     />

                    <button className="btn-invisible" onClick={handleSubmit} type="submit">
                        hidden
                    </button>
                </form>

                    <button 
                        onClick={ handlePictureClick }>
                        Subir Imagen
                    </button>

                    <input
                        id="fileSelector"
                        type="file"
                        name="file"
                        accept="image/*"
                        style={{ display: 'none'}}
                        onChange={ handleFileChange } />

            </div>

            {
                archivo && (
                    <img className="previewImage" src={image} alt="img" />
                )
            }

            {   
                /* Posicionar correctamente el progress bar */
                progress && (
                    <progress className="progress-bar" value={progress} max="100" />
                )
            } 

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Video en vivo</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Foto/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Estado/Actividad</h3>
                </div>
            </div>
        </div>
    )
}
