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
                width={240}
                height={140}
                alt=""
                style={{ objectFit: "contain", borderRadius: "0.6rem", maxHeight: "140" }}
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

  ${MediaQuery["md"]} {
    gap: 16px;
  }

  ${MediaQuery["lg"]} {
    gap: 56px;
  }
`;

const products = css`
  display: flex;
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
  width: 100%;
  min-width: 280px;
  min-height: 300px;
  padding: 8px;
  background: #262627;
  border: 1px solid #333;
  border-radius: 0.2rem;

  ${MediaQuery["md"]} {
    min-width: unset;
    width: calc((100% - 80px) / 3);
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
