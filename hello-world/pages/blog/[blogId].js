import { useRouter } from "next/router";

// export async function getStaticPaths() {
//   const paths = ["/blog/1", "/blog/2", "/blog/3"];
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ query, params }) {
//   const { blogId } = params;
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/users/" + blogId
//   );
//   const users = await res.json();
//   return {
//     props: {
//       user: users,
//     },
//   };
// }

export async function getServerSideProps({ query, params }) {
  const { blogId } = query;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + blogId
  );
  const users = await res.json();
  return {
    props: {
      user: users,
    },
  };
}

function BlogId({ user }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading ......</h3>;
  }
  return (
    <>
      <div key={user.id}>
        Name11: <b>{user.name}</b>
      </div>
    </>
  );
}

export default BlogId;
