import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}></header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  console.log(siteConfig);
  return (
    <Layout title={`${siteConfig.title}前端`} description="Davont前端工程师">
     
        <HomepageFeatures />
      
    </Layout>
  );
}
