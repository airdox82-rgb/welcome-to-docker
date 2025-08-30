import "./App.css";
import Confetti from "./Confetti";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  const twitterUrl = new URL("https://twitter.com/intent/tweet");
  twitterUrl.searchParams.set("text", shareMessage);
  twitterUrl.searchParams.set("url", shareLink);

  const linkedinUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
  linkedinUrl.searchParams.set("url", shareLink);

  const redditUrl = new URL("https://reddit.com/submit");
  redditUrl.searchParams.set("title", shareMessage);
  redditUrl.searchParams.set("url", shareLink);
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>Congratulations!!!</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          You ran your first container.
        </p>
        <div>
          <a
            target="_blank"
            href={twitterUrl.toString()}
            className="fa-brands fa-x-twitter"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={linkedinUrl.toString()}
            className="fa-brands fa-linkedin"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={redditUrl.toString()}
            className="fa-brands fa-reddit"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
