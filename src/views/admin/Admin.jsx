import Title from "../../common/title/Title"
import './admin.scss'
import db from "../../firebase/firebase-config";
import {collection, addDoc} from "firebase/firestore";
import { useState } from "react";
import {storage} from '../../firebase/firebase-config'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
function Admin() {
    const [content, setContent] = useState('')
    const [img, setImg] = useState('')
    const onChangeInput = e => {
        setContent(e.target.value)
    }
    const onChangeFile = e => {
       setImg(e.target.files[0])
       
        
    }
    const data = {
        content : content,
        createdAt : new Date().getTime(),
        imgUrl : img
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const storageRef = ref(storage, `images/${img.name}`)
        uploadBytes(storageRef, img).then(snapshot => {
           getDownloadURL(snapshot.ref).then( urlImg => {
                setImg(urlImg)
            })
        })
        setTimeout(() => {
            addDoc(collection(db, 'posts'), data)
        }, 1500)
      }
       
    return (
        <div className="admin">
            <Title title="Admin page"/>
            <form action="" onSubmit={handleSubmit}>
                <h6>Add new blog</h6>
                <input type="file" name="file" onChange={onChangeFile} id="" />
                <textarea className="p-3" onChange={onChangeInput} type="text" value={content} placeholder="put your content..."/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Admin