import React, { useState } from "react";
import { Typography, Button, Form, message, Input} from "antd";
import PlusOutlined from "@ant-design/icons"
import Dropzone from "react-dropzone";

const { TextArea } = Input;
const { Title } = Typography;
const PrivateOptions = [
  {value: 0, label: "Private"},
  {value: 1, label: "Public"}
]
const CategoryOptions = [
  {value: 0, label: "Film & Animation"},
  {value: 1, label: "Auto & Vehicles"},
  {value: 3, label: "Music"}
]
function VideoUploadPage() {
  const [VideoTitle, setVideoTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Private, setPrivate] = useState(0); // private 0, public 1
  const [Category, setCategory] = useState("Fil & Animation")

  const onVideoTitleChange = (e) => {
    setVideoTitle(e.currentTarget.value)
  }
  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value)
  }
  const onPrivateChange = (e) => {
    setPrivate(e.currentTarget.value)
  }
  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value)
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Video</Title>
      </div>
      <Form onSubmit>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dropzone onDrop multiple maxSize>
            {({ getRootProps, getInputProps }) => {
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {/* 이부분이 왜 안 될까? */}
                <PlusOutlined style={{fontSize: "30px"}}/>
              </div>;
            }}
          </Dropzone>
          <div>
            <img src alt />
          </div>
        </div>
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onVideoTitleChange} value={VideoTitle} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={Description} />
        <br />
        <br />
        <select onChange={onPrivateChange}>
          {PrivateOptions.map((item, index)=> (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br/>
        <br/>
        <select onChange={onCategoryChange}>
          {CategoryOptions.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
        <br/>
        <br/>
        <Button type="primary" size="large" onClick>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default VideoUploadPage;
