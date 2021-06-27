import { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../../layout/main";
import style from "./index.module.scss";

const Contact: NextPage = () => (
  <MainLayout>
    <Head>
      <title>Contact Kavindu Wijesuriya</title>
      <meta name="description" content="Contact Kavindu Wijesuriya"/>
    </Head>
    <div className={style.container}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciT3iV1Cbg0_SV2-heBni5V_y_o8T5pSwbIufHX6pdxq0dzg/viewform?embedded=true&hl=en" height="900" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
    </div>
  </MainLayout>
);

export default Contact;
