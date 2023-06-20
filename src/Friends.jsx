import myHeader from './HomeMyHeader'
import resume from './HomeResume'
import friendsMyFriends from './FriendsMyFriends'
import navBar from './NavBar'

export default function friends(){
    return (
        <div className='home'>
            <div>{myHeader()}</div>
            <div>{resume()}</div>
            <div>{friendsMyFriends()}</div>
            <div> {navBar()}</div>
        </div>
    )
}