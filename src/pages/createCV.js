import React, { useContext} from "react";
import styles from "../styles/CreateCv.module.css";
import { Formik } from "formik";
import { CvSchema } from "../schema/cvSchema";
import { dataContext } from "../context/dataContext";
import { Link } from "react-router-dom";


export default function CreateCV(props) {
  const {data,setData} =  useContext(dataContext)
  console.log(data,setData)

  return (

    <div className={styles.container}>
      <Formik
        initialValues={data}
        // initialValues={{
        //   name: "",
        //   post: "",
        //   summary: "",
        //   education: "",
        //   projects: "",
        //   skills: "",
        //   tools: "",
        //   langaugeSkills: "",
        //   contactUs: "",
        // }}
        onSubmit={async (values) => {
          setData(values);
          localStorage.setItem("apiData", JSON.stringify(values));
          let formData = new FormData();
          formData.append("name", values.name);
          formData.append("post", values.post);
          formData.append("summary", values.summary);
          values.education && formData.append("education", values.education);
          formData.append("projects", values.projects);
          formData.append("skills", values.skills);
          formData.append("tools", values.tools);
          formData.append("langaugeSkills", values.langaugeSkills);
          values.contactUs && formData.append("contactUs", values.contactUs);
          alert("Form submitted!");
          // console.log(formData.get("name"));
        }}
        validationSchema={CvSchema}
        render={({ values, errors, touched, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Full Name"
                id="name"
                name="name"
                type="text"
                className="form-control"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="post">Position</label>
              <input
                placeholder="Position"
                id="post"
                name="post"
                type="text"
                classpost="form-control"
                value={values.post}
                onChange={handleChange}
              />
              {errors.post && touched.post && <p>{errors.post}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="summary">Summary</label>
              <textarea
                placeholder="Summary"
                rows={5}
                id="summary"
                name="summary"
                type="summary"
                className="form-control"
                value={values.summary}
                onChange={handleChange}
              />
              {errors.summary && touched.summary && <p>{errors.summary}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="education">Education</label>
              <input
                placeholder="Education"
                id="education"
                name="education"
                type="education"
                className="form-control"
                value={values.education}
                onChange={handleChange}
              />
              {errors.education && touched.education && (
                <p>{errors.education}</p>
              )}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="projects">Projects</label>
              <textarea
                rows={5}
                placeholder="Projects"
                id="projects"
                name="projects"
                type="projects"
                className="form-control"
                value={values.projects}
                onChange={handleChange}
              />
              {errors.projects && touched.projects && <p>{errors.projects}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="skills">Skills</label>
              <input
                placeholder="Skills"
                id="skills"
                name="skills"
                type="skills"
                className="form-control"
                value={values.skills}
                onChange={handleChange}
              />
              {errors.skills && touched.skills && <p>{errors.skills}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="tools">Tools</label>
              <input
                placeholder="Tools"
                id="tools"
                name="tools"
                type="tools"
                className="form-control"
                value={values.tools}
                onChange={handleChange}
              />
              {errors.tools && touched.tools && <p>{errors.tools}</p>}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="langaugeSkills">LangaugeSkills</label>
              <input
                placeholder="Langauges"
                id="langaugeSkills"
                name="langaugeSkills"
                type="langaugeSkills"
                className="form-control"
                value={values.langaugeSkills}
                onChange={handleChange}
              />
              {errors.langaugeSkills && touched.langaugeSkills && (
                <p>{errors.langaugeSkills}</p>
              )}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="contactUs">contactUs</label>
              <input
                placeholder="Current, Email, Contact No., Full address"
                id="contactUs"
                name="contactUs"
                type="contactUs"
                className="form-control"
                value={values.contactUs}
                onChange={handleChange}
              />
              {errors.contactUs && touched.contactUs && (
                <p>{errors.contactUs}</p>
              )}
            </div>

            <div className={styles.formBtn}>
              <button type="submit">Submit </button>
              <Link className={styles.a} to={"/"}>
                Home
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
}
