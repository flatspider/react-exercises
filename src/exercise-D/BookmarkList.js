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
    </div>
  );
}

export default BookmarkList;
