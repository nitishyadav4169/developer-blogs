import { useState } from "react";
import "./write.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MarkdownEditor from "@uiw/react-markdown-editor";

export default function Write() {
  const navigate = useNavigate();

  const [selImg, setSelImg] = useState("");
  const [blogData, setBlogData] = useState("");

  // const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const blogForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      content: "",
      createdAt: new Date(),
    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      values.image = selImg;
      values.content = blogData;

      console.log(values);
      setSubmitting(true);

      const res = await fetch("http://localhost:5000/blog/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      setSubmitting(false);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "WellDone!",
          text: "Registered Successfully 😎",
        });
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }

      // write code to submit form to server
    },
  });

  const uploadFile = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelImg(file.name);

    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);

    if (res.status === 200) {
      console.log("File Upload successfully");
    } else {
      console.log("File Upload Failed");
    }
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={blogForm.handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={uploadFile}
            style={{ display: "none" }}
          />
          <input
            id="title"
            onChange={blogForm.handleChange}
            value={blogForm.values.title}
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <MarkdownEditor
            value={blogData}
            height="200px"
            className="w-100"
            onChange={(value, viewUpdate) => setBlogData(value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
