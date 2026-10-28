export default function TopicList({ topics }) {
  return (
    <div className="topic-list-container">
      <h3>Key Takeaways</h3>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}
