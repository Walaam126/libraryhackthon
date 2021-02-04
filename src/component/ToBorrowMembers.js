function ToBorrowMembers({ member }) {
  return (
      <option value={`${member.id}`}>{member.firstName.concat(' ', member.lastName)}</option>
  );
}

export default ToBorrowMembers;
