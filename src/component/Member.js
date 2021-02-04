import { Link } from "react-router-dom";
import { ImEye } from 'react-icons/im';
function Member({ member }) {
  return (
      <tr>
        <td>{member.firstName} {' '} {member.lastName}</td>
        <td>{member.membership}</td>
        {/* <td>{member.id}</td> */}
          <td>
          <Link to={`/members/${member.slug}`}>
          <ImEye color="blue" size="1.5em"/>
        </Link>
      </td>
    </tr>
  );
}

export default Member;
