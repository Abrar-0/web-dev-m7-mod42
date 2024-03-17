import PropTypes from "prop-types";
import { PiBookmarkSimpleLight } from "react-icons/pi";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;

  console.log(blog);
  return (
    <div className="my-8 border-b-2">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between mt-8 mb-[18px]">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button className="text-2xl"><PiBookmarkSimpleLight /></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="pt-4 pb-5">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button className="pb-9">Mark as Read</button>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
