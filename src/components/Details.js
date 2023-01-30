import React from "react";
import { Header } from "./Header";
import { Title } from "./Title";
import { GoPrimitiveDot } from "react-icons/go";

export const Details = ({ name, post, summary, education, projects }) => {
  // console.log(name,post, summary, education, projects);
  return (
    <>
      <div className="left-part flex-65">
        <Header name={name} post={post} />
        <div className="flex">
          <div className="sideborder"></div>
          <div>
            <div className="details-sec">
              <div className="circle">
                <GoPrimitiveDot
                  style={{ fontSize: "2rem", color: "lightgrey" }}
                />
              </div>
              <Title title={"Summary"} />
              <p
                contentEditable="true"
                suppressContentEditableWarning={true}
                className="textDark textContainer "
              >
                {summary}
              </p>
              <br />
            </div>
            {education && (
              <div className="details-sec">
                <div className="circle">
                  <GoPrimitiveDot
                    style={{ fontSize: "2rem", color: "lightgrey" }}
                  />
                </div>
                <Title title={"Education"} />
                {education?.map((e, i) => (
                  <div key={i} className="education-Section">
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <strong>Qualification :-</strong> {e.qualification}
                    </p>
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <strong>From Where :-</strong> {e.fromWhere}
                    </p>
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <strong>When :-</strong> {e.when}
                    </p>
                  </div>
                ))}
                <br />
              </div>
            )}
            <div className="details-sec">
              <div className="circle">
                <GoPrimitiveDot
                  style={{ fontSize: "2rem", color: "lightgrey" }}
                />
              </div>
              <Title title={"Projects"} />
              {projects?.map((e, i) => (
                <div key={i} className="education-Section">
                  <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    className="textDark textContainer"
                  >
                    <strong>Project Name :-</strong> {e.projectName}
                  </p>
                  <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    className="textDark textContainer"
                  >
                    <strong>Description :-</strong> {e.description}
                  </p>
                  <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    className="textDark textContainer"
                  >
                    <strong>Role :-</strong> {e.role}
                  </p>
                  <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    className="textDark textContainer"
                  >
                    <strong>Tech. Tools :-</strong> {e.techTools}
                  </p>
                  <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    className="textDark textContainer"
                  >
                    <strong>Team Size :-</strong> {e.teamSize}
                  </p>
                  <p
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    className="textDark textContainer"
                  >
                    <strong>Url :-</strong> {e.url}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
