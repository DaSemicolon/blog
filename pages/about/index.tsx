import { NextPage } from "next";
import MainLayout from "../../layout/main";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/button";
import style from "./index.module.scss";

const About: NextPage = () => (
  <MainLayout fullWidth>
    <Head>
      <title>About Kavindu Wijesuriya</title>
      <meta name="description" content="Kavindu Wijesuriya, Experience & Education. Online CV"/>
    </Head>
    <div className={style.container}>
      <div className={style.hireMeBtn}>
        <Link href="/contact">
          <Button type="PRIMARY">Hire Me</Button>
        </Link>
      </div>
      <section className={[style.section, style.flexCenter].join(" ")}>
        <div className={style.name}>Kavindu Wijesuriya</div>
        <div className={style.subText}>{`${(new Date().getUTCFullYear()) - 2014} years of\n`}</div>
        <div className={style.title}>      
          Experience
        </div>
        <div className={style.scrollIcon}>^</div>
      </section>
      <section className={style.section}>
        <div className={style.horizontalMargins}>
          <div className={style.sectionMain}>
            <div className={style.companyLogo}>
              <a href="https://different.com.au" target="_blank" rel="noreferrer" ><Image src="/images/different.svg" width="100" height="100" /></a>
            </div>
            <div className={style.duration}>since Dec. 2019</div>
            <div className={style.role}>Senior Full Stack Software Engineer</div>
            <div className={style.companyName}>at <span>:Different Technologies</span></div>
          </div>
          <ul className={style.stuffIDid}>
            <li>Lead the mobile team that was responsible for transitioning all mobile apps to React Native.</li>
            <li>Assisted with the development of new functionalities on top of a GraphQL API that was already in operation.</li>
            <li>Assisted in the development of additional features, performance optimizations, and modularization of a TypeScript-based React admin portal.</li>
            <li>Participated in the exploration and development of AWS Lambda functions as a replacement for existing JavaScript scheduled jobs.</li>
          </ul>
        </div>
        <div className={style.scrollIcon}>^</div>
      </section>
      <section className={[style.section, style.horizontalMargins].join(" ")}>
        <div className={style.horizontalMargins}>
          <div className={style.sectionMain}>
            <div className={style.companyLogo}>
              <a href="https://calcey.com" target="_blank" rel="noreferrer" ><Image src="/images/calcey.svg" width="auto" height="100" /></a>
            </div>
            <div className={style.duration}>Jun. 2018 - Nov. 2019</div>
            <div className={style.role}>Senior Software Engineer</div>
            <div className={style.companyName}>at <span>Calcey Technologies</span></div>
          </div>
          <ul className={style.stuffIDid}>
            <li>Assisted in the improvement and deployment of a React Native based booking app which was underperforming.</li>
            <li>Lead the front-end development team for a web application that sells online services. The application was built in React, and I was active in every step of the development process, from design to deployment.</li>
            <li>Lead the front-end team that was in charge of developing a mobile app for food reviews. Microsoft AppCenter&apos;s CodePush service and React Context API were used in the React Native app.</li>
          </ul>
        </div>
        <div className={style.scrollIcon}>^</div>
      </section>
      <section className={[style.section, style.horizontalMargins].join(" ")}>
        <div className={style.horizontalMargins}>
          <div className={style.sectionMain}>
            <div className={style.companyLogo}>
              <a href="https://thiken.com" target="_blank" rel="noreferrer" ><Image src="/images/thiken.jpg" width="100" height="100" /></a>
            </div>
            <div className={style.duration}>Mar. 2015 - May. 2018</div>
            <div className={style.role}>Senior Software Engineer</div>
            <div className={style.companyName}>at <span>Thiken (Pvt) Ltd</span></div>
          </div>
          <ul className={style.stuffIDid}>
            <li>Architected databases and developed REST APIs with C#.NET and MySQL Server. I worked closely with Microsoft Azure infrastructure.</li>
            <li>For a customer in the United States, I contributed to the development of an iOS native video streaming application.</li>
            <li>For a US-based recruitment firm, I assisted with the design, development, and maintenance of a web application written with AngularJS.</li>
          </ul>
        </div>
        <div className={style.scrollIcon}>^</div>
      </section>
      <section className={[style.section, style.horizontalMargins].join(" ")}>
        <div className={style.horizontalMargins}>
          <div className={style.sectionMain}>
            <div className={style.companyLogo}>
              <a href="https://encyteus.com" target="_blank" rel="noreferrer" ><Image src="/images/encyte.jpg" width="100" height="100" /></a>
            </div>
            <div className={style.duration}>May. 2014 - Feb. 2015</div>
            <div className={style.role}>Senior Software Engineer</div>
            <div className={style.companyName}>at <span>Encyte (Pvt) Ltd</span></div>
          </div>
          <ul className={style.stuffIDid}>
            <li>Contributed to the development of cross-platform interactive software for small-scale events. The majority of the apps were created in plain JavaScript and HTML.</li>
            <li>Using PHP and the Codeignighter framework, I assisted with the development of REST APIs for small size apps.</li>
          </ul>
        </div>
        <div className={style.scrollIcon}>^</div>
      </section>
      <section className={[style.section, style.flexCenter].join(" ")}>
        <Image src="/images/ucd.png" width="200" height="48" />
        <div className={style.title}>      
          Education
        </div>
        <div className={style.name}>Bachelor of Computer Science</div>
        <div className={style.subText}>University College Dublin | 2016-2019</div>
      </section>
    </div>
  </MainLayout>
);

export default About;