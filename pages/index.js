import Link from "next/link";
import Layout from "../components/article";
import { MediaQuery } from "../components/mediaquery";
import { css } from "@emotion/react";
import Image from "next/image";

const Home = (props) => (
  <Layout>
    <div css={container}>
      <div className="title">
        <h2>Select a gadget</h2>
      </div>
      <div css={products}>
        {props.products.map((product) => (
          <Link css={card} key={product.id} href="/products/[id]" as={`/products/${product.id}`}>
            <div>
              <Image
                key={product.image}
                src={product.image}
                width={180}
                height={200}
                alt=""
                style={{ objectFit: "contain", maxHeight: "140" }}
              />
              <div css={productInfo}>
                <h4 css={{ marginTop: "16px" }}>{product.name}</h4>
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
  const res = await fetch(
    "http://my-json-server.typicode.com/Handai-Yamato/gadget-shop-db/products"
  );
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
  text-align: center;
`;

const products = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;

  ${MediaQuery["md"]} {
    flex-direction: row;
    justify-content: center;
    gap: 24px;
  }
`;

const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  min-width: 280px;
  min-height: 300px;
  padding: 16px;
  background: #262627;
  border: 1px solid #333;
  border-radius: 0.4rem;

  & img {
    width: 240px;
    height: 180px;
    margin-right: auto;
    margin-left: auto;
  }

  ${MediaQuery["md"]} {
    min-width: unset;
    max-width: 380px;
    width: calc((100% - 56px) / 2);
    padding: 16px;
  }
`;

const productInfo = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #ffffffeb;

  & span {
    font-size: 0.9rem;
  }
`;
