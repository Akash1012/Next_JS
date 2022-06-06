// import Users from "../components/users";

import dynamic from "next/dynamic";

const Users = dynamic(
  () => import("../components/users").then((mod) => mod.Users),
  {
    ssr: true,
    loading: () => <h1>Hello Loading ....</h1>,
  }
);

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  //   console.log(users);
  //   if (users) {
  //     return {
  //       redirect: {
  //         destination: "/product",
  //         permanent: false,
  //       },
  //     };
  //   }
  //   if (users) {
  //     return {
  //       notFound: true,
  //     };
  //   }
  return {
    props: {
      allUsers: users,
    },
    // revalidate: 10, //regenerate the build after 10 second again and again
  };
}

function About({ allUsers }) {
  console.log(allUsers);
  return (
    <>
      <Users allUsers={allUsers} />
    </>
  );
}

export default About;
