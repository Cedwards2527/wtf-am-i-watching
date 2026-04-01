import "./About.css";

function About() {
  return (
    <div className="about">
      <h2 className="about__title">About WTF Am I Watching</h2>

      <p>
        Are you tired of watching the same old, by the book predictable movies?
        Same. This app was built to solve that problem.
      </p>

      <p>
        WTF Am I Watching helps you discover movies that are unexpected,
        overlooked, or just plain weird—in the best way possible. Instead of the
        same popular titles, you get something different.
      </p>

      <p>
        Because sometimes the best movies are the ones you never would have
        picked yourself.
      </p>

      <p>
        The picks are powered by The Movie Database (TMDB) and a curated list of
        films chosen to surprise you.
      </p>
      <h3 className="about__continued">How It Works</h3>
      <p>
        Movies are pulled from The Movie Database (TMDB) using their API and
        selected from a curated list designed to keep things interesting. You
        can explore a featured movie of the day or get a completely random pick.
      </p>
    </div>
  );
}

export default About;
