import { NextPage } from "next";
import Head from "next/head";
import Button from "../components/button";
import Intro from "../components/intro";
import MainLayout from "../layout/main";
import style from "./index.module.scss";

const Home: NextPage = () =>     {
  return (
    <MainLayout>
      <Head>
        <title>dasemicolon.dev</title>
      </Head>
      <div className={style.container}>
        <div className={style.introContainer}>
          <Intro />
          <Button type="PRIMARY" onClick={(): void => {
            alert("hello");
          }} >Hire Me</Button> 
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
