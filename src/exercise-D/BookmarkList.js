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
  const [newBookmarkTitle, setNewBookmarkTitle] = useState("");
  const [newBookmarkTag, setNewBookmarkTag] = useState("");

  const handleSubmit = (submits) => {
    submits.preventDefault(); // Stops the button from refreshing the page.

    const newBookmark = {
      url: newBookmarkUrl,
      title: newBookmarkTitle,
      tag: newBookmarkTag,
    };

    setBookmarkList([...bookmarkList, newBookmark]);
    setNewBookmarkUrl(""); // Clears the input box.
    setNewBookmarkTitle(""); // Clears the input box.
    setNewBookmarkTag(""); // Clears the input box.
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
          name="URL"
          className="form-control title w-75 mt-2 mx-auto"
          id="bookmarkURL"
          autoComplete="off"
          placeholder="Enter website here..."
          value={newBookmarkUrl}
          onChange={(event) => setNewBookmarkUrl(event.target.value)} // This watches each change to the input and returns the current value
        ></input>
        <input
          type="text"
          name="title"
          className="form-control title w-75 mt-2 mx-auto"
          id="blogTitle"
          autoComplete="off"
          placeholder="Enter description here..."
          value={newBookmarkTitle}
          onChange={(event) => setNewBookmarkTitle(event.target.value)} // This watches each change to the input and returns the current value
        ></input>
        <input
          type="text"
          name="title"
          className="form-control title w-75 mt-2 mx-auto"
          id="blogTitle"
          autoComplete="off"
          placeholder="Enter tag here..."
          value={newBookmarkTag}
          onChange={(event) => setNewBookmarkTag(event.target.value)} // This watches each change to the input and returns the current value
        ></input>
        <button className="btn btn-secondary mt-2" type="submit">
          Add bookmark!
        </button>
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
