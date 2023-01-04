import Link from "next/link";
import React from "react";
import { MediaQuery } from "../../components/mediaquery";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "../../components/article";
import FirstPageIcon from "@mui/icons-material/FirstPage";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  init: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Product = ({ product }) => {
  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }} variants={fadeInUp} initial="hidden" animate="visible">
        <div>
          <div css={container}>
            <div css={img}>
              <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <Image
                  alt=""
                  key={product.image}
                  src={product.image}
                  transition={{ delay: 0.3 }}
                  width={320}
                  height={320}
                />
              </motion.div>
            </div>
            <div css={details}>
              <motion.div variants={stagger} initial="init" animate="show" css={detailsInner}>
                <Link href="/">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    css={{ position: "relative" }}
                  >
                    <FirstPageIcon variants="contained" color="primary" />
                    <p
                      css={{
                        position: "absolute",
                        top: "41%",
                        transform: "translateY(-50%)",
                        left: "24px",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      Back to products
                    </p>
                  </motion.div>
                </Link>

                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  css={{ marginTop: "16px", fontSize: "18px", fontWeight: "700" }}
                >
                  {product.name}
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  css={{ marginTop: "16px" }}
                >
                  {product.details}
                </motion.p>

                <motion.div variants={fadeInUp} initial="hidden" animate="visible" css={qtyPrice}>
                  <div css={qty}>
                    <div css={[qtyButton, minus]}>-</div>
                    <div>1</div>
                    <div css={[qtyButton, add]}>+</div>
                  </div>
                  <span>{product.price}</span>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  css={{ display: "flex", marginTop: "16px" }}
                >
                  <button css={[button, addCart]}>Add</button>
                  <button css={[button, subscribe]}>Subscribe</button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // 外部APIを呼び出しデータを取得
  const res = await fetch(
    "http://my-json-server.typicode.com/Handai-Yamato/gadget-shop-db/products"
  );
  const products = await res.json();

  // 事前ビルドしたいパスを指定
  const paths = products.map((product) => ({
    params: {
      // ファイル名と合わせる
      id: product.id.toString(),
    },
  }));

  // paths：事前ビルドするパス対象を指定するパラメータ
  // fallback：事前ビルドしたパス以外にアクセスしたときのパラメータ true:カスタム404Pageを表示 false:404pageを表示
  return { paths, fallback: false };
};

// paramsには上記pathsで指定した値が入る（1つずつ）
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://my-json-server.typicode.com/Handai-Yamato/gadget-shop-db/products/${params.id}`
  );

  const product = await res.json();

  // ページコンポーネントにproductとして渡す
  return {
    props: {
      product,
    },
  };
};

// Product.getInitialproducts = async function (context) {
//   const { id } = context.query;
//   const res = await fetch(
//     `http://my-json-server.typicode.com/Handai-Yamato/gadget-shop-db/products/${id}`
//   );
//   const product = await res.json();
//   return { product };
// };

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
  margin: 0 calc(50% - 50vw);
  align-items: center;
  justify-content: center;
  padding: 80px;
  background-color: #c9bebe82;

  img {
    max-width: 80vw;
    border-radius: 1rem;
  }

  ${MediaQuery["md"]} {
    max-width: unset;
    height: 100vh;
    padding: 16px;
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
`;

const detailsInner = css`
  display: inline-block;
  width: 90%;
  max-width: 480px;
  padding: 24px 8px 8px 8px;
  text-align: left;
`;

const qtyPrice = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
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
