import { Button, Col, Divider, Form, Row, Upload } from 'antd';
import React from 'react';
import StepSwiper from '../components/StepSwiper';
import ImgCrop from 'antd-img-crop';

const SetPicPage = () => {
  const [fileList, setFileList] = React.useState([]);
  console.log(fileList);
  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8} xl={6} className="wrapper">
        <StepSwiper step={2} />
        <Divider className="register-divider">Set profile avatar</Divider>
        <Row type="flex" justify="center" align="middle">
          <Col xl={6}>
            <ImgCrop rotate>
              <Upload
                listType="picture-card"
                onChange={onChange}
                fileList={fileList}
                onPreview={onPreview}
              >
                {fileList.length < 1 && 'Upload'}
              </Upload>
            </ImgCrop>
          </Col>
        </Row>
        <Divider />
        <Form>
          <Button type="primary" htmlType="submit" className="register-form-button">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SetPicPage;
