import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import styles from "../styles/CreateCv.module.css";
import { CvSchema } from "../schema/cvSchema";
import { dataContext } from "../context/dataContext";
import { Link } from "react-router-dom";
import { allField, eduField, projects } from "../helper/data";

export const Cvform = () => {
  const { data, setData } = useContext(dataContext);

  return (
    <div className={styles.container}>
      <Formik
        initialValues={data}
        validationSchema={CvSchema}
        onSubmit={(values) => {
          setData(values);
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              {allField.map((text, i) => (
                <div key={i} className={styles.col}>
                  <label htmlFor={text}>{text}</label>
                  <Field
                    as={text === "summary" ? "textarea" : ""}
                    name={text}
                    placeholder={text}
                    type="text"
                  />
                  <ErrorMessage
                    name={text}
                    component="div"
                    className="field-error"
                  />
                </div>
              ))}

              <div>
                <div className={styles.col}>
                  <label>Education</label>
                </div>
                <FieldArray name="education">
                  {({ remove, push }) => (
                    <div>
                      {values.education.length > 0 &&
                        values.education.map((obj, i) => (
                          <div className={styles.row} key={i}>
                            <div className={styles.deleteEdu}>
                              {i > 0 && (
                                <button
                                  type="button"
                                  className="secondary"
                                  onClick={() => remove(i)}
                                >
                                  X
                                </button>
                              )}
                            </div>

                            {eduField.map((title, index) => (
                              <div className={styles.colsm} key={index}>
                                <label htmlFor={`education.${i}.${title}`}>
                                  {title}
                                </label>
                                <Field
                                  name={`education.${i}.${title}`}
                                  placeholder={`${title}`}
                                  type="text"
                                />
                                <ErrorMessage
                                  name={`education.${i}.${title}`}
                                  component="div"
                                  className="field-error"
                                />
                              </div>
                            ))}
                          </div>
                        ))}

                      <div className={styles.addButton}>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() =>
                            push({
                              qualification: "",
                              fromWhere: "",
                              when: "",
                            })
                          }
                        >
                          Add Education
                        </button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </div>
              <div>
                <div className={styles.col}>
                  <label>Projects</label>
                </div>
                <FieldArray name="projects">
                  {({ remove, push }) => (
                    <div>
                      {values.projects.length > 0 &&
                        values.projects.map((obj, i) => (
                          <div className={styles.row} key={i}>
                            <div className={styles.deleteEdu}>
                              {i > 0 && (
                                <button
                                  type="button"
                                  className="secondary"
                                  onClick={() => remove(i)}
                                >
                                  X
                                </button>
                              )}
                            </div>

                            {projects.map((title, index) => (
                              <div className={styles.colsm} key={index}>
                                <label htmlFor={`projects.${i}.${title}`}>
                                  {title}
                                </label>
                                <Field
                                  as={title === "description" && "textarea"}
                                  name={`projects.${i}.${title}`}
                                  placeholder={`${title}`}
                                  type="text"
                                />
                                <ErrorMessage
                                  name={`projects.${i}.${title}`}
                                  component="div"
                                  className="field-error"
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      <div className={styles.addButton}>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() =>
                            push({
                              projectName: "",
                              role: "",
                              techTools: "",
                              teamSize: "",
                              url: "",
                              description: "",
                            })
                          }
                        >
                          Add Projects
                        </button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </div>

              <div  className={styles.col}>
                <label>
                  <Field type="checkbox" name="isLogo" />
                  {`Show Logo and Footer`}
                </label>
              </div>
            </div>

            <div className={styles.submit}>
              <button type="submit">Submit</button>
              <Link to={"/"}>
                <button>Home</button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
