import { Link } from "react-router-dom";
import { FaTimesCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';

function Book({ book }) {
  return (
      <tr>
            <td>{book.id}</td>
          <td>
              {book.title} <br></br> {book.author}</td>
          <td>{book.genre.join(" - ")}</td>
          <td>{book.available? <FaCheckCircle color="green" size="1.3em"/>: <FaTimesCircle color="red" size="1.3em"/>}</td>
      
          <td>
          <Link to={`/books/${book.slug}`}>
        <ImEye color="blue" size="1.5em"/>
        </Link>
      </td>
    </tr>
  );
}

export default Book;
