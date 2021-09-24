import React, { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState(window && window.preloadedArticles);

  useEffect(() => {
    console.log("No preloaded articles found, loading from server");
    if (window && !window.preloadedArticles) {
      fetch("/api/articles")
        .then((response) => response.json())
        .then((data) => setArticles(data));
    }
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles &&
        articles.map((article) => (
          <div key={article.title}>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
          </div>
        ))}
    </div>
  );
};

export default Articles;
