import { useState } from "react";
import BlogList from "./BlogList";

const INITIAL_BLOGS = [
  {
    title: "Rise of the Robots: How AI is Revolutionizing Computing",
    summary:
      "As artificial intelligence advances at an unprecedented rate, it's changing the way we interact with computers. This post explores the rise of AI and its potential to transform the way we work, communicate, and live.",
  },
  {
    title: "AI Disrupts the Job Market: How to Stay Ahead of the Curve",
    summary:
      "As automation and machine learning take over more jobs, the job market is rapidly changing. In this post, we explore how AI is disrupting the workforce and provide tips on how to stay ahead of the curve.",
  },
  {
    title: "From Self-Driving Cars to Siri: The Future of AI is Here",
    summary:
      "From self-driving cars to voice assistants, AI is already transforming our world. This post looks at some of the most exciting ways that AI is changing the way we live, work, and play.",
  },
  {
    title: "AI Ethics: The Debate Over the Future of Intelligent Machines",
    summary:
      "As AI becomes more advanced, questions about ethics and morality are becoming more pressing. This post explores the debate over the future of intelligent machines and their place in our society.",
  },
  {
    title: "Why AI is More Than Just Automation",
    summary:
      "AI is often seen as a tool for automation, but it's so much more than that. This post explores the many different ways that AI is being used, from diagnosing diseases to creating art.",
  },
  {
    title:
      "The Promise and Peril of AI: Balancing Progress with Responsibility",
    summary:
      "As AI becomes more powerful, it's important to consider the potential risks and benefits. This post looks at the promise and peril of AI and the need to balance progress with responsibility.",
  },
  {
    title: "AI and the Future of Cybersecurity: What You Need to Know",
    summary:
      "As cyber threats become more sophisticated, AI is emerging as a key defense mechanism. In this post, we explore how AI is being used to protect against cyberattacks and what you need to know about this emerging technology.",
  },
  {
    title: "The AI Revolution: Are You Ready for the Future of Computing?",
    summary:
      "As AI becomes more pervasive, it's important to be prepared for the future of computing. This post explores the impact of AI on our world and what you can do to stay ahead of the curve.",
  },
];

function BlogPopUp() {
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);

  const blogListHTML = blogs.map((blog, index) => (
    <BlogList key={index} blog={blog} />
  ));

  return <div className="list-group">{blogListHTML}</div>;
}

export default BlogPopUp;
