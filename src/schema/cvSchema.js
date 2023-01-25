import * as Yup from "yup";

export const CvSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Name can note be blank"),
  post: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Post can note be blank"),
  summary: Yup.string().min(40, "Too Short!").max(2000, "Too Long!").required("Summary can note be blank"),
  education: Yup.string().min(5, "Too Short!"),
  projects: Yup.string().min(10, "Too Short!").required("Project Can not be blank"),
  skills: Yup.string().min(2, "Too Short!").required("Skills Can not be blank"),
  tools: Yup.string().min(2, "Too Short!").required("Tools Can not be blank"),
  langaugeSkills: Yup.string().min(2, "Too Short!").required("Langauge Can not be blank"),
  contactUs: Yup.string().min(10, "Too Short!"),
});
