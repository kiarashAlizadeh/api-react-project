import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

// bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddArticle() {
  const [formData, setFormData] = useState({});

  const resetFormData = () => {
    setFormData({
      title: '',
      desc: '',
      image: '',
      writter: '',
      readingTime: '',
      category: '',
    });
  };
  const addArticleHandler = () => {
    const { title, desc, image, writter, readingTime, category } = formData;
    if (!title || !desc || !image || !writter || !category) {
      Swal.fire({
        title: 'لطفا مقادیر مقاله را کامل وارد کنید',
        timer: 1500,
        icon: 'error',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      axios
        .post('https://fake-api-react-blog.vercel.app/articles', formData)
        .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              title: 'مقاله جدید با موفقیت ساخته شد',
              timer: 1500,
              icon: 'success',
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
          resetFormData();
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: 'مقاله ساخته نشد',
            timer: 1500,
            icon: 'error',
            timerProgressBar: true,
            showConfirmButton: false,
          });
        });
    }
  };

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MyNavbar />
      <div className="max-w-[700px] mx-auto px-4">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              name="title"
              value={formData.title}
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              name="desc"
              value={formData.desc}
              onChange={formHandler}
              type="text"
              placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسده مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={formData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder="0"
              style={{ width: '100px' }}
            />
          </Form.Group>

          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default AddArticle;
