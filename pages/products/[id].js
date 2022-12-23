// import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { MediaQuery } from "../../components/mediaquery";
import { css } from "@emotion/react";
import Layout from "../../components/article";

const Product = (props) => (
  <Layout>
    <div className="fullscreen">
      <div css={container} className="product">
        <div css={img}>
          <img key={props.product.image} src={props.product.image} />
        </div>
        <div css={details}>
          <div css={detailsInner}>
            <Link href="/">
              <div>
                <div className="go-back">Back to products</div>
              </div>
            </Link>
            <div css={{ marginTop: "32px" }}>
              <span className="category">Protein</span>
            </div>
            <h1 css={{ marginTop: "16px", fontSize: "18px", fontWeight: "700" }}>
              {props.product.name}
            </h1>
            <p css={{ marginTop: "16px" }}>{props.product.details}</p>
            <div css={{ marginTop: "16px" }}>
              <span>Soy Free</span>
              <span>Gluten Free</span>
            </div>
            <div css={qtyPrice}>
              <div css={qty} className="qty">
                <div css={[qtyButton, minus]}>-</div>
                <div>1</div>
                <div css={[qtyButton, add]}>+</div>
              </div>
              <span className="price">{props.product.price}</span>
            </div>
            <div css={{ display: "flex", flexWrap: "wrap", marginTop: "16px" }}>
              <button css={[button, addCart]} className="add-to-cart">
                Add to cart
              </button>
              <button css={[button, subscribe]} className="subscribe">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

Product.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`http://my-json-server.typicode.com/wrongakram/demo/products/${id}`);
  const product = await res.json();
  return { product };
};

export default Product;

const container = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #ffff;

  ${MediaQuery["md"]} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const img = css`
  display: flex;
  width: 100vw;
  height: 40vh;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #dedede;

  img {
    max-width: 45vw;
  }

  ${MediaQuery["md"]} {
    max-width: unset;
    height: 100vh;
  }
`;

const details = css`
  display: flex;
  width: 100vw;
  margin: 0 calc(50% - 50vw);
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #ffff;

  ${MediaQuery["md"]} {
    width: calc(100% + 16px);
    margin: 0 -16px 0 0;
    height: 100vh;
  }
`;

const detailsInner = css`
  display: inline-block;
  width: 90%;
  text-align: left;
  padding: 24px;
`;

const qtyPrice = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const qty = css`
  display: flex;
  align-items: center;
`;

const qtyButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  margin: 8px 16px;
  height: 24px;
  width: 24px;
  border-radius: 100px;
`;

const add = css`
  border: 1px solid #282828;
  cursor: pointer;
`;

const minus = css`
  margin-left: 0;
  background: #dfdfdf;
  color: #787878;
`;

const button = css`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  height: 48px;
  padding: 0 48px;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.06rem;
`;

const addCart = css`
  background: #2d89fa;
  color: #fff;
  font-size: 12px;
`;

const subscribe = css`
  background: transparent;
  color: #424550;
`;
