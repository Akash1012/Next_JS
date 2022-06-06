import Link from "next/link";
import { useRouter } from "next/router";

function ProductList({ productId = 100 }) {
  const router = useRouter();
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <button
        type="button"
        onClick={() =>
          router.push({
            pathname: "product/[productId]/review/[reviewId]",
            query: { productId: 2, reviewId: 4 },
          })
        }
      >
        {" "}
        Product 2
      </button>
      <h2>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h2>

      <h2>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <a>Product 100</a>
        </Link>
      </h2>
    </>
  );
}

export default ProductList;
