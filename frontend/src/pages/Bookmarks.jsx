import { useOutletContext } from "react-router-dom";
import BookMarkList from "../features/posts/BookmarksList";

const BookMarks = () => {
  const context = useOutletContext();
  console.log(context);
  return <BookMarkList />;
};

export default BookMarks;
