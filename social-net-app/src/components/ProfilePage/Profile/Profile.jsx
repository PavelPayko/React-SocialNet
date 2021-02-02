import React from 'react'
import classes from './Profile.module.css'
import avatar from '../../../img/avatar.jpg'
import Status from "./Status/Status";
import ContentBlock from "../../commonComponents/ContentBlock/ContentBlock";

const Profile = (props) => {
    console.log(props)

    const myProfile = props.myId === props.profile.userId

    let imgSrc = avatar
    if (props.profile.photos && props.profile.photos.small) {
        imgSrc = props.profile.photos.small
    }

    const contacts = []
    props.profile.contacts && Object.keys(props.profile.contacts).map((contact, index) => {
        contacts.push(<li key={contact+index}><span>{contact + ': '}</span><span>{props.profile.contacts[contact]}</span></li>
        )
    })

    const uploadAvatarHandler = e => {
        props.uploadAvatar(e.target.files[0])
        // console.log(e.target.files[0])
    }

    return (
        <div className={classes.profile}>
            {/*<div className={classes.profileName}>{props.profile.fullName}</div>*/}
            <div>
                <img src={imgSrc} alt="avatar" className={classes.profileAvatar}/>
                {myProfile && <input type="file" name="avatar" id="avatar" onChange={uploadAvatarHandler}/>}
            </div>
            <ContentBlock title={'status'}>
                <Status status={props.status} setStatus={props.setStatus} myProfile={myProfile}/>
            </ContentBlock>
            <ContentBlock title={'Профиль'}>
                <div>
                    <span className={classes.name}>{props.profile.fullName}</span>
                    <div className={classes.aboutMe}>
                        <span className={classes.aboutMeTitle}>Обо мне: </span>
                        <span className={classes.aboutMeDescrition}>{props.profile.aboutMe || 'Пока ничего..'}</span>
                    </div>
                    <ul className={classes.contacts}>
                        <span className={classes.contactsTitle}>Контакты: </span>
                        {contacts}
                    </ul>
                </div>
            </ContentBlock>
        </div>
    )
}

export default Profile