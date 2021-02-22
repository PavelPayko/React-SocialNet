import React from 'react'
import classes from './Profile.module.css'
import avatar from '../../../img/avatar.jpg'
import Status from "./Status/Status";
import ContentBlock from "../../commonComponents/ContentBlock/ContentBlock";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../../commonComponents/Form/renderField/renderField";
import {required} from "../../commonComponents/Form/formValidate";
import Button from "../../commonComponents/Button/Button";

const Profile = (props) => {

    const myProfile = props.myId === props.profile.userId

    let imgSrc = avatar
    if (props.profile.photos && props.profile.photos.small) {
        imgSrc = props.profile.photos.small
    }

    const contacts = []
    props.profile.contacts && Object.keys(props.profile.contacts).map((contact, index) => {
        console.log(contact, props.profile.contacts[contact])
        contacts.push(<li key={contact + index}>
            <span>{contact + ': '}</span><a href={props.profile.contacts[contact]}
                                            target='blank'>{props.profile.contacts[contact]}</a></li>
        )
    })


    const uploadAvatarHandler = e => {
        props.uploadAvatar(e.target.files[0])
    }
    const editProfile = () => {
        myProfile && props.setProfileEditStatus(true)
    }

    let ProfileEditForm = props => {
        const contactsForm = []
        props.initialValues.contacts && Object.keys(props.initialValues.contacts).map((contact, index) => {
            contactsForm.push(
                <div key={contact + index} className={classes.input}>
                    <Field component={renderField}
                           type="text"
                           name={"contacts." + contact}
                           label={contact + ': '}
                           placeholder={contact}
                    />
                </div>
            )
        })

        return <form onSubmit={props.handleSubmit} className={classes.profileEditForm}>
            <div className={classes.input}>
                <Field component={renderField}
                       type="text"
                       name='fullName'
                       validate={[required]}
                       label='Полное Имя'
                       placeholder='Полное Имя'
                />
            </div>
            <div className={classes.textarea}>
                <Field component={renderField}
                       type="textarea"
                       name='aboutMe'
                       label='Обо мне'
                       placeholder='Обо мне'
                       validate={[required]}
                />
            </div>
            <div className={classes.checkbox}>
                <Field component={renderField}
                       type="checkbox"
                       name='lookingForAJob'
                       label='Принимаю предложения о работе'
                />
            </div>
            <div className={classes.input}>
                <Field component={renderField}
                       type="textarea"
                       name='lookingForAJobDescription'
                       label='Hard/soft skills'
                       placeholder='Hard/soft skills'
                       validate={[required]}
                />
            </div>
            <div className={classes.formContactsWrapper}>
                <span className={classes.formContactsTitle}>Contacts :</span>
                <div className={classes.formContacts}>{contactsForm}</div>
            </div>
            {props.error && <div className={classes.commonError}>{props.error}</div>}
            <div>
                <Button type='primary' title={'Edit'} size={'big'}/>
            </div>
        </form>
    }

    ProfileEditForm = reduxForm({form: 'profileEdit'})(ProfileEditForm)

    let profileSubmit = values => {
        console.log(values)
        props.editProfile(values)
    }

    return (
        <div className={classes.profile}>
            <div className={classes.avatarWrapper}>
                <img src={imgSrc} alt="avatar" className={classes.profileAvatar}/>
                {myProfile && <label htmlFor="avatar" className={classes.avatarLabel}>
                    <input type="file" name="avatar" id="avatar" className={classes.avatar}
                           onChange={uploadAvatarHandler}/>
                    <div className={classes.uploadImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
                            <g>
                                <path
                                    d="M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z"/>
                                <path d="M383.6,313.6"/>
                                <path
                                    d="M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z"/>
                                <path
                                    d="M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z"/>
                                <path
                                    d="M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z"/>
                            </g>
                        </svg>
                    </div>
                </label>
                }
            </div>
            <ContentBlock title={'status'}>
                <Status status={props.status} setStatus={props.setStatus} myProfile={myProfile}/>
            </ContentBlock>
            <ContentBlock title={'Профиль'}>
                {myProfile && props.profileEditStatus
                    ? <ProfileEditForm onSubmit={profileSubmit} initialValues={props.profile}/>
                    : <div className={classes.profileWrapper}>
                        {myProfile && <div onClick={editProfile} className={classes.profileEdit}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 viewBox="0 0 1000 1000">
                                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                                    <path
                                        d="M3609.8,1492.6L100-2017.1v-1384.8v-1382.6h1384.8h1382.6l3516.3,3516.3L9900,2248L8521.7,3626.3c-757.5,757.5-1382.6,1378.3-1389.1,1378.3S5541.6,3424.4,3609.8,1492.6z M8087.6,3192.2l944.2-944.2l-293-293l-293-293l-948.5,948.5l-950.7,950.7l286.5,286.5c158.4,158.4,293,288.7,299.5,288.7S7568.8,3710.9,8087.6,3192.2z M7067.4,2172l944.2-944.2l-267-264.8l-264.8-267l-948.5,948.5l-950.7,950.7l260.5,260.5c143.3,143.3,264.8,260.5,271.3,260.5S6548.7,2690.8,7067.4,2172z M4827.4-1958.5L2607-4176.8l-944.2,4.3l-944.2,6.5l-6.5,944.2l-4.3,944.2L2926-59.3l2220.5,2220.5l948.5-948.5l950.7-950.7L4827.4-1958.5z"/>
                                </g>
                            </svg>
                        </div>}
                        <div>
                            <span className={classes.profileName}>{props.profile.fullName}</span>
                            <div className={classes.aboutMe}>
                                <span className={classes.aboutMeTitle}>Обо мне: </span>
                                <span
                                    className={classes.aboutMeDescrition}>{props.profile.aboutMe || 'Пока ничего..'}</span>
                            </div>
                            <span className={classes.contactsTitle}>Контакты: </span>
                            <ul className={classes.contacts}>
                                {contacts}
                            </ul>
                        </div>
                    </div>
                }
            </ContentBlock>
        </div>
    )
}

export default Profile