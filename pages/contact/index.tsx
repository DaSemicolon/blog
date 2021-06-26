import { NextPage } from "next";
import MainLayout from "../../layout/main";
import Head from "next/head";
import style from "./index.module.scss";

const Contact: NextPage = () => (
  <MainLayout>
    <Head>
      <title>Contact me</title>
      <meta name="description" content="Contact Kavindu Wijesuriya. Leave your name, email and I will get back to you as soon as possible."/>
    </Head>
    <div className={style.container}>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciT3iV1Cbg0_SV2-heBni5V_y_o8T5pSwbIufHX6pdxq0dzg/viewform?embedded=true&hl=en" width="800" height="800" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe> */}
      <section className={style.section}>
        <div>
          section 1
        </div>
      </section>
      <section className={style.section}>
        <div>
          section 2
        </div>
      </section>
      <section className={style.section}>
        <div>
          section 3
        </div>
      </section>
      <section className={style.section}>
        <div>
          section 4
        </div>
      </section>
    </div>
  </MainLayout>
);

export default Contact;