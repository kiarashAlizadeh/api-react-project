import { Link } from 'react-router-dom';
import './ArticleItem.css';

// bootstrap
import Card from 'react-bootstrap/Card';

// react icons
import { IoTimeOutline } from 'react-icons/io5';
import { TiArrowLeftThick } from 'react-icons/ti';

function ArticleItem({
  title,
  desc,
  image,
  readingTime,
  category,
  writter,
  id,
}) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="py-2">{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Link
            to={`/article/${id}`}
            className="flex items-center hover:cursor-pointer hover:text-pink-400"
          >
            ادامه مقاله
            {'\u00A0'}
            <TiArrowLeftThick size="25px" />
          </Link>
        </Card.Body>
        <Card.Footer className="flex justify-between py-3">
          <span> نویسنده : {writter}</span>
          <span className="flex items-center">
            <IoTimeOutline /> {'\u00A0'} دقیقه :{readingTime}
          </span>
        </Card.Footer>
      </Card>
    </>
  );
}

export default ArticleItem;
