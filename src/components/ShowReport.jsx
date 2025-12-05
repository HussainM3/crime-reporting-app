import { useState } from "react";
import img from "../assets/show-map.png";

const ShowReport = ({ report: sampleReport, setShowReport }) => {
  const [vote, setVote] = useState(null);
  const [report, setReport] = useState(sampleReport);
  const [showOtherDetails, setShowOtherDetails] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <div className="flex flex-col w-full h-full absolute top-0 z-10 bg-white shadow-lg">
      <div className="flex-grow p-4 overflow-auto">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Report Details</h2>
          <div className="flex flex-row items-center gap-2">
            <button
              className={
                "text-sm font-medium px-2 py-1 rounded-full text-blue-800 border-blue-200 border-2 w-8 h-8 " +
                (vote === "down" ? "bg-blue-200 " : "")
              }
              onClick={() => {
                const newScore =
                  report.score +
                  (vote === "up" ? -2 : vote === "down" ? 1 : -1);
                setReport((report) => ({ ...report, score: newScore }));
                setVote((vote) => {
                  if (vote === "down") return null;
                  return "down";
                });
              }}
            >
              -
            </button>
            <span className="">Score: {report.score}</span>
            <button
              className={
                "text-sm font-medium px-2 py-1 rounded-full text-blue-800 border-blue-200 border-2 w-8 h-8 " +
                (vote === "up" ? "bg-blue-200 " : "")
              }
              onClick={() => {
                const newScore =
                  report.score + (vote === "up" ? -1 : vote === "down" ? 2 : 1);
                setReport((report) => ({ ...report, score: newScore }));
                setVote((vote) => {
                  if (vote === "up") return null;
                  return "up";
                });
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={img}
            alt="Map"
            className="w-full h-52 mb-4 rounded-2xl border-2 border-gray-300 drop-shadow-lg"
          />
          <div
            style={{
              position: "absolute",
              width: 10,
              height: 10,
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              backgroundColor: "red",
            }}
          />
        </div>
        <p>
          <strong>Type:</strong> {report.type}
        </p>
        <p>
          <strong>Description:</strong> {report.description}
        </p>
        <p>
          <strong>Distance to you: </strong> {report.distanceToYou}
        </p>
        <p>
          <strong>Reported at:</strong>{" "}
          {new Date(report.reportedAt).toLocaleString()}
        </p>
        <div className="my-4 border-t">{/* divider */}</div>
        <div>
          <strong>Other Details</strong>
          <button
            className="ml-2 text-blue-500 underline text-sm"
            onClick={() => setShowOtherDetails(!showOtherDetails)}
          >
            {showOtherDetails ? "Hide" : "Show"}
          </button>
          {showOtherDetails && (
            <div className="flex flex-col gap-2 mt-2 p-2 border rounded bg-gray-50">
              <p>
                <strong>Suspect Description:</strong>{" "}
                {report.suspectDescription}
              </p>
              <p>
                <strong>Location:</strong> Lat {report.location.lat}, Lng{" "}
                {report.location.lng}
              </p>
              <p>
                <strong>Verified:</strong> {report.verified ? "Yes" : "No"}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {new Date(report.lastUpdated).toLocaleString()}
              </p>
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Comments</h3>
        <div className="mb-4">
          Add your comment:
          <textarea
            className="w-full p-2 border rounded mb-2"
            rows="3"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              if (comment.trim() === "") return;
              const newComment = {
                user: "Me",
                comment: comment.trim(),
                timestamp: new Date().toISOString(),
              };
              setReport((report) => ({
                ...report,
                comments: [newComment, ...report.comments],
              }));
              setComment("");
            }}
          >
            Submit
          </button>
        </div>
        {report.comments.map((comment, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            <p>
              <strong>{comment.user}:</strong> {comment.comment}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(comment.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <button
          className="w-full bg-blue-500 text-white py-2 rounded"
          onClick={() => setShowReport(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShowReport;
