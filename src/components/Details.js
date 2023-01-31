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
                  <div>
                    {e && (
                      <div key={i} className="education-Section">
                        {e.qualification && (
                          <p
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            className="textDark textContainer"
                          >
                            <strong></strong> {e.qualification}
                          </p>
                        )}
                        {e.fromWhere && (
                          <p
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            className="textDark textContainer"
                          >
                            <strong></strong> {e.fromWhere}
                          </p>
                        )}
                        {e.when && (
                          <p
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            className="textDark textContainer"
                          >
                            <strong></strong> {e.when}
                          </p>
                        )}
                      </div>
                    )}
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
                  {e.projectName && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <strong>Project Name :-</strong> {e.projectName}
                    </p>
                  )}
                  {e.description && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <h4><strong>Description :-</strong></h4> {e.description}
                    </p>
                  )}
                  {e.role && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <h4><strong>Role :-</strong></h4> {e.role}
                    </p>
                  )}
                  {e.techTools && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <h4> <strong>Tech. Tools :-</strong></h4> {e.techTools}
                    </p>
                  )}
                  {e.teamSize && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <h4><strong>Team Size :-</strong></h4> {e.teamSize}
                    </p>
                  )}
                  {e.url && (
                    <p
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="textDark textContainer"
                    >
                      <h4><strong>Url :-</strong></h4> {e.url}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
