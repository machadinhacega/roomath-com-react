import myHeader from './HomeMyHeader'
import resume from './HomeResume'
import myHome from './HomeMyHome'
import navBar from './NavBar'

export default function home(){
    return (
        <div className='home'>
            <div>{myHeader()}</div>
            <div>{resume()}</div>
            <div>{myHome()}</div>
            <div> {navBar()}</div>
        </div>
    )
}