import { faLinkedin, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { NextPage } from "next";
import Image from "next/image";
import SocialIcon from "../../components/social-icon";
import MainLayout from "../../layout/main";
import style from "./index.module.scss";


const About: NextPage = () => (
  <MainLayout>
    <div className={style.container}>
      <div className={style.basicInfo}>
        <div className={style.profileImage}>
          <Image src="/images/pp.jpeg" width="200" height="200" />
        </div>
        <div className={style.about}>
          <h1>Kavindu Wijesuriya</h1>
          <p>
            Kavindu is an experienced, highly efficient and reliable professional who has a broad skill set 
            for web application development. He has been working with international teams to solve problems for production 
            engineering teams and to create new applications for startups. Kavindu enjoys working with passionate clients and 
            he cares a lot about the product that he is building.
          </p>
          <div className={style.socialIcons}>
            <SocialIcon icon={faLinkedin} link="https://www.linkedin.com/in/kavinduwijesuriya/" text="LinkedIn" />
            <SocialIcon icon={faTwitter} link="https://twitter.com/da_semicolon" text="Twitter" />
            <SocialIcon icon={faTiktok} link="https://www.tiktok.com/@dasemicolon.dev" text="TikTok" />
          </div>
        </div>
      </div>

    </div>
  </MainLayout>
);

export default About;
