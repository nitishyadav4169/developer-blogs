import {useState} from "react";
import "./write.css";
import { useFormik } from "formik";
import {useNavigate} from "react-router-dom";

export default function Write() {

  const navigate = useNavigate();

  const[selImg, setSelImg] = useState('');


  const blogForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      content: "",
      createdAt: new Date(),
    },
  });

  const uploadFile = async (e) => {
    if(!e.target.files[0]) return;
    const file =e.target.files[0];
    setSelImg(file.name);
  
    const fd = new FormData();
    fd.append('myfile', file);
  
    const res =await fetch('http://localhost:5000/util/uploadfile',{
      method: 'POST',
      body: fd
    });
  
    console.log(res.status);
  
    if(res.status === 200){
      console.log('File Upload successfully');
    }else{
      console.log('File Upload Failed')
    }
   }

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
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
          <textarea
            className="writeInput writeText"
            placeholder="Blog Description..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
