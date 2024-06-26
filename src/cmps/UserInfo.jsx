import { UserAction } from "./UserActions"
import { UserStats } from "./UserStats"


export function UserInfo({ watchedUser, loggedInUser }) {

    return (
        <div className="user-info">
            {watchedUser ?
                <>
                    <div className="img-container">
                        <img className="user-info-img profilePreviewImg" src={watchedUser.imgUrl}></img>
                    </div>
                    <div className="user-details">
                        <UserAction watchedUser={watchedUser} loggedInUser={loggedInUser} />
                        <UserStats watchedUser={watchedUser} loggedInUser={loggedInUser} />
                        <div>
                            <p className="user-fullname" >{watchedUser.firstname} {watchedUser.lastname} </p>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="img-container" >
                        <img className="user-info-img profilePreviewImg" src={loggedInUser.imgUrl}></img>
                    </div>
                    <div className="user-details">
                        <UserAction loggedInUser={loggedInUser} watchedUser={watchedUser} />
                        <UserStats watchedUser={watchedUser} loggedInUser={loggedInUser} />
                        <div>
                            <p className="user-fullname" >{loggedInUser.firstname} {loggedInUser.lastname} </p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}