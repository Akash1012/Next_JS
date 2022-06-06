export function Users({ allUsers }) {
  return (
    <>
      <h2>Users</h2>
      {allUsers.map((user) => {
        return (
          <div key={user.id}>
            Name: <b>{user.name}</b>
          </div>
        );
      })}
    </>
  );
}

// export default Users;
