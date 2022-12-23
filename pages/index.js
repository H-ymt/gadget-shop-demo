import Link from "next/link";
import Layout from "../components/article";
import { MediaQuery } from "../components/mediaquery";
import { css } from "@emotion/react";
import Image from "next/image";

const Home = (props) => (
  <Layout>
    <div css={container}>
      <div className="title">
        <h2>Select a protein</h2>
      </div>
      <div css={products}>
        {props.products.map((product) => (
          <Link key={product.id} href="/products/[id]" as={`/products/${product.id}`}>
            <div css={card}>
              <span className="category">Protein</span>
              <Image
                key={product.image}
                src={product.image}
                width={120}
                height={120}
                alt=""
                style={{ objectFit: "contain" }}
              />
              <div css={productInfo}>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

Home.getInitialProps = async function () {
  const res = await fetch("http://my-json-server.typicode.com/wrongakram/demo/products");
  const data = await res.json();
  return {
    products: data,
  };
};

export default Home;

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 calc(50% - 50vw);
  height: 100dvh;
  max-width: 1540px;
  text-align: center;
  background-color: #dedede;

  ${MediaQuery["md"]} {
    flex-direction: row;
    gap: 16px;
  }

  ${MediaQuery["lg"]} {
    gap: 56px;
  }
`;

const products = css`
  display: flex;
  flex-direction: column;
  align-items: unset;
  gap: 32px;
  margin-top: 32px;

  ${MediaQuery["md"]} {
    gap: 24px;
    flex-direction: row;
  }
`;

const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  width: 100%;
  min-width: 280px;
  min-height: 200px;
  padding: 16px;
  background: #ffff;
  border-radius: 1rem;

  ${MediaQuery["lg"]} {
    max-width: 300px;
  }
`;

const productInfo = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & span {
    font-size: 0.9rem;
  }
`;
