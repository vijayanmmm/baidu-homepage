import Logo from './Logo'
import NewsFeed from './NewsFeed'
import SearchBar from './SearchBar'


export default function Center() {
    return (
        <div className='flex flex-col items-center h-2/5'>
            <Logo/>
            <SearchBar/>
            <NewsFeed/>
        </div>
    )
}
