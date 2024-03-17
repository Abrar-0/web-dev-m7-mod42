import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 text-3xl bg-gray-400 ml-4 mt-2 p-2 rounded-lg"> 
            <div>
                <h3 className='text-center'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className='text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map ((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.PropTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
