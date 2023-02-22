import { useState } from "react";

const INITIAL_BOOKMARKS = [
  {
    url: "https://news.ycombinator.com",
    title: "Hacker News",
    tag: "news",
  },
  {
    url: "https://nytimes.com",
    title: "The New York Times",
    tag: "news",
  },
  {
    url: "https://lesswrong.com",
    title: "Improving Rationality",
    tag: "AI",
  },
];

function BookmarkList() {
  const [tagFilter, setTagFilter] = useState(null);
  const [bookmarkList, setBookmarkList] = useState(INITIAL_BOOKMARKS);
  const [newBookmarkUrl, setNewBookmarkUrl] = useState("");

  const handleSubmit = (submits) => {
    submits.preventDefault(); // Stops the button from refreshing the page.

    const newBookmark = {
      url: newBookmarkUrl,
      title: "New Bookmark",
      tag: "misc",
    };

    // onSubmit is being passed in through the App.js html element
    // Pull in the values of title, content, and author that the user typed.
    // Call onSubmit property from below form.
    setBookmarkList([...bookmarkList, newBookmark]);
    setNewBookmarkUrl(""); // Clears the input box.
  };

  return (
    <div>
      <header>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => setTagFilter(null)}
        >
          ALL
        </button>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control title w-75 mt-2 mx-auto"
          id="blogTitle"
          autoComplete="off"
          placeholder="Enter blog title here..."
          value={newBookmarkUrl}
          onChange={(event) => setNewBookmarkUrl(event.target.value)} // This watches each change to the input and returns the current value
        ></input>
      </form>
      {bookmarkList.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark} />
      ))}
    </div>
  );
}

function Bookmark({ bookmark }) {
  return (
    <div>
      <a href={bookmark.url}>{bookmark.title}</a> ({bookmark.tag})
    </div>
  );
}

export default BookmarkList;
