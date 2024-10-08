        function getUserLanguage() {
            return navigator.language || navigator.userLanguage;
        }

        const language = getUserLanguage().toLowerCase();
        let currentLanguage = language.startsWith('ru') ? 'ru' : 'en';

        const contentRu = `
         <style>
          .conveythis-widget-languages > div:first-child {
            display: none !important;
          }
          .body-content-m {
            overflow-x: hidden;
          }
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
          * {
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif;
            padding: 0;
            margin: 0;
          }
          a {
            text-decoration: none;
            color: #0e150c !important;
          }
          .bg-header {
            position: relative;
            background: url("https://static.tildacdn.com/tild3565-3135-4438-a634-653165633162/bg-header-new.jpg");
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            padding-top: 60px;
            padding-bottom: 100px;
            padding-left: 8.45%;
            padding-right: 8.45%;
            min-height: 100vh;
          }
          .bg-header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1;
          }
          .header-content-box {
            position: relative;
            z-index: 2;
          }
          .logo-caapr {
            margin-right: 4%;
          }
          .box-nav-logo {
            display: flex;
            margin-bottom: 6%;
          }
          .nav-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: 40px;
            justify-content: space-between;
          }
          .box-date-location {
            display: flex;
            gap: 15px;
            margin-right: 7%;
          }
          .box-smm {
            display: flex;
            gap: 20px;
          }
          .nav-button {
            background: none;
            color: white !important;
            border: 1px solid;
            border-color: white !important;
            padding: 15px 25px;
            border-radius: 5px;
            font-size: 18px;
            font-weight: 700;
            white-space: nowrap;
          }
          .smm-button {
            background: #7fc241 !important;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .box-main-title {
            display: flex;
            align-self: self-start;
            margin-bottom: 25px;
          }
          .main-title-text {
            font-size: 60px;
            font-weight: 700;
            color: white !important;
          }
          .subtitle-header {
            font-size: 50px;
            font-weight: 700;
            color: white !important;
            margin-bottom: 10px;
          }
          .second-img {
            margin-right: 4%;
          }
          .arm-header {
            position: absolute;
            right: 0;
            top: 100px;
            z-index: 7000;
            width: 622px;
            height: 668px;
          }
          .box-buttons {
            display: flex;
            gap: 40px;
            position: relative;
            z-index: 10000;
          }
          .box-buttons-link {
            display: flex;
            justify-content: center;
            width: 370px;
            border-radius: 5px;
            padding-top: 25px;
            padding-bottom: 25px;
            font-size: 18px;
            font-weight: 700;
            background: #ffffff !important;
            box-shadow: 0 0 15px 0 #1d2d0e;
            position: relative;
            z-index: 10000;
          }
          .green {
            background: #7fc241 !important;
          }
          .margin-bottom100px {
            margin-bottom: 5%;
          }
          .location-link:hover {
            color: #0e150c !important;
            background: #ffffff !important;
            transition: all 0.3s;
          }
          .smm-button:hover {
            background: #ffffff !important;
            transition: all 0.3s;
          }
          .box-buttons-link:hover {
            background: #083831 !important;
            color: white !important;
            transition: all 0.3s;
          }
          .box-smm-mobile {
            display: none;
          }
          @media (max-width: 1550px) {
            .arm-header {
              top: 100px;
              z-index: 7000;
              width: 522px;
              height: 568px;
            }
          }
          @media (max-width: 1450px) {
            .arm-header {
              top: 100px;
              z-index: 7000;
              width: 422px;
              height: 468px;
            }
          }
          @media (max-width: 1300px) {
            .box-date-location {
              flex-wrap: wrap;
              max-width: 400px;
              justify-content: space-between;
            }
            .header-content-box {
              padding: 60px;
              transform: translateX(0px);
            }
            .bg-header {
              padding: 0;
            }
            .second-img {
              width: 88px;
              height: 125px;
            }
            .main-title-text {
              font-size: 50px;
            }
            .arm-header {
              width: 307px;
              height: 403px;
              top: 130px;
            }
            .subtitle-header {
              font-size: 40px;
            }
            .margin-bottom100px {
              font-size: 55px;
            }
            .nav-header {
              align-items: flex-start;
            }
            .more-padding {
              padding-left: 30px;
              padding-right: 30px;
            }
            .logo-caapr {
              width: 113px;
              height: 115px;
            }
          }
          @media (max-width: 899px) {
            .box-date-location {
              flex-wrap: wrap;
              max-width: 250px;
              justify-content: space-between;
              margin: 0;
              gap: 6px;
            }
            .box-main-title {
              margin-bottom: 30px;
            }
            .header-content-box {
              padding: 12px;
              padding-top: 30px;
              padding-bottom: 40px;
            }
            .bg-header {
              padding: 0;
              overflow: hidden;
            }
            .box-nav-logo {
              margin: 0;
            }
            .second-img {
              width: 50px;
              height: 72px;
            }
            .main-title-text {
              font-size: 30px;
            }
            .arm-header {
              width: 372px;
              height: 418px;
              top: 105px;
              right: -0px;
              z-index: 1;
            }
            .subtitle-header {
              font-size: 30px;
            }
            .margin-bottom100px {
              font-size: 35px;
            }
            .nav-button {
              font-size: 12px;
              padding: 10px 10px;
              margin: 0;
            }
            .more-padding {
              padding-left: 18px;
              padding-right: 17px;
            }
            .nav-header {
              align-items: flex-start;
            }
            .box-smm {
              display: none;
            }
            .box-buttons {
              flex-direction: column;
              gap: 15px;
            }
            .logo-caapr {
              width: 75px;
              height: 76px;
            }
            .box-buttons-link {
              width: 100%;
              font-size: 16px;
            }
            .box-smm-mobile {
              display: flex;
              flex-wrap: wrap;
              align-items: flex-start;
              gap: 15px;
              margin-bottom: 30px;
            }
            .margin-bottom100px {
              margin-bottom: 55px;
            }
            .first-smm-button {
              width: 100%;
            }
          }
          @media (max-width: 480px) {
            .martop4px {
              margin-top: 4px;
            }
            .arm-header {
              width: 202px;
              height: 248px;
              top: 375px;
              right: -0px;
              z-index: 100;}
              .bg-header {
               max-height: 900px;
               padding-bottom: 30px;
              }
          }
        </style>
        <div class="bg-header">
          <div class="header-content-box">
            <div class="box-nav-logo">
              <img
                src="https://static.tildacdn.com/tild6161-3539-4230-a466-616439343939/logo-caapr.svg"
                alt="logo"
                class="logo-caapr"
              />
              <nav class="nav-header">
                <div class="box-date-location">
                  <a class="nav-button more-padding">25 – 26 сентября</a>
                  <a class="nav-button more-padding">г. Алматы</a>
                  <a class="nav-button location-link martop4px" href=""
                    >ДП «Бакшасарай», КЦДС «Атакент»</a
                  >
                </div>
                <div class="box-smm">
                  <a target="_blank" href="https://www.instagram.com/caaprcom/" class="smm-button"
                    ><img
                      src="https://static.tildacdn.com/tild3436-6138-4437-b434-393630383032/insta.svg"
                      alt="insta"
                  /></a>
                  <a target="_blank" href="https://wa.me/7717138834" class="smm-button"
                    ><img
                      src="https://static.tildacdn.com/tild3362-3864-4661-b238-363137623064/phone-icon.svg"
                      alt="phone"
                  /></a>
                  <a href="mailto:info@caapr.kz" class="smm-button"
                    ><img
                      src="https://static.tildacdn.com/tild3236-6464-4666-b563-376138303739/mail-icon.svg"
                      alt="mail"
                  /></a>
                </div>
              </nav>
            </div>
            <div class="box-main-title">
              <img
                src="https://static.tildacdn.com/tild3833-6137-4239-b665-643836666339/2_1.svg"
                alt="second"
                class="second-img"
              />
              <h1 class="main-title-text">
                Конференция <br />
                ЦААПР
              </h1>
            </div>
            <p class="subtitle-header">и Международная выставка <br /></p>
            <p class="main-title-text margin-bottom100px">GREEN SPACES EXPO 2024</p>
            <div class="box-smm-mobile">
              <div class="first-smm-button">
                <a target="_blank" href="https://www.instagram.com/caaprcom/" class="smm-button"
                  ><img
                    src="https://static.tildacdn.com/tild3436-6138-4437-b434-393630383032/insta.svg"
                    alt="insta"
                /></a>
              </div>
              <a target="_blank" href="https://wa.me/7717138834" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3362-3864-4661-b238-363137623064/phone-icon.svg"
                  alt="phone"
              /></a>
              <a href="mailto:info@caapr.kz" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3236-6464-4666-b563-376138303739/mail-icon.svg"
                  alt="mail"
              /></a>
            </div>
            <div class="box-buttons">
              <a
                class="box-buttons-link green"
                href="#popup:conference-registration"
                >Принять участие в мероприятиях
              </a>
            </div>
          </div>
          <img
            src="https://static.tildacdn.com/tild6361-3962-4630-b139-666131323062/image_1_1.png"
            alt="arm"
            class="arm-header"
          />
        </div> <style>
          .secondslide-container {
            padding: 5.5% 8.45%;
          }
    
          .secondslide-bg-layer {
            min-height: 790px;
            position: relative;
            background: url("https://static.tildacdn.com/tild6430-3264-4139-b836-326139366331/___2.png");
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
            background-position: 0% 40%;
            padding: 20px 10px 50px 10px;
          }
          .secondslide-bg-layer::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              360deg,
              rgba(8, 56, 49, 1) 0%,
              rgba(8, 56, 49, 0.7049194677871149) 10%,
              rgba(8, 56, 49, 0.5956757703081232) 20%,
              rgba(8, 56, 49, 0.19791666666666663) 30%,
              rgba(8, 56, 49, 0) 40%
            );
            z-index: 1;
            border-radius: 10px;
          }
          .secondslide-title {
            color: #083831 !important;
            font-weight: 700;
            font-size: 50px;
            margin-bottom: 30px;
            position: relative;
            z-index: 10;
          }
          .secondslide-subtitle {
            color: #418500 !important;
            font-size: 30px;
            font-weight: 700;
            max-width: 620px;
          }
          .secondslide-divider {
            height: 140px;
            width: 2px;
            background: #7fc241;
          }
          .seconslide-info-box {
            z-index: 10;
            position: absolute;
            bottom: 40px;
            width: 100%;
            display: flex;
            gap: 8%;
            justify-content: center;
          }
          .seconslide-info-card {
            text-align: center;
          }
          .seconslide-info-card-title {
            color: white !important;
            font-size: 70px;
            font-weight: 700;
            margin-bottom: 15px;
          }
          .seconslide-info-card-subtitle {
            color: white !important;
            font-size: 18px;
            font-weight: 600;
          }
          @media (max-width: 1200px) {
            .secondslide-bg-layer {
              background-position: 70%;
            }
          }
          @media (max-width: 610px) {
            .secondslide-container{
              padding: 50px 12px;
            }
            .seconslide-info-box {
              flex-direction: column;
              align-items: flex-start;
              gap: 15px;
              display: flex;
            }
            .seconslide-info-card {
              text-align: left;
              padding-left: 20px;
            }
            .secondslide-title {
              font-size: 30px;
              margin-bottom: 20px;
            }
            .secondslide-bg-layer {
              padding-top: 0px;
              padding-right: 60px;
            }
            .secondslide-bg-layer::before {
              background: linear-gradient(
                360deg,
                rgba(8, 56, 49, 1) 0%,
                rgba(8, 56, 49, 0.7049194677871149) 10%,
                rgba(8, 56, 49, 0.5956757703081232) 30%,
                rgba(8, 56, 49, 0.19791666666666663) 50%,
                rgba(8, 56, 49, 0) 70%
              );
              z-index: 1;
            }
            .secondslide-bg-layer {
              background-position: 80%;
            }
            .secondslide-subtitle {
              font-size: 16px;
            }
    
            .seconslide-info-card-title {
              color: white !important;
              font-size: 50px;
              font-weight: 700;
              margin-bottom: 5px;
            }
            .seconslide-info-card-subtitle {
              color: white !important;
              font-size: 16px;
              font-weight: 600;
            }
            .secondslide-divider {
              height: 100px;
              transform: rotate(90deg);
            }
            .displaynone600px {
              display: none;
            }
          }
    
          @media (max-width: 450px) {
          }
        </style>
        <div id="tema-2-conf" class="secondslide-container">
          <div class="secondslide-bg-layer">
            <h2 class="secondslide-title">Тема II Конференции:</h2>
            <p class="secondslide-subtitle">
              Современные подходы и материалы в благоустройстве, производстве
              растений и озеленении
            </p>
            <div class="seconslide-info-box">
              <div class="seconslide-info-card">
                <p class="seconslide-info-card-title">12</p>
                <p class="seconslide-info-card-subtitle">
                  стран <br class="displaynone600px" />
                  участниц
                </p>
              </div>
              <div class="secondslide-divider displaynone600px"></div>
              <div class="seconslide-info-card">
                <p class="seconslide-info-card-title">30</p>
                <p class="seconslide-info-card-subtitle">
                  известных <br class="displaynone600px" />
                  спикеров
                </p>
              </div>
              <div class="secondslide-divider displaynone600px"></div>
              <div class="seconslide-info-card">
                <p class="seconslide-info-card-title">30</p>
                <p class="seconslide-info-card-subtitle">
                  панельных сессий <br />
                  и мастер-классов
                </p>
              </div>
            </div>
          </div>
        </div> <style>
          .text-align-center {
            text-align: center;
          }
          .video-container-desktop {
            padding: 0% 14% 5.5% 14%;
          }
          .video-iframe-desktop {
            border-radius: 10px;
            width: 100%;
            height: 100%;
            min-height: 600px;
          }
          .video-iframe-mobile {
            width: 100%;
            height: 500px;
            display: none;
            border-radius: 10px;
          }
          @media (max-width: 600px) {
            .video-container-desktop{
              padding: 0px 12px 50px 12px;
            }
            .video-iframe-mobile {
              display: block;
            }
            .video-iframe-desktop {
              display: none;
            }
          }
        </style>
        <div id="video-container-desktop" class="video-container-desktop">
          <h2 class="secondslide-title text-align-center">Видео-анонс</h2>
          <iframe
            class="video-iframe-desktop"
            src="https://www.youtube.com/embed/G2Ui0ZRUC0g?si=-aEgH_t-Zxv1nyks"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div class="video-container-mobile">
            <iframe
              class="video-iframe-mobile"
              src="https://www.youtube.com/embed/Vz7NMwEx0YU?si=TopUWbUDwIieSuuY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div> <style>
            * {
              box-sizing: border-box;
              font-family: "Montserrat", sans-serif;
              padding: 0;
              margin: 0;
            }
            a {
              text-decoration: none;
              color: #0e150c !important;
            }
            .exhibition-container {
              margin-top: 30px;
            }
            .exhibition-info-card {
              background: none;
              color: #0a381c !important;
              border: 1px solid;
              border-color: #0a381c !important;
              padding: 15px 25px;
              border-radius: 7px;
              font-size: 18px;
              font-weight: 700;
              white-space: nowrap;
              margin-top: 27px;
            }
            .top-box-info {
              display: flex;
              gap: 25px;
              align-items: self-start;
              padding-left: 8.45%;
              padding-right: 8.45%;
              background: #d7f0fc;
              max-height: 103px;
              justify-content: space-between;
            }
            .top-box-info img {
              margin-right: 10%;
              width: 197px;
              height: 100%;
            }
            .bottom-box-info {
              background: #083831;
              padding-top: 8%;
              padding-left: 8.45%;
              padding-right: 8.45%;
              padding-bottom: 4%;
              display: flex;
              gap: 7%;
              justify-content: space-between;
            }
            .bottom-box-info-left,
            .bottom-box-info-right {
              max-width: 700px;
            }
            .exhibition-title,
            .exhibition-features-card-title {
              color: white !important;
              font-size: 50px;
              font-weight: 700;
            }
            .exhibition-subtitle {
              font-size: 30px;
              font-weight: 600;
              color: white !important;
            }
            .exhibition-text,
            .exhibition-features-card-text {
              font-size: 18px;
              font-weight: 400;
              color: white !important;
            }
            .exhibition-title {
              margin-bottom: 20px;
              max-width: 600px;
              white-space: nowrap;
            }
            .exhibition-subtitle,
            .exhibition-text {
              margin-bottom: 40px;
              max-width: 600px;
            }
            .exhibition-features {
              display: flex;
              max-width: 500px;
              gap: 100px;
              position: relative; /* Добавляем для позиционирования псевдоэлемента */
            }
            .exhibition-features:before {
              content: "";
              position: absolute;
              left: 68%;
              top: 20%;
              bottom: 0;
              width: 2px;
              height: 140px;
              background-color: #7fc241;
            }
            .exhibition-features-card-title,
            .exhibition-features-card-text {
              white-space: nowrap;
            }
            .exhibition-features-right,
            .exhibition-features-left {
              gap: 20px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            }
            .exhibition-box-buttons {
              display: flex;
              gap: 15px;
              width: 100%;
            }
            .exhibition-box-buttons-link {
              display: flex;
              justify-content: center;
              width: 350px;
              border-radius: 5px;
              padding-top: 25px;
              padding-bottom: 25px;
              font-size: 18px;
              font-weight: 700;
              background: #ffffff !important;
              box-shadow: 0 0 15px 0 #1d2d0e;
            }
            .exhibition-box-buttons-link-green {
              background: #7fc241 !important;
              width: 270px;
            }
      
            .exhibition-box-buttons-link:hover {
              background: #083831 !important;
              color: white !important;
              transition: all 0.3s;
            }
            .bottom-box-info-right img {
              width: 500px;
              height: 240px;
              margin-bottom: 35px;
            }
            .displayonlessthan400px {
              display: none;
            }
            .view-on-mobile {
              display: none;
            }
            @media (max-width: 1360px) {
              .exhibition-text,
              .exhibition-features-card-text,
              .exhibition-info-card {
                font-size: 16px;
              }
              .exhibition-subtitle {
                font-size: 25px;
              }
              .exhibition-title,
              .exhibition-features-card-title {
                font-size: 40px;
              }
              .exhibition-features:before {
                left: 60%;
              }
            }
            @media (max-width: 1275px) {
              .bottom-box-info {
                gap: 5%;
              }
              .bottom-box-info-right img {
                width: 440px;
                height: 212px;
              }
              .exhibition-features {
                gap: 50px;
              }
              .exhibition-features:before {
                left: 57%;
              }
            }
            @media (max-width: 1223px) {
              .exhibition-features:before {
                display: none;
              }
            }
            @media (max-width: 1200px) {
              .exhibition-features:before {
                display: none;
              }
              .top-box-info img {
                margin-right: 7%;
              }
              .exhibition-box-buttons {
                flex-direction: column;
              }
              .exhibition-box-buttons-link-green {
                width: 350px;
              }
            }
            @media (max-width: 1042px) {
             
              .bottom-box-info {
                flex-direction: column;
                gap: 40px;
                padding-top: 11%;
              }
              .bottom-box-info-right img {
                width: 500px;
                height: 240px;
              }
      
              .bottom-box-info-right {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }
              .top-box-info {
                flex-direction: column;
                justify-content: center;
                max-height: 340px;
                gap: 20px;
                padding-top: 30px;
              }
              .top-box-info img {
                order: 3;
                margin: 0 auto;
                text-align: center;
                transform: translateY(52.3px);
              }
              .exhibition-info-card {
                margin-top: 0;
                width: 100%;
                text-align: center;
                transform: translateY(52.5px);
              }
              .bottom-box-info {
                padding-bottom: 60px;
              }
            }
            @media (max-width: 860px) {
              .bottom-box-info {
                padding-top: 15%;
              }
            }
            @media (max-width: 650px) {
              .bottom-box-info {
                padding-top: 25%;
              }
              .bottom-box-info-right img {
                width: 100%;
                height: auto;
              }
              .exhibition-text,
              .exhibition-features-card-text,
              .exhibition-info-card {
                font-size: 16px;
              }
              .exhibition-subtitle {
                font-size: 20px;
              }
              .exhibition-title,
              .exhibition-features-card-title {
                font-size: 30px;
              }
              .exhibition-box-buttons-link {
                width: 100%;
              }
            }
            @media (max-width: 480px) {
              .top-box-info {
                max-height: 266px;
                gap: 10px;
              }
              .exhibition-features {
                gap: 20px;
              }
              .exhibition-features-card-title {
                font-size: 25px;
              }
              .exhibition-features-card-text {
                white-space: wrap;
                font-size: 14px;
              }
              .displayonlessthan400px {
                display: block;
              }
              .exhibition-info-card {
                font-size: 12px;
                padding-top: 10px;
                padding-bottom: 10px;
              }
              .exhibition-features-right,
              .exhibition-features-left {
                justify-content: space-between;
              }
            }
            @media (max-width: 600px) {
              .bottom-box-info {
                padding-top: 120px;
                padding-left: 12px;
                padding-right: 12px;
              }
              .top-box-info {
                padding-left: 12px;
                padding-right: 12px;
              }
              .exhibition-title {
                white-space: wrap;
              }
              .view-on-mobile {
                display: block
              };
            }
          </style>
          <div id="exhibition" class="exhibition-container">
            <div class="top-box-info">
              <img
                src="https://static.tildacdn.com/tild3936-6261-4565-a633-336566313661/__.png"
                alt="logogo"
              />
              <a class="exhibition-info-card">25 – 26 сентября</a>
              <a class="exhibition-info-card">Время посещения 9:00 - 18:00</a>
              <a class="exhibition-info-card">Вход свободный</a>
            </div>
            <div class="bottom-box-info">
              <div class="bottom-box-info-left">
                <h2 class="exhibition-title">
                  Международная <br />
                  профильная <br class="displayonlessthan400px" />
                  выставка
                </h2>
                <h3 class="exhibition-subtitle">
                  Благоустройство общественных и частных территорий,
                  питомниководство, озеленение
                </h3>
                <p class="exhibition-text">
                  Ежегодная площадка для сотрудничества профессионалов зеленой
                  отрасли и ее партнеров
                </p>
                <div class="exhibition-box-buttons">
                  <a
                    class="exhibition-box-buttons-link"
                    href="#popup:conference-registration"
                    >Принять участие в выставке</a
                  >
                  <a target="_blank"
                    class="exhibition-box-buttons-link exhibition-box-buttons-link-green"
                    href="https://drive.google.com/file/d/1-Y7bjfvHkNy5IpsxaJTdPojJL2oHj8ZD/view"
                    >Скачать презентацию
                  </a>
                </div>
              </div>
              <div class="bottom-box-info-right">
                <img
                  src="https://static.tildacdn.com/tild3162-3161-4631-b339-626430316337/image_13_1.png"
                  alt="people"
                />
                <div class="exhibition-features">
                  <div class="exhibition-features-left">
                    <div class="exhibition-features-card">
                      <p class="exhibition-features-card-title">2000 кв. м.</p>
                      <p class="exhibition-features-card-text">
                        Общая площадь экспозиции
                      </p>
                    </div>
                    <div class="exhibition-features-card">
                      <p class="exhibition-features-card-title">2000+</p>
                      <p class="exhibition-features-card-text">Посетителей</p>
                    </div>
                  </div>
                  <div class="exhibition-features-right">
                    <div class="exhibition-features-card">
                      <p class="exhibition-features-card-title">90+</p>
                      <p class="exhibition-features-card-text">Экспонентов</p>
                    </div>
                    <div class="exhibition-features-card">
                      <p class="exhibition-features-card-title">18</p>
                      <p class="exhibition-features-card-text">
                        городов <br class="view-on-mobile"> Казахстана
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> <style>
            .catalog-container {
              padding: 5.5% 8.45% 5.5% 8.45%;
            }
            .catalog-title {
              font-size: 50px;
              color: #083831 !important;
              text-align: center;
              font-weight: 700;
              margin-bottom: 50px;
            }
            .catalog-button {
              text-align: center;
              display: flex;
              justify-content: center;
              max-width: 700px;
              border-radius: 5px;
              padding-top: 25px;
              padding-bottom: 25px;
              padding-left: 15px;
              padding-right: 15px;
              font-size: 18px;
              font-weight: 700;
              background: #7fc241 !important;
              box-shadow: 0 0 15px 0 #1d2d0e;
              margin: 50px auto;
            }
            .catalog-button:hover {
              background: #083831 !important;
              color: white !important;
              transition: all 0.3s;
            }
            .catalog-text {
              text-align: center;
              font-size: 18px;
              font-weight: 400;
            }
            @media (max-width: 600px) {
              .catalog-container {
                padding: 50px 12px;
              }
              .catalog-title {
                font-size: 30px;
              }
            }
          </style>
          <div class="catalog-container">
            <p class="catalog-title">Используйте эти контакты в своем бизнесе</p>
            <a target="_blank" href="https://greenspaces.kz/catalog" class="catalog-button"
              >Каталог экспонентов прошлой выставки (2023г.)</a
            >
            <p class="catalog-text">В октябре на сайте появится каталог 2024 г.</p>
            <br>
            <p class="catalog-text">На сегодняшний день экспонентами выставки являются представители Казахстана, Узбекистана, Кыргызстана,<br> России, Беларуси, Нидерландов, Польши, Италии, Бельгии, Литвы, Голландии, Германии, Турции и др. стран.</p>
          </div>   <style>    
          .partners {
            padding-top: 100px;
            padding-bottom: 100px;
            padding-left: 8.45%;  
            padding-right: 8.45%;
            background-color: #F7F5F5;
          }
          .partners-content-box {
            display: flex;
            flex-direction: column;
            align-items: center;    
            justify-content: space-between;  
            width: 100%;
            
          }
          .partners-title {
            color: #083831 !important;
            font-size: 50px;
            font-weight: 700;
            margin-bottom: 50px;
          }
          .partners-logo-box {
            display: flex;
            justify-content: center;
            gap: 90px;
            margin-bottom: 50px;
          }
          .partner-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            justify-content: space-between;
            transition: 0.3s all;
          }
          .partner-card:hover {
            cursor: pointer;
            transform: scale(1.15);
          }
          .partner-card img {
            max-height: 100px;
          }
          .partner-card-title {
            font-size: 18px;
            font-weight: 700;
          }
          .partners-bottom-text {
            font-size: 18px;
            font-weight: 400;
            text-align: center;
            max-width: 800px;
          }
          @media (max-width: 960px) {
            .partners-logo-box {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 610px) {
            .partners-title {
              text-align: center;
              font-size: 30px;
            }
            .order-first-mobile {
              order: -1;
            }
            .partners-logo-box {
              gap: 30px;
            }
            .partners-bottom-text {
              padding-left: 15px;
              padding-right: 15px;
              font-size: 16px;
            }
            .lukomorie {
              width: 340px;
            }
            .partners {
              padding-top: 50px;
              padding-bottom: 50px;
            }
          }
        </style>
        <div class="partners">
          <div class="partners-content-box">
            <p class="partners-title">Нас поддерживают</p>
            <div class="partners-logo-box">
              <a target="_blank" href="https://www.instagram.com/lukomorye_kz/" class="partner-card order-first-mobile">
                <p class="partner-card-title">Генеральный спонсор</p>
                <img
                  class="lukomorie"
                  src="https://static.tildacdn.com/tild3965-6264-4364-a264-633832313861/lukomorie-new.svg"
                  alt="lukomorie"
                />
              </a>
              <a target="_blank" href="https://vzto-irwin.ru/" class="partner-card padding-bottom20px">
                <p class="partner-card-title">Деловой спонсор</p>
                <img
                  src="https://static.tildacdn.com/tild3333-3130-4663-a661-356539626264/cd915114-5838-474b-b.svg"
                  alt="irwin"
                />
              </a>
            </div>
            <p class="partners-bottom-text">
              Если вы хотите стать партнером или спонсором конференции и выставки,
              свяжитесь с нами, мы обсудим детали сотрудничества.
            </p>
          </div>
        </div>        <style> 
         .program-container {
             padding: 5.5% 8.45% 0px 8.45%;
             display: flex;
             flex-direction: column;
             align-items: center;
         }
         .program-title {
             font-size: 50px;
             color: #083831!important;
             text-align: center;
             font-weight: 700;
             margin-bottom: 50px;
         }
         .program-date {
             width: 100%;
             border-radius: 5px;
             font-size: 18px;
             background: #083831;
             color: #ffffff;
             margin-bottom: 50px;
             text-align: center;
             padding: 10px;
             display: flex;
             justify-content: center;
             align-items: center;
             gap: 10px;
          }
          .program-date span {
             font-size: 30px;
          }
          .program-date b {
             font-weight: 600;
             font-size: 30px;
          }
          .program-text {
             font-size: 18px;
             font-weight: 600;
          }
          .program-accordion {
             width: 100%;
          }
          .accordion-information {
             font-size: 30px;
             padding: 50px;
             background: #fff;
             border-radius: 10px;
             box-shadow: 0 0 9px #989191;
             width: 100%;
             transform: translateY(-20px);
          }
          .program-choose-place {
             display: flex;
             justify-content: center;
             align-items: center;
             color: #000;
             background: #fff;
             padding: 25px;
             padding-bottom: 40px;
             border-radius: 10px;
             border: 1px solid #7FC241;
             width: 50%;
             cursor: pointer;
          }
          .program-button-box {
             display: flex;
             gap: 20px;
             justify-content: space-between;
             width: 100%;
          }
          .active-accordion {
             background: #7FC241;
          }
          .program-top-part {
             margin-bottom: 50px;
             width: 100%;
          }
          @media (max-width: 600px) { 
             .program-container {
                 padding: 50px 12px 0px 12px;
             }
             .program-title {
                 font-size: 30px;
             }
             .accordion-information  {
                 font-size: 18px;
             }
             .program-text {
                 font-size: 12px;
             }
             .program-date {
             font-size: 12px;
             margin-bottom: 25px;
          }
             .program-date span {
             font-size: 18px;
          }
          .program-date b {
             font-weight: 600;
             font-size: 18px;
          }
          .program-top-part {
             margin-bottom: 25px;
          }
          .program-choose-place {
             padding: 15px 15px 30px 15px;
          }
          .accordion-information {
             box-shadow: 0 0 4.5px #989191;
          }
         
          }
         </style>
         <div id="program" class="program-container">
             <div class="program-top-part">
                 <p class="program-title">Программа Конференции</p>
                 <div class="program-date"><b>25.09</b> среда <span>&#8595</span> </div>
                 <p class="program-text">На темы по современному и эффективному производству посадочного материала, благоустройству и озеленению городов будут выступать известные спикеры из разных стран – мэтры урбанистики, питомниководства, благоустройства,  озеленения, ландшафтной архитектуры. <br><br>
                     
                     Лекции будут проходить одновременно в двух залах. Обучаемые смогут выбирать наиболее актуальные для них темы. </p>
                 </div>
                 <div class="program-accordion">
                     <div class="program-button-box">
                         <div class="program-choose-place active-accordion">Зал №1</div>
                         <div class="program-choose-place">Зал №2</div>
                     </div>
                     <div class="accordion-information">
                         <i>Программа в разработке и появится здесь в ближайшее время</i>
                     </div>
                 </div>
             </div>
      
     
         <div class="program-container">
             <div class="program-top-part">
                 <div class="program-date"><b>26.09</b> четверг <span>&#8595</span> </div>
                 <p class="program-text">Лекции будут проходить одновременно в двух залах. Обучаемые смогут выбирать наиболее актуальные для них темы.</p>
             </div>
             <div class="program-accordion">
                 <div class="program-button-box">
                     <div class="program-choose-place active-accordion">Зал №1</div>
                     <div class="program-choose-place">Зал №2</div>
                 </div>
                 <div class="accordion-information">
                     <i>Программа в разработке и появится здесь в ближайшее время</i>
                 </div>
             </div>
         </div>    <style>
          .practice-container {
            padding: 5.5% 8.45%;
            padding-bottom: 0px;
          }
    
          .practice-bg-layer {
            position: relative;
            padding: 50px 50px 550px 50px;
            background: url("https://static.tildacdn.com/tild3662-3831-4236-a233-356262356231/DSC01987_1.png");
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
          }
          .practice-bg-layer::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(8, 56, 49, 1) 0%,
              rgba(8, 56, 49, 0.7049194677871149) 10%,
              rgba(8, 56, 49, 0.5956757703081232) 30%,
              rgba(8, 56, 49, 0.19791666666666663) 40%,
              rgba(8, 56, 49, 0) 60%
            );
            z-index: 1;
            border-radius: 10px;
          }
          .practice-title {
            color: #ffffff !important;
            font-weight: 700;
            font-size: 50px;
            margin-bottom: 50px;
            position: relative;
            z-index: 10;
          }
          .practice-info-cards {
            position: relative;
            z-index: 1000;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: space-between;
            margin-bottom: 50px;
          }
          .practice-card {
            color: white !important;
            border: 1px solid white;
            border-radius: 5px;
            padding: 15px 20px;
            font-weight: 600;
            font-size: 18px;
            text-align: center;
          }
          @media (max-width: 1420px) {
            .practice-card {
              font-size: 14px;
              padding: 10px 15px;
            }
            .practice-title {
              font-size: 40px;
            }
            .practice-bg-layer {
              padding: 50px 30px 270px 30px;
            }
          }
          @media (max-width: 1095px) {
            .practice-info-cards {
              justify-content: flex-start;
            }
          }
          @media (max-width: 610px) {
            .practice-info-cards  {
              gap: 10px;
            }
            .practice-card {
              font-size: 12px;
            }
            .practice-title {
              font-size: 30px;
            }
            .practice-bg-layer {
              padding: 50px 10px 270px 10px;
            }
            .practice-bg-layer::before {
              background: linear-gradient(
                180deg,
                rgba(8, 56, 49, 1) 0%,
                rgba(8, 56, 49, 0.7049194677871149) 20%,
                rgba(8, 56, 49, 0.5956757703081232) 50%,
                rgba(8, 56, 49, 0.19791666666666663) 60%,
                rgba(8, 56, 49, 0) 70%
              );
              z-index: 1;
            }
            .practice-bg-layer {
              background-position: 60%;
            }
            .practice-card {
              width: 100%;
            }
            .practice-container {
              padding-top: 40px;
              padding-left: 12px;
              padding-right: 12px;
            }
          }
        </style>
        <div id="practice" class="practice-container">
          <div class="practice-bg-layer">
            <div class="practice-info-cards">
              <div class="practice-card">27 сентября</div>
              <div class="practice-card">Питомник «Лукоморье»</div>
              <div class="practice-card">Поселок Панфилово</div>
              <div class="practice-card">В рамках Конференции ЦААПР</div>
            </div>
            <h2 class="practice-title">
              День практики и мастер-классов <br />
              «GREEN EXPERT»
            </h2>
          </div>
        </div>
        <div class="program-container">
          <div class="program-top-part">
              <div class="program-date"><b>27.09</b> пятница <span>&#8595</span> </div>
              <p class="program-text">Лекторы из числа спикеров предыдущих дней конференции, а также специально приглашенные эксперты, проведут практические занятия касающиеся тем современного производства посадочного материала и работы с ним на объектах озеленения. 
                      <br> <br>
                  Тематика рассчитана преимущественно на профессионалов зеленой отрасли - питомниководов, озеленителей.</p>
          </div>
              <div class="accordion-information">
                  <i>Программа в разработке и появится здесь в ближайшее время</i>
              </div>
      </div>  <style>
            a {
              text-decoration: none;
            }
            .countdown-container {
              text-align: center;
              max-width: 1200px;
              margin: 0 auto;
              margin-bottom: 5.5%;
              padding-top: 5.5%;
            }
            .countdown-title {
              font-size: 50px;
              margin-bottom: 50px;
              font-weight: 700;
              color: #083831 !important;
            }
            .countdown {
              display: flex;
              justify-content: center;
              gap: 10px;
              margin-bottom: 50px;
            }
            .countdown-element {
              background: #7fc241 !important;
              color: #000 !important;
              padding: 20px;
              border-radius: 13px;
              font-size: 32px;
              text-align: center;
              display: flex;
              flex-direction: column;
              width: 180px;
              height: 180px;
            }
            .countdown-element span {
              font-size: 30px;
              font-weight: 600;
            }
            .separator {
              font-size: 90px;
              display: flex;
              align-items: center;
              color: #7fc241 !important;
              padding-bottom: 15px;
            }
            .top-part-time {
              font-size: 70px;
              color: #0e150c !important;
              font-weight: 700;
            }
            .box-buttons-link-countdown {
              display: flex;
              justify-content: center;
              width: 370px;
              border-radius: 5px;
              padding-top: 25px;
              padding-bottom: 25px;
              font-size: 18px;
              font-weight: 700;
              background: #083831 !important;
              color: white !important;
              box-shadow: 0 0 6px rgba(37, 34, 34, 0.75);
            }
            .green-countdown {
              background: #7fc241 !important;
              color: #0e150c !important;
            }
            .box-buttons-link-countdown:hover {
              background: #ffffff !important;
              color: #0e150c !important;
              transition: all 0.3s;
            }
            .countdown-button-box {
              display: flex;
              gap: 40px;
              justify-content: center;
            }
      
            @media (max-width: 660px) {
              .countdown-title {
                font-size: 30px;
              }
              .countdown-element {
                width: 100px;
                height: 100px;
                font-size: 20px;
              }
              .countdown-element span {
                font-size: 20px;
              }
              .top-part-time {
                font-size: 30px;
              }
              .separator {
                font-size: 50px;
              }
              .countdown-button-box {
                flex-wrap: wrap;
                gap: 15px;
              }
            }
            @media (max-width: 450px) {
              .countdown-container {
                padding: 15px;
                margin-bottom: 50px;
                padding-top: 40px;
              }
              .countdown-element {
                width: 60px;
                height: 60px;
                font-size: 15px;
                justify-content: center;
                align-items: center;
              }
              .countdown-element span {
                font-size: 14px;
              }
              .top-part-time {
                font-size: 18px;
              }
              .separator {
                font-size: 35px;
              }
            }
          </style>
          <div class="countdown-container">
            <div class="countdown-title">
              Успейте принять участие в мероприятиях
            </div>
            <div class="countdown" id="countdown">
              <div class="countdown-element">
                <div class="top-part-time" id="days">00</div>
                <span class="days-seconds">дней</span>
              </div>
              <div class="separator">:</div>
              <div class="countdown-element">
                <div class="top-part-time" id="hours">00</div>
                <span class="days-seconds">часов</span>
              </div>
              <div class="separator">:</div>
              <div class="countdown-element">
                <div class="top-part-time" id="minutes">00</div>
                <span class="days-seconds">минут</span>
              </div>
              <div class="separator">:</div>
              <div class="countdown-element">
                <div class="top-part-time" id="seconds">00</div>
                <span class="days-seconds">секунд</span>
              </div>
            </div>
            <div class="countdown-button-box">
              <a
                class="box-buttons-link-countdown green-countdown"
                href="#popup:conference-registration"
                >Стать участником мероприятий
              </a>
            </div>
          </div>  <style>
             a {
               text-decoration: none;
             }
             .excursion-container {
               padding: 0px 8.45% 5.5% 8.45%;
               display: flex;
               flex-direction: column;
               align-items: center;
             }
             .excursion-left-img {
               background-repeat: no-repeat;
               padding-left: 5%;
               padding-right: 5%;
               padding-top: 3%;
               height: 639px;
               width: 593px;
               border-radius: 10px;
               background-image: url("https://static.tildacdn.com/tild6464-6363-4633-a435-326266356135/1303_1.png");
               background-size: cover;
               background-position: 100% 0;
               min-width: 330px;
             }
             .excursion-title {
               font-size: 50px;
               font-weight: 700;
               color: #083831 !important;
               margin-bottom: 50px;
             }
             .excursion-left-text-box {
               display: flex;
               gap: 20px;
               flex-wrap: wrap;
             }
             .excursion-left-infobox {
               color: #083831 !important;
               background: #ffffff !important;
               font-size: 18px;
               font-weight: 700;
               padding: 15px 20px;
               border-radius: 5px;
             }
             .excursion-container-content {
               display: flex;
               justify-content: space-between;
               gap: 3%;
               margin-bottom: 30px;
               width: 100%;
             }
             .excursion-right-img {
               display: flex;
               flex-direction: column;
               gap: 20px;
               justify-content: space-between;
             }
             .excursion-right-img img {
               object-fit: cover;
             }
             .excursion-iconbox {
               display: flex;
               align-items: center;
               justify-content: space-between;
               width: 100%;
               gap: 20px;
               padding: 30px 50px;
               background: #083831 !important;
               border-radius: 10px;
               padding-right: 10%;
               margin-bottom: 30px;
             }
             .excursion-iconbox-title {
               color: #ffffff !important;
               font-size: 30px;
               font-weight: 700;
               margin-right: 9%;
               white-space: nowrap;
             }
             .excursion-iconbox-card-text {
               color: #ffffff !important;
               font-size: 18px;
               font-weight: 500;
             }
             .excursion-iconbox-card {
               display: flex;
               flex-direction: column;
               align-items: center;
               gap: 6px;
             }
             .excursion-divider {
               background: #7FC241;
               height: 100px;
               width: 2px;
             }
             .excurison-icon-container {
               display: flex;
               gap: 10px;
               align-items: center;
               justify-content: space-between;
               width: 100%;
             }
             .excursion-button {
               display: flex;
               justify-content: center;
               align-items: center;
               padding: 15px 25px;
               color: #083831 !important;
               font-size: 18px;
               font-weight: 600;
               background: #ffffff !important;
               border: 1px solid #083831 !important;
               border-radius: 5px;
             }
             .excursion-button:hover {
               background: #083831 !important;
               color: #ffffff !important;
             }
             .excursion-button span {
               margin-left: 7px;
               fill: #ffffff;
               font-size: 20px;
             }
             .excurison-icon-container-mobile {
               display: none;
             }
             @media (min-width: 1700px) {
               .excursion-left-img, .excursion-right-img img {
               width: 800px;
               height: auto; 
               object-fit: cover;
             }
             .br-display-none-none {
               display: none;
             }
             }
             @media (max-width: 1265px) {
               .br-display-none-none {
               display: none;
             }
             .excursion-container {
                 padding: 20px 4% 100px 4%;
             }
             
             @media (max-width: 1060px) {
               .excursion-container-content {
               flex-direction: column;
             }
             .excursion-left-img {
               width: 100%;
               height: 600px;
               background-position: 100% 40%;
               margin-bottom: 20px;
             }
               }
             }
             @media (max-width: 800px) {
              .excursion-title {
                text-align: center;
              }
               .excursion-container {
                 padding: 0px 12px 50px 12px;
             }
               .excursion-iconbox-title {
                 font-size: 20px;
               }
               .excursion-divider {
                 transform: rotate(90deg);
                 display: none;
                   }
               .excursion-iconbox {
                 flex-direction: column;
                 padding: 20px 20px;
                 align-items: flex-start;
               }
               .excurison-icon-container{
                 display: none !important;
               }
               .excurison-icon-container-mobile {
               display: flex;
               justify-content: space-evenly;
               width: 100%;
             } 
               .excursion-iconbox-left,   .excursion-iconbox-right {
               display: flex ;
               flex-direction: column;
               gap: 20px;
             }
               .hideandseek {
               display: none;
             }
               .excursion-iconbox-card-text , .excursion-left-infobox {
               font-size: 12px;
             }
               .excursion-title {
               font-size: 30px;
               margin-bottom: 30px;
             }
             .excursion-iconbox-card-height33px {
              padding-top: 6px;
             }
           }
           </style>
           <div class="excursion-container" id="excursion">
               <p class="excursion-title">Экскурсия <br class="br-display-none-none"> Чарынский каньон – «Долина Замков»</p>
               <div class="excursion-container-content">
                   <div class="excursion-left-img">
                       <div class="excursion-left-text-box">
                           <div class="excursion-left-infobox">28.09.2024</div>
                           <div class="excursion-left-infobox">Однодневный тур</div>
                       </div>
                   </div>
                   <div class="excursion-right-img">
                       <img class="excursion-img" src="https://static.tildacdn.com/tild3864-3934-4564-b536-343730333236/1303_2.png" alt="">
                       <img class="excursion-img" src="https://static.tildacdn.com/tild3764-3236-4231-a236-653065393634/1303_3.png" alt="">
                   </div>
               </div>
               <div class="excursion-iconbox">
                   <p class="excursion-iconbox-title">В стоимость <br class="hideandseek">входит</p>
                   <div class="excurison-icon-container">
                   <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3834-6533-4538-b361-353465323933/Group.svg" alt="">
                       <p class="excursion-iconbox-card-text">Транспорт</p>
                   </div>
                   <div class="excursion-divider"></div>
                   <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3064-3637-4732-b334-336332636632/Group_1.svg" alt="">
                       <p class="excursion-iconbox-card-text">Услуги гида</p>
                   </div>
                   <div class="excursion-divider"></div>
                   <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3832-3663-4637-a634-323462663432/003-tickets.svg" alt="">
                       <p class="excursion-iconbox-card-text">Входные билеты</p>
                   </div>
                   <div class="excursion-divider"></div>
                   <div class="excursion-iconbox-card ">
                       <img class="excursion-iconbox-card-icon " src="https://static.tildacdn.com/tild3464-3236-4364-a632-623464646531/004-dinner.svg" alt="">
                       <p class="excursion-iconbox-card-text ">Обед</p>
                   </div>
                 </div>
                 <div class="excurison-icon-container-mobile">
                   <div class="excursion-iconbox-left">
                     <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3834-6533-4538-b361-353465323933/Group.svg" alt="">
                       <p class="excursion-iconbox-card-text">Транспорт</p>
                   </div>
                   <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3064-3637-4732-b334-336332636632/Group_1.svg" alt="">
                       <p class="excursion-iconbox-card-text">Услуги гида</p>
                   </div>
                   </div>
                   <div class="excursion-iconbox-right">
                     <div style="transform: translateY(3px);" class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3832-3663-4637-a634-323462663432/003-tickets.svg" alt="">
                       <p class="excursion-iconbox-card-text">Входные билеты</p>
                   </div>
                   <div class="excursion-iconbox-card excursion-iconbox-card-height33px">
                       <img class="excursion-iconbox-card-icon " src="https://static.tildacdn.com/tild3464-3236-4364-a632-623464646531/004-dinner.svg" alt="">
                       <p class="excursion-iconbox-card-text">Обед</p>
                   </div>
                   </div>
                 </div>
               </div>
               <a target="_blank" href="https://greenspaces.kz/charyn-canyon" class="excursion-button">Подробнее <span>&#8594</span> </a>
           </div>
        <style>
          a {
            text-decoration: none;
            color: #0e150c !important;
          }
          .price-container {
            position: relative;
            padding: 55px 8.45% 5% 8.45%;
            background: url("https://static.tildacdn.com/tild6633-6164-4437-a163-343335643739/13838661_1.png");
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .price-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1;
          }
          .price-title {
            color: white !important;
            font-size: 50px;
            font-weight: 700;
            text-align: center;
            position: relative;
            z-index: 100;
            margin-bottom: 50px;
          }
          .price-info-box {
            display: flex;
            gap: 20px;
            justify-content: space-between;
            position: relative;
            z-index: 100;
            margin-bottom: 5%;
            width: 100%;
          }
          .price-info-card {
            padding: 30px 13px 15px 13px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            border: 1px solid white;
            border-radius: 10px;
            min-width: 225px;
            width: 100%;
          }
          .price-info-card-date,
          .price-info-card-price,
          .price-info-card-about,
          .price-info-card-details,
          .price-info-card-details-semibold {
            color: white !important;
          }
          .price-info-card-details-semibold {
            font-size: 12px;
            font-weight: 600;
          }
          .price-info-card-details {
            font-size: 12px;
            font-weight: 400;
          }
          .price-info-card-date {
            font-size: 18px;
            font-weight: 500;
          }
          .price-info-card-price {
            font-size: 30px;
            font-weight: 700;
          }
          .price-info-card-about {
            font-size: 18px;
            font-weight: 500;
          }
          .price-divider {
            background: #7fc241;
            width: 100%;
            height: 2px;
          }
          .price-info-card-second-box-outside {
            padding-bottom: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            border: 1px solid white;
            border-radius: 10px;
            width: 40%;
            min-width: 466px;
            padding-bottom: 25px;
          }
          .price-info-card-second-box-inside {
            padding-top: 30px;
            padding-bottom: 20px;
            padding-right: 17px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            border-bottom: 1px solid white;
            border-radius: 10px;
            width: 100%;
          }
          .second-box-oneline {
            display: flex;
            gap: 30px;
            width: 100%;
            padding-left: 13px;
          }
          .price-bottom-box {
            display: flex;
            gap: 25px;
            justify-content: space-between;
            width: 100%;
          }
          .second-box-oneline-info-box {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .white-space-no-wrap {
            white-space: nowrap;
          }
          .padding-left-13px {
            padding-left: 13px;
          }
          @media (max-width: 1300px) {
            .price-bottom-box {
                width: 100%;
            }
            .price-container {
                display: block;
            }
            .price-info-box {
              flex-wrap: wrap;
            }
            .price-info-card {
              flex: 1 1 50%;
            }
            .price-info-card:nth-child(1) {
              flex-basis: 20%;
            }
            .price-info-card:nth-child(2) {
              min-width: 500px;
            }
            .price-info-card:nth-child(3),
            .price-info-card:nth-child(4) {
              flex-basis: 40%; /* Эти элементы занимают всю ширину контейнера */
            }
          }
          @media (max-width: 900px) {
            .price-info-box {
              flex-direction: column;
            }
            .price-info-card-second-box-outside {
              min-width: 100%;
            }
          }
          @media (max-width: 500px) {
            .second-box-oneline {
              flex-direction: column;
              gap: 10px;
            }
            .price-title {
              font-size: 30px;
            }
            .price-container {
              padding-bottom: 50px;
              padding-right: 12px;
              padding-left: 12px;
            }
            .br-display-none-br {
              display: none;
            }
            .padding-right-13px {
              padding-right: 13px;
            }
          }
        </style>
        <div id="price" class="price-container">
          <p class="price-title">Стоимость участия</p>
          <div class="price-info-box">
            <div class="price-info-card">
              <p class="price-info-card-date">
                1 день <br class="br-display-none-br" />
                25.09.2024
              </p>
              <div class="price-divider"></div>
              <p class="price-info-card-about">Конференция</p>
              <p class="price-info-card-price">25 000 тг</p>
              <p class=" white-space-no-wrap price-info-card-details">В стоимость входит кофе-брейк</p>
              <div>
                  <p class="price-info-card-details-semibold">Обед (по желанию) — <br class="br-display-none-br">дополнительно 7000 тг</p>
                </div>
            </div>
            <div class="price-info-card-second-box-outside">
              <div class="price-info-card-second-box-inside">
                <p class="price-info-card-date padding-left-13px">
                  2 день <br class="br-display-none-br" />
                  26.09.2024
                </p>
                <div style="width: 98%; margin-left: 13px;" class="price-divider"></div>
                <div class="second-box-oneline">
                  <p class="price-info-card-price inline">35 000 тг</p>
                  <div class="second-box-oneline-info-box">

                      <p class="price-info-card-about inline">
                          Конференция
                        </p>
                        <p class="price-info-card-details">В стоимость входит кофе-брейк</p>
                        <div>
                            <p class="price-info-card-details-semibold">Обед (по желанию) — <br class="br-display-none-br"> дополнительно 7000 тг</p>
                        </div>
                    </div>
                </div>
              </div>
              <div class="second-box-oneline padding-right-13px">
                <p class="price-info-card-price">50 000 тг</p>
                <p class="price-info-card-about">
                    Вечерний банкет <br class="br-display-none-br"> для участников <br class="br-display-none-br"> конференции и выставки
                </p>
              </div>
            </div>
            <div class="price-info-card">
              <p class="price-info-card-date">
                3 день <br class="br-display-none-br" />
                27.09.2024
              </p>
              <div class="price-divider"></div>
              <p class="price-info-card-about">
                  День практики <br class="br-display-none-br"> и мастер-классов <br class="br-display-none-br"> в питомнике
                </p>
                <p class="price-info-card-price">40 000 тг</p>
                <p class="price-info-card-details">В стоимость входит обед, <br class="br-display-none-br"> кофе-брейк, трансфер <br class="br-display-none-br"> из города в питомник и обратно</p>
                <p class="price-info-card-details-semibold">
                    *Внимание! Количество мест <br class="br-display-none-br"> ограничено – 60 чел
                  </p>
            </div>
            <div class="price-info-card">
              <p class="price-info-card-date">
                4 день <br class="br-display-none-br" />
                28.09.2024
              </p>
              <div class="price-divider"></div>
              <p class="price-info-card-about">
                Экскурсия <br class="br-display-none-br"> Чарынский каньон – <br class="br-display-none-br">«Долина Замков»
                </p>
                <p class="price-info-card-price">40 000 тг</p>
                <p class="price-info-card-details">В стоимость входит обед, <br class="br-display-none-br">трансфер, услуги гида <br class="br-display-none-br">и входные билеты </p>
            </div>
          </div>
          <style>
            .price-bottom-box {
              position: relative;
              z-index: 10;
            }
            .price-discounts {
              background-color: rgba(255, 254, 254, 0.3);
              border-radius: 10px;
              padding: 25px 70px 25px 40px;
              width: 48%;
            }
            .discounts-title {
              color: white !important;
              font-size: 30px;
              font-weight: 700;
              margin-bottom: 15px;
            }
            .discounts-box {
              display: flex;
              gap: 4%;
              margin-bottom: 15px;
            }
            .discount-info-card {
              display: flex;
              flex-direction: column;
            }
            .discount-info-card-price {
              color: white !important;
              font-size: 30px;
              font-weight: 700;
            }
            .discount-info-card-about {
              color: white !important;
              font-size: 18px;
              font-weight: 600;
            }
            .discount-divider {
              background: #7fc241;
              width: 2px;
              height: 65px;
            }
            .price-bottom-box__button-box {
              width: 48%;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              gap: 20px;
            }
            .price-buttons {
              display: flex;
              justify-content: center;
              width: 100%;
              border-radius: 5px;
              padding-top: 25px;
              padding-bottom: 25px;
              padding-left: 20px;
              padding-right: 20px;
              font-size: 18px;
              font-weight: 700;
              background: #ffffff !important;
              box-shadow: 0 0 15px 0 #1d2d0e;
              text-align: center;
            }
            .price-button-green {
              background: #7fc241 !important;
            }
    
            .price-buttons:hover {
              background: #083831 !important;
              color: white !important;
              transition: all 0.3s;
            }
            @media (max-width: 900px) {
              .price-bottom-box {
                flex-direction: column;
              }
              .price-discounts,
              .price-bottom-box__button-box {
                width: 100%;
              }
            }
            @media (max-width: 450px) {
              .price-discounts {
                padding: 20px 15px 20px 25px;
              }
              .discounts-box {
                flex-direction: column;
                gap: 15px;
              }
              .discount-divider {
                height: 2px;
                width: 200px;
              }
            }
          </style>
          <div class="price-bottom-box">
            <div class="price-discounts">
              <p class="discounts-title">Скидки</p>
              <div class="discounts-box">
                <div class="discount-info-card">
                  <p class="discount-info-card-price">15 000 тг</p>
                  <p class="discount-info-card-about">При покупке билетов <br> на все три дня конференции</p>
                </div>
                <div class="discount-divider"></div>
                <div class="discount-info-card">
                  <p class="discount-info-card-price">25%</p>
                  <p class="discount-info-card-about">Членам ЦААПР</p>
                </div>
              </div>
              <p class="price-info-card-details">*Скидки не суммируются и не распространяются на обеды, банкет и экскурсию</p>
            </div>
            <div class="price-bottom-box__button-box">
              <a href="#popup:conference-registration" class="price-buttons"
                >Зарегистрироваться</a
              >
            </div>
          </div>
        </div>
        <!-- 
        <style>
            .information-partners-container {
              padding: 100px 0px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 50px;
            }
            .information-partners-title {
              font-size: 50px;
              font-weight: 700;
              color: #083831 !important;
              text-align: center;
            }
            .infortamtion-partners-info-box {
              display: flex;
              justify-content: space-between;
              width: 100%;
              max-width: 950px;
              flex-wrap: wrap;
              gap: 30px;
            }
            .information-partners-link {
              transition: all 0.5s;
            }
            .information-partners-link img {
                max-width: 218px;
            }
            .information-partners-link:hover {
              transform: scale(1.15);
            }
            @media (max-width: 625px) {
              .information-partners-title{
                font-size: 30px;
              }
              .infortamtion-partners-info-box {
                  justify-content: center;
              }
             
            }
      </style>
      <div class="information-partners-container">
          <p class="information-partners-title">Информационные партнеры ЦААПР</p>
          <div class="infortamtion-partners-info-box">
              <a class="information-partners-link" href="https://www.ruspitomniki.ru/"><img src="https://static.tildacdn.com/tild3638-6164-4838-b230-313565363235/Logo_1-01_1.svg" alt=""></a>
              <a  class="information-partners-link"href="https://akademiagm.online/"><img src="https://static.tildacdn.com/tild3738-6635-4838-a666-666663373735/academia_1.png" alt=""></a>
              <a class="information-partners-link" href="https://zstrela.ru/"><img src="https://static.tildacdn.com/tild6230-3831-4263-b363-353437343337/logo_front_down_line.svg" alt=""></a>
              
          </div>
      </div>
       -->
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
          * {
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif;
            padding: 0;
            margin: 0;
          }
          a {
            text-decoration: none;
          }
          .footer-container {
            background: #083831 !important;
            display: flex;
            gap: 3%;
            justify-content: space-between;
            padding: 30px 8.45% 50px 8.45%;
          }
          .footer-map {
            max-width: 500px;
            max-height: 200px;
            border-radius: 10px;
          }
          .yandex-map {
            border-radius: 10px;
          }
          .box-smm-footer {
            display: flex;
            gap: 20px;
          }
          .footer-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .smm-button {
            background: #7fc241 !important;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .footer-left-title,
          .footer-right-title {
            color: white !important;
            font-weight: 700;
            font-size: 18px;
          }
          .footer-left-adress,
          .footer-text-link,
          .footer-phone-link {
            color: white !important;
            font-size: 18px;
            font-weight: 400;
          }
          .footer-center {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .footer-right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          .iframe-yandex-map {
            width: 500px;
            height: 220px;
          }
         
          @media (max-width: 1100px) {
            .iframe-yandex-map {
              width: 326px;
              height: 230px;
            }
          }
          @media (max-width: 900px) {
            .footer-container {
              flex-direction: column;
              align-items: center;
            }
            .footer-left {
              margin-bottom: 60px;
            }
            .footer-center {
              margin-bottom: 30px;
              align-items: center;
            }
            .footer-right {
              align-items: center;
            }
            .footer-text-link {
              text-align: center;
            }
          }
          @media (max-width: 600px) {
            .footer-container {
              padding-top: 40px;
              padding-left: 12px;
              padding-right: 12px;
            }
            .ytp-large-play-button {
              top: 80%
          }
          }
        </style>
        <div class="footer-container">
          <div class="footer-left">
            <p class="footer-left-title">Адрес конференции и выставки:</p>
            <p class="footer-left-adress">ДП «Бакшасарай», КЦДС «Атакент»</p>
            <div class="footer-map">
              <div
                class="yandex-map"
                style="position: relative; overflow: hidden"
              >
                <a
                  href="https://yandex.ru/maps/org/bakshasaray/1135747147/?utm_medium=mapframe&utm_source=maps"
                ></a
                ><a
                  href="https://yandex.ru/maps/162/almaty/category/banquet_hall/184108315/?utm_medium=mapframe&utm_source=maps"
                  style="
                    color: #eee;
                    font-size: 12px;
                    position: absolute;
                    top: 14px;
                  "
                  >Банкетный зал в Алматы</a
                ><a
                  href="https://yandex.ru/maps/162/almaty/category/catering/184108321/?utm_medium=mapframe&utm_source=maps"
                  style="
                    color: #eee;
                    font-size: 12px;
                    position: absolute;
                    top: 28px;
                  "
                  >Кейтеринг в Алматы</a
                ><iframe
                  class="iframe-yandex-map"
                  src="https://yandex.ru/map-widget/v1/?filter=alternate_vertical%3ARequestWindow&indoorLevel=1&ll=76.906344%2C43.223586&mode=search&oid=1135747147&ol=biz&sctx=ZAAAAAgBEAAaKAoSCUSoUrMHOlNAEUpATMKFnEVAEhIJ0J1g%2F3Vuej8RJT0MrU7OcD8iBgABAgMEBSgKOABAogFIAWoCa3qdAc3MTD2gAQCoAQC9AZ5rq9LCAQXLwMidBIICFNCx0LDQutGI0LDRgdCw0YDQsNC5igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=76.906344%2C43.223586&sspn=0.009781%2C0.006219&text=%D0%B1%D0%B0%D0%BA%D1%88%D0%B0%D1%81%D0%B0%D1%80%D0%B0%D0%B9&z=17.07"
                  frameborder="1"
                  allowfullscreen="true"
                  style="position: relative"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="footer-center">
            <p class="footer-right-title">Быстрые ссылки:</p>
            <a href="https://greenspaces.kz/#tema-2-conf" class="footer-text-link">О конференции</a
            ><a href="https://greenspaces.kz/#program" class="footer-text-link">Программа конференции</a
            ><a href="https://greenspaces.kz/#exhibition" class="footer-text-link"
              >Международная профильная выставка «Green Spaces»</a
            ><a href="https://greenspaces.kz/#practice" class="footer-text-link"
              >День практики и мастер-классов «GREEN EXPERT» </a
            ><a href="https://greenspaces.kz/#excursion" class="footer-text-link">Экскурсия</a
            ><a href="https://greenspaces.kz/#price" class="footer-text-link">Стоимость участия</a>
          </div>
          <div class="footer-right">
            <img
              src="https://static.tildacdn.com/tild6161-3539-4230-a466-616439343939/logo-caapr.svg"
              alt="logo"
            />
            <a href="tel:+77717269919" class="footer-phone-link"
              >+7 (771) 726 99 19</a
            >
            <a href="tel:+77717138834" class="footer-phone-link"
              >+7 (771) 713 88 34</a
            >
            <a href="https://caapr.kz/" class="footer-phone-link">www.caapr.kz</a>
            <div class="box-smm-footer">
              <a target="_blank" href="https://www.instagram.com/caaprcom/" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3436-6138-4437-b434-393630383032/insta.svg"
                  alt="insta"
              /></a>
              <a target="_blank" href="https://wa.me/7717138834" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3362-3864-4661-b238-363137623064/phone-icon.svg"
                  alt="phone"
              /></a>
              <a href="mailto:info@caapr.kz" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3236-6464-4666-b563-376138303739/mail-icon.svg"
                  alt="mail"
              /></a>
            </div>
          </div>
        </div>
      </div>
        `;
        const contentEn = `
         <div class="body-content-m">
        <style>
          .conveythis-widget-languages > div:first-child {
            display: none !important;
          }
          .body-content-m {
            overflow-x: hidden;
          }
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
          * {
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif;
            padding: 0;
            margin: 0;
          }
          a {
            text-decoration: none;
            color: #0e150c !important;
          }
          .bg-header {
            position: relative;
            background: url("https://static.tildacdn.com/tild3565-3135-4438-a634-653165633162/bg-header-new.jpg");
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            padding-top: 60px;
            padding-bottom: 100px;
            padding-left: 8.45%;
            padding-right: 8.45%;
            min-height: 100vh;
          }
          .bg-header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1;
          }
          .header-content-box {
            position: relative;
            z-index: 2;
          }
          .logo-caapr {
            margin-right: 4%;
          }
          .box-nav-logo {
            display: flex;
            margin-bottom: 6%;
          }
          .nav-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: 40px;
            justify-content: space-between;
          }
          .box-date-location {
            display: flex;
            gap: 15px;
            margin-right: 7%;
          }
          .box-smm {
            display: flex;
            gap: 20px;
          }
          .nav-button {
            background: none;
            color: white !important;
            border: 1px solid;
            border-color: white !important;
            padding: 15px 25px;
            border-radius: 5px;
            font-size: 18px;
            font-weight: 700;
            white-space: nowrap;
          }
          .smm-button {
            background: #7fc241 !important;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .box-main-title {
            display: flex;
            align-self: self-start;
            margin-bottom: 25px;
          }
          .main-title-text {
            font-size: 60px;
            font-weight: 700;
            color: white !important;
          }
          .subtitle-header {
            font-size: 50px;
            font-weight: 700;
            color: white !important;
            margin-bottom: 10px;
          }
          .second-img {
            margin-right: 4%;
          }
          .arm-header {
            position: absolute;
            right: 0;
            top: 100px;
            z-index: 7000;
            width: 622px;
            height: 668px;
          }
          .box-buttons {
            display: flex;
            gap: 40px;
            position: relative;
            z-index: 10000;
          }
          .box-buttons-link {
            display: flex;
            justify-content: center;
            width: 370px;
            border-radius: 5px;
            padding-top: 25px;
            padding-bottom: 25px;
            font-size: 18px;
            font-weight: 700;
            background: #ffffff !important;
            box-shadow: 0 0 15px 0 #1d2d0e;
            position: relative;
            z-index: 10000;
          }
          .green {
            background: #7fc241 !important;
          }
          .margin-bottom100px {
            margin-bottom: 5%;
          }
          .location-link:hover {
            color: #0e150c !important;
            background: #ffffff !important;
            transition: all 0.3s;
          }
          .smm-button:hover {
            background: #ffffff !important;
            transition: all 0.3s;
          }
          .box-buttons-link:hover {
            background: #083831 !important;
            color: white !important;
            transition: all 0.3s;
          }
          .box-smm-mobile {
            display: none;
          }
          @media (max-width: 1550px) {
            .arm-header {
              top: 100px;
              z-index: 7000;
              width: 522px;
              height: 568px;
            }
          }
          @media (max-width: 1450px) {
            .arm-header {
              top: 100px;
              z-index: 7000;
              width: 422px;
              height: 468px;
            }
          }
          @media (max-width: 1300px) {
            .box-date-location {
              flex-wrap: wrap;
              max-width: 400px;
              justify-content: space-between;
            }
            .header-content-box {
              padding: 60px;
              transform: translateX(0px);
            }
            .bg-header {
              padding: 0;
            }
            .second-img {
              width: 88px;
              height: 125px;
            }
            .main-title-text {
              font-size: 50px;
            }
            .arm-header {
              width: 307px;
              height: 403px;
              top: 130px;
            }
            .subtitle-header {
              font-size: 40px;
            }
            .margin-bottom100px {
              font-size: 55px;
            }
            .nav-header {
              align-items: flex-start;
            }
            .more-padding {
              padding-left: 30px;
              padding-right: 30px;
            }
            .logo-caapr {
              width: 113px;
              height: 115px;
            }
          }
          @media (max-width: 899px) {
            .box-date-location {
              flex-wrap: wrap;
              max-width: 250px;
              justify-content: space-between;
              margin: 0;
              gap: 6px;
            }
            .box-main-title {
              margin-bottom: 30px;
            }
            .header-content-box {
              padding: 12px;
              padding-top: 30px;
              padding-bottom: 40px;
            }
            .bg-header {
              padding: 0;
              overflow: hidden;
            }
            .box-nav-logo {
              margin: 0;
            }
            .second-img {
              width: 50px;
              height: 72px;
            }
            .main-title-text {
              font-size: 30px;
            }
            .arm-header {
              width: 372px;
              height: 418px;
              top: 105px;
              right: -0px;
              z-index: 1;
            }
            .subtitle-header {
              font-size: 30px;
            }
            .margin-bottom100px {
              font-size: 35px;
            }
            .nav-button {
              font-size: 12px;
              padding: 10px 10px;
              margin: 0;
            }
            .more-padding {
              padding-left: 18px;
              padding-right: 17px;
            }
            .nav-header {
              align-items: flex-start;
            }
            .box-smm {
              display: none;
            }
            .box-buttons {
              flex-direction: column;
              gap: 15px;
            }
            .logo-caapr {
              width: 75px;
              height: 76px;
            }
            .box-buttons-link {
              width: 100%;
              font-size: 16px;
            }
            .box-smm-mobile {
              display: flex;
              flex-wrap: wrap;
              align-items: flex-start;
              gap: 15px;
              margin-bottom: 30px;
            }
            .margin-bottom100px {
              margin-bottom: 55px;
            }
            .first-smm-button {
              width: 100%;
            }
          }
          @media (max-width: 480px) {
            .martop4px {
              margin-top: 4px;
            }
            .arm-header {
              width: 202px;
              height: 248px;
              top: 375px;
              right: -0px;
              z-index: 100;}
              .bg-header {
               max-height: 900px;
               padding-bottom: 30px;
              }
          }
        </style>
        <div class="bg-header">
          <div class="header-content-box">
            <div class="box-nav-logo">
              <img
                src="https://static.tildacdn.com/tild6538-3139-4563-a263-636563393535/__1.svg"
                alt="logo"
                class="logo-caapr"
              />
              <nav class="nav-header">
                <div class="box-date-location">
                  <a class="nav-button more-padding">September 25 – 26</a>
                  <a class="nav-button more-padding">Almaty</a>
                  <a class="nav-button location-link martop4px" href=""
                    >CCH «Bakshasarai», KCBC«Atakent»</a
                  >
                </div>
                <div class="box-smm">
                  <a target="_blank" href="https://www.instagram.com/caaprcom/" class="smm-button"
                    ><img
                      src="https://static.tildacdn.com/tild3436-6138-4437-b434-393630383032/insta.svg"
                      alt="insta"
                  /></a>
                  <a target="_blank" href="https://wa.me/7717138834" class="smm-button"
                    ><img
                      src="https://static.tildacdn.com/tild3362-3864-4661-b238-363137623064/phone-icon.svg"
                      alt="phone"
                  /></a>
                  <a href="mailto:info@caapr.kz" class="smm-button"
                    ><img
                      src="https://static.tildacdn.com/tild3236-6464-4666-b563-376138303739/mail-icon.svg"
                      alt="mail"
                  /></a>
                </div>
              </nav>
            </div>
            <div class="box-main-title">
              <img
                src="https://static.tildacdn.com/tild3833-6137-4239-b665-643836666339/2_1.svg"
                alt="second"
                class="second-img"
              />
              <h1 class="main-title-text">
                Conference <br />
                of CAPNA
              </h1>
            </div>
            <p class="subtitle-header">& International Specialized Exhibition <br /></p>
            <p class="main-title-text margin-bottom100px">GREEN SPACES EXPO 2024</p>
            <div class="box-smm-mobile">
              <div class="first-smm-button">
                <a target="_blank" href="https://www.instagram.com/caaprcom/" class="smm-button"
                  ><img
                    src="https://static.tildacdn.com/tild3436-6138-4437-b434-393630383032/insta.svg"
                    alt="insta"
                /></a>
              </div>
              <a target="_blank" href="https://wa.me/7717138834" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3362-3864-4661-b238-363137623064/phone-icon.svg"
                  alt="phone"
              /></a>
              <a href="mailto:info@caapr.kz" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3236-6464-4666-b563-376138303739/mail-icon.svg"
                  alt="mail"
              /></a>
            </div>
            <div class="box-buttons">
              <a
                class="box-buttons-link green"
                href="#popup:conference-registration"
                >Take part in events
              </a>
            </div>
          </div>
          <img
            src="https://static.tildacdn.com/tild6361-3962-4630-b139-666131323062/image_1_1.png"
            alt="arm"
            class="arm-header"
          />
        </div>
        <style>
          .secondslide-container {
            padding: 5.5% 8.45%;
          }
    
          .secondslide-bg-layer {
            min-height: 790px;
            position: relative;
            background: url("https://static.tildacdn.com/tild6430-3264-4139-b836-326139366331/___2.png");
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
            background-position: 0% 40%;
            padding: 20px 10px 50px 10px;
          }
          .secondslide-bg-layer::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              360deg,
              rgba(8, 56, 49, 1) 0%,
              rgba(8, 56, 49, 0.7049194677871149) 10%,
              rgba(8, 56, 49, 0.5956757703081232) 20%,
              rgba(8, 56, 49, 0.19791666666666663) 30%,
              rgba(8, 56, 49, 0) 40%
            );
            z-index: 1;
            border-radius: 10px;
          }
          .secondslide-title {
            color: #083831 !important;
            font-weight: 700;
            font-size: 50px;
            margin-bottom: 30px;
            position: relative;
            z-index: 10;
          }
          .secondslide-subtitle {
            color: #418500 !important;
            font-size: 30px;
            font-weight: 700;
            max-width: 620px;
          }
          .secondslide-divider {
            height: 140px;
            width: 2px;
            background: #7fc241;
          }
          .seconslide-info-box {
            z-index: 10;
            position: absolute;
            bottom: 40px;
            width: 100%;
            display: flex;
            gap: 8%;
            justify-content: center;
          }
          .seconslide-info-card {
            text-align: center;
          }
          .seconslide-info-card-title {
            color: white !important;
            font-size: 70px;
            font-weight: 700;
            margin-bottom: 15px;
          }
          .seconslide-info-card-subtitle {
            color: white !important;
            font-size: 18px;
            font-weight: 600;
          }
          @media (max-width: 1200px) {
            .secondslide-bg-layer {
              background-position: 70%;
            }
          }
          @media (max-width: 610px) {
            .secondslide-container{
              padding: 50px 12px;
            }
            .seconslide-info-box {
              flex-direction: column;
              align-items: flex-start;
              gap: 15px;
              display: flex;
            }
            .seconslide-info-card {
              text-align: left;
              padding-left: 20px;
            }
            .secondslide-title {
              font-size: 30px;
              margin-bottom: 20px;
            }
            .secondslide-bg-layer {
              padding-top: 0px;
              padding-right: 60px;
            }
            .secondslide-bg-layer::before {
              background: linear-gradient(
                360deg,
                rgba(8, 56, 49, 1) 0%,
                rgba(8, 56, 49, 0.7049194677871149) 10%,
                rgba(8, 56, 49, 0.5956757703081232) 30%,
                rgba(8, 56, 49, 0.19791666666666663) 50%,
                rgba(8, 56, 49, 0) 70%
              );
              z-index: 1;
            }
            .secondslide-bg-layer {
              background-position: 80%;
            }
            .secondslide-subtitle {
              font-size: 16px;
            }
    
            .seconslide-info-card-title {
              color: white !important;
              font-size: 50px;
              font-weight: 700;
              margin-bottom: 5px;
            }
            .seconslide-info-card-subtitle {
              color: white !important;
              font-size: 16px;
              font-weight: 600;
            }
            .secondslide-divider {
              height: 100px;
              transform: rotate(90deg);
            }
            .displaynone600px {
              display: none;
            }
          }
    
          @media (max-width: 450px) {
          }
        </style>
        <div id="tema-2-conf" class="secondslide-container">
          <div class="secondslide-bg-layer">
            <h2 class="secondslide-title">2024 Theme:</h2>
            <p class="secondslide-subtitle">
              Modern approaches and materials for landscaping, plant production, and plant greening
            </p>
            <div class="seconslide-info-box">
              <div class="seconslide-info-card">
                <p class="seconslide-info-card-title">12</p>
                <p class="seconslide-info-card-subtitle">
                  countries   <br class="displaynone600px" />
                  participants
                </p>
              </div>
              <div class="secondslide-divider displaynone600px"></div>
              <div class="seconslide-info-card">
                <p class="seconslide-info-card-title">30</p>
                <p class="seconslide-info-card-subtitle">
                  famous <br class="displaynone600px" />
                  speakers
                </p>
              </div>
              <div class="secondslide-divider displaynone600px"></div>
              <div class="seconslide-info-card">
                <p class="seconslide-info-card-title">30</p>
                <p class="seconslide-info-card-subtitle">
                  panel sessions <br />
                  and master classes
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>
          .text-align-center {
            text-align: center;
          }
          .video-container-desktop {
            padding: 0% 14% 5.5% 14%;
          }
          .video-iframe-desktop {
            border-radius: 10px;
            width: 100%;
            height: 100%;
            min-height: 600px;
          }
          .video-iframe-mobile {
            width: 100%;
            height: 500px;
            display: none;
            border-radius: 10px;
          }
          @media (max-width: 600px) {
            .video-container-desktop{
              padding: 0px 12px 50px 12px;
            }
            .video-iframe-mobile {
              display: block;
            }
            .video-iframe-desktop {
              display: none;
            }
          }
        </style>
        <div id="video-container-desktop" class="video-container-desktop">
          <h2 class="secondslide-title text-align-center">Video announcement</h2>
          <iframe class="video-iframe-desktop" src="https://www.youtube.com/embed/jw8dQMDHuR4?si=YLN2XOGnEKGzX6YE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div class="video-container-mobile">
            <iframe class="video-iframe-mobile" src="https://www.youtube.com/embed/jw8dQMDHuR4?si=YLN2XOGnEKGzX6YE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <style>
            * {
              box-sizing: border-box;
              font-family: "Montserrat", sans-serif;
              padding: 0;
              margin: 0;
            }
            a {
              text-decoration: none;
              color: #0e150c !important;
            }
            .exhibition-container {
              margin-top: 30px;
            }
            .exhibition-info-card {
              background: none;
              color: #0a381c !important;
              border: 1px solid;
              border-color: #0a381c !important;
              padding: 15px 25px;
              border-radius: 7px;
              font-size: 18px;
              font-weight: 700;
              white-space: nowrap;
              margin-top: 27px;
            }
            .top-box-info {
              display: flex;
              gap: 25px;
              align-items: self-start;
              padding-left: 8.45%;
              padding-right: 8.45%;
              background: #d7f0fc;
              max-height: 103px;
              justify-content: space-between;
            }
            .top-box-info img {
              margin-right: 10%;
              width: 197px;
              height: 100%;
            }
            .bottom-box-info {
              background: #083831;
              padding-top: 8%;
              padding-left: 8.45%;
              padding-right: 8.45%;
              padding-bottom: 4%;
              display: flex;
              gap: 7%;
              justify-content: space-between;
            }
            .bottom-box-info-left,
            .bottom-box-info-right {
              max-width: 700px;
            }
            .exhibition-title,
            .exhibition-features-card-title {
              color: white !important;
              font-size: 50px;
              font-weight: 700;
            }
            .exhibition-subtitle {
              font-size: 30px;
              font-weight: 600;
              color: white !important;
            }
            .exhibition-text,
            .exhibition-features-card-text {
              font-size: 18px;
              font-weight: 400;
              color: white !important;
            }
            .exhibition-title {
              margin-bottom: 20px;
              max-width: 600px;
              white-space: nowrap;
            }
            .exhibition-subtitle,
            .exhibition-text {
              margin-bottom: 40px;
              max-width: 600px;
            }
            .exhibition-features {
              display: flex;
              max-width: 500px;
              gap: 100px;
              position: relative; /* Добавляем для позиционирования псевдоэлемента */
            }
            .exhibition-features:before {
              content: "";
              position: absolute;
              left: 68%;
              top: 20%;
              bottom: 0;
              width: 2px;
              height: 140px;
              background-color: #7fc241;
            }
            .exhibition-features-card-title,
            .exhibition-features-card-text {
              white-space: nowrap;
            }
            .exhibition-features-right,
            .exhibition-features-left {
              gap: 20px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            }
            .exhibition-box-buttons {
              display: flex;
              gap: 15px;
              width: 100%;
            }
            .exhibition-box-buttons-link {
              display: flex;
              justify-content: center;
              width: 350px;
              border-radius: 5px;
              padding-top: 25px;
              padding-bottom: 25px;
              font-size: 18px;
              font-weight: 700;
              background: #ffffff !important;
              box-shadow: 0 0 15px 0 #1d2d0e;
            }
            .exhibition-box-buttons-link-green {
              background: #7fc241 !important;
              width: 270px;
            }
      
            .exhibition-box-buttons-link:hover {
              background: #083831 !important;
              color: white !important;
              transition: all 0.3s;
            }
            .bottom-box-info-right img {
              width: 500px;
              height: 240px;
              margin-bottom: 35px;
            }
            .displayonlessthan400px {
              display: none;
            }
            .view-on-mobile {
              display: none;
            }
            @media (max-width: 1360px) {
              .exhibition-text,
              .exhibition-features-card-text,
              .exhibition-info-card {
                font-size: 16px;
              }
              .exhibition-subtitle {
                font-size: 25px;
              }
              .exhibition-title,
              .exhibition-features-card-title {
                font-size: 40px;
              }
              .exhibition-features:before {
                left: 60%;
              }
            }
            @media (max-width: 1275px) {
              .bottom-box-info {
                gap: 5%;
              }
              .bottom-box-info-right img {
                width: 440px;
                height: 212px;
              }
              .exhibition-features {
                gap: 50px;
              }
              .exhibition-features:before {
                left: 57%;
              }
            }
            @media (max-width: 1223px) {
              .exhibition-features:before {
                display: none;
              }
            }
            @media (max-width: 1200px) {
              .exhibition-features:before {
                display: none;
              }
              .top-box-info img {
                margin-right: 7%;
              }
              .exhibition-box-buttons {
                flex-direction: column;
              }
              .exhibition-box-buttons-link-green {
                width: 350px;
              }
            }
            @media (max-width: 1042px) {
             
              .bottom-box-info {
                flex-direction: column;
                gap: 40px;
                padding-top: 11%;
              }
              .bottom-box-info-right img {
                width: 500px;
                height: 240px;
              }
      
              .bottom-box-info-right {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }
              .top-box-info {
                flex-direction: column;
                justify-content: center;
                max-height: 340px;
                gap: 20px;
                padding-top: 30px;
              }
              .top-box-info img {
                order: 3;
                margin: 0 auto;
                text-align: center;
                transform: translateY(52.3px);
              }
              .exhibition-info-card {
                margin-top: 0;
                width: 100%;
                text-align: center;
                transform: translateY(52.5px);
              }
              .bottom-box-info {
                padding-bottom: 60px;
              }
            }
            @media (max-width: 860px) {
              .bottom-box-info {
                padding-top: 15%;
              }
            }
            @media (max-width: 650px) {
              .bottom-box-info {
                padding-top: 25%;
              }
              .bottom-box-info-right img {
                width: 100%;
                height: auto;
              }
              .exhibition-text,
              .exhibition-features-card-text,
              .exhibition-info-card {
                font-size: 16px;
              }
              .exhibition-subtitle {
                font-size: 20px;
              }
              .exhibition-title,
              .exhibition-features-card-title {
                font-size: 30px;
              }
              .exhibition-box-buttons-link {
                width: 100%;
              }
            }
            @media (max-width: 480px) {
              .top-box-info {
                max-height: 266px;
                gap: 10px;
              }
              .exhibition-features {
                gap: 20px;
              }
              .exhibition-features-card-title {
                font-size: 25px;
              }
              .exhibition-features-card-text {
                white-space: wrap;
                font-size: 14px;
              }
              .displayonlessthan400px {
                display: block;
              }
              .exhibition-info-card {
                font-size: 12px;
                padding-top: 10px;
                padding-bottom: 10px;
              }
              .exhibition-features-right,
              .exhibition-features-left {
                justify-content: space-between;
              }
            }
            @media (max-width: 600px) {
              .bottom-box-info {
                padding-top: 120px;
                padding-left: 12px;
                padding-right: 12px;
              }
              .top-box-info {
                padding-left: 12px;
                padding-right: 12px;
              }
              .exhibition-title {
                white-space: wrap;
              }
              .view-on-mobile {
                display: block
              };
            }
          </style>
          <div id="exhibition" class="exhibition-container">
            <div class="top-box-info">
              <img
                src="https://static.tildacdn.com/tild3936-6261-4565-a633-336566313661/__.png"
                alt="logogo"
              />
              <a class="exhibition-info-card">September 25 – 26</a>
              <a class="exhibition-info-card">Visiting hours 9:00 – 18:00</a>
              <a class="exhibition-info-card">Free admission</a>
            </div>
            <div class="bottom-box-info">
              <div class="bottom-box-info-left">
                <h2 class="exhibition-title">
                  International <br />
                  Specialized <br class="displayonlessthan400px" />
                  Exhibition
                </h2>
                <h3 class="exhibition-subtitle">
                  Improvement of public and private areas, plant nursery practice, planting of greenery
                </h3>
                <p class="exhibition-text">
                  Annual area for cooperation of professionals of the green industry and its partners
                </p>
                <div class="exhibition-box-buttons">
                  <a
                    class="exhibition-box-buttons-link"
                    href="#popup:conference-registration"
                    >Take part in the exhibition</a
                  >
                  <a target="_blank"
                    class="exhibition-box-buttons-link exhibition-box-buttons-link-green"
                    href="https://drive.google.com/file/d/1-Y7bjfvHkNy5IpsxaJTdPojJL2oHj8ZD/view"
                    >Download presentation
                  </a>
                </div>
              </div>
              <div class="bottom-box-info-right">
                <img
                  src="https://static.tildacdn.com/tild3162-3161-4631-b339-626430316337/image_13_1.png"
                  alt="people"
                />
                <div class="exhibition-features">
                  <div class="exhibition-features-left">
                    <div class="exhibition-features-card">
                      <p class="exhibition-features-card-title">2000 sq. m.</p>
                      <p class="exhibition-features-card-text">
                        Total exhibition area
                      </p>
                    </div>
                    <div class="exhibition-features-card">
                      <p class="exhibition-features-card-title">2000+</p>
                      <p class="exhibition-features-card-text">Visitors</p>
                    </div>
                  </div>
                  <div class="exhibition-features-right">
                    <div class="exhibition-features-card">
                      <p class="exhibition-features-card-title">90+</p>
                      <p class="exhibition-features-card-text">Exhibitors</p>
                    </div>
                    <div class="exhibition-features-card">
                      <p class="exhibition-features-card-title">18</p>
                      <p class="exhibition-features-card-text">
                        cities <br class="view-on-mobile"> of Kazakhstan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>
            .catalog-container {
              padding: 5.5% 8.45% 5.5% 8.45%;
            }
            .catalog-title {
              font-size: 50px;
              color: #083831 !important;
              text-align: center;
              font-weight: 700;
              margin-bottom: 50px;
            }
            .catalog-button {
              text-align: center;
              display: flex;
              justify-content: center;
              max-width: 700px;
              border-radius: 5px;
              padding-top: 25px;
              padding-bottom: 25px;
              padding-left: 15px;
              padding-right: 15px;
              font-size: 18px;
              font-weight: 700;
              background: #7fc241 !important;
              box-shadow: 0 0 15px 0 #1d2d0e;
              margin: 50px auto;
            }
            .catalog-button:hover {
              background: #083831 !important;
              color: white !important;
              transition: all 0.3s;
            }
            .catalog-text {
              text-align: center;
              font-size: 18px;
              font-weight: 400;
            }
            @media (max-width: 600px) {
              .catalog-container {
                padding: 50px 12px;
              }
              .catalog-title {
                font-size: 30px;
              }
            }
          </style>
          <div class="catalog-container">
            <p class="catalog-title">Use these contacts in your business</p>
            <a target="_blank" href="https://greenspaces.kz/catalog" class="catalog-button"
              >Catalog of exhibitors of the last year (2023г.)</a
            >
            <p class="catalog-text">The 2024 catalog will appear on the website in October.</p>
            <br>
            <p class="catalog-text">To date, the exhibitors of the exhibition are representatives of Kazakhstan, Uzbekistan, Kyrgyzstan, <br> Russia, Belarus, the Netherlands, Poland, Italy, Belgium, Lithuania, Holland, Germany, Turkey and other countries.</p>
          </div>
        <style>    
          .partners {
            padding-top: 100px;
            padding-bottom: 100px;
            padding-left: 8.45%;  
            padding-right: 8.45%;
            background-color: #F7F5F5;
          }
          .partners-content-box {
            display: flex;
            flex-direction: column;
            align-items: center;    
            justify-content: space-between;  
            width: 100%;
            
          }
          .partners-title {
            color: #083831 !important;
            font-size: 50px;
            font-weight: 700;
            margin-bottom: 50px;
          }
          .partners-logo-box {
            display: flex;
            justify-content: center;
            gap: 90px;
            margin-bottom: 50px;
          }
          .partner-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            justify-content: space-between;
            transition: 0.3s all;
          }
          .partner-card:hover {
            cursor: pointer;
            transform: scale(1.15);
          }
          .partner-card img {
            max-height: 100px;
          }
          .partner-card-title {
            font-size: 18px;
            font-weight: 700;
          }
          .partners-bottom-text {
            font-size: 18px;
            font-weight: 400;
            text-align: center;
            max-width: 800px;
          }
          @media (max-width: 960px) {
            .partners-logo-box {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 610px) {
            .partners-title {
              text-align: center;
              font-size: 30px;
            }
            .order-first-mobile {
              order: -1;
            }
            .partners-logo-box {
              gap: 30px;
            }
            .partners-bottom-text {
              padding-left: 15px;
              padding-right: 15px;
              font-size: 16px;
            }
            .lukomorie {
              width: 340px;
            }
            .partners {
              padding-top: 50px;
              padding-bottom: 50px;
            }
          }
        </style>
        <div class="partners">
          <div class="partners-content-box">
            <p class="partners-title">We are supported by</p>
            <div class="partners-logo-box">
              <a target="_blank" href="https://www.instagram.com/lukomorye_kz/" class="partner-card order-first-mobile">
                <p class="partner-card-title">General sponsor</p>
                <img
                  class="lukomorie"
                  src="https://static.tildacdn.com/tild3965-6264-4364-a264-633832313861/lukomorie-new.svg"
                  alt="lukomorie"
                />
              </a>
              <a target="_blank" href="https://vzto-irwin.ru/" class="partner-card padding-bottom20px">
                <p class="partner-card-title">Business sponsor</p>
                <img
                  src="https://static.tildacdn.com/tild3333-3130-4663-a661-356539626264/cd915114-5838-474b-b.svg"
                  alt="irwin"
                />
              </a>
            </div>
            <p class="partners-bottom-text">
              If you want to become a partner or sponsor of the conference and  exhibition, contact us and we will discuss the details of cooperation.
            </p>
          </div>
        </div>
        <style> 
         .program-container {
             padding: 5.5% 8.45% 0px 8.45%;
             display: flex;
             flex-direction: column;
             align-items: center;
         }
         .program-title {
             font-size: 50px;
             color: #083831!important;
             text-align: center;
             font-weight: 700;
             margin-bottom: 50px;
         }
         .program-date {
             width: 100%;
             border-radius: 5px;
             font-size: 18px;
             background: #083831;
             color: #ffffff;
             margin-bottom: 50px;
             text-align: center;
             padding: 10px;
             display: flex;
             justify-content: center;
             align-items: center;
             gap: 10px;
          }
          .program-date span {
             font-size: 30px;
          }
          .program-date b {
             font-weight: 600;
             font-size: 30px;
          }
          .program-text {
             font-size: 18px;
             font-weight: 600;
          }
          .program-accordion {
             width: 100%;
          }
          .accordion-information {
             font-size: 30px;
             padding: 50px;
             background: #fff;
             border-radius: 10px;
             box-shadow: 0 0 9px #989191;
             width: 100%;
             transform: translateY(-20px);
          }
          .program-choose-place {
             display: flex;
             justify-content: center;
             align-items: center;
             color: #000;
             background: #fff;
             padding: 25px;
             padding-bottom: 40px;
             border-radius: 10px;
             border: 1px solid #7FC241;
             width: 50%;
             cursor: pointer;
          }
          .program-button-box {
             display: flex;
             gap: 20px;
             justify-content: space-between;
             width: 100%;
          }
          .active-accordion {
             background: #7FC241;
          }
          .program-top-part {
             margin-bottom: 50px;
             width: 100%;
          }
          @media (max-width: 600px) { 
             .program-container {
                 padding: 50px 12px 0px 12px;
             }
             .program-title {
                 font-size: 30px;
             }
             .accordion-information  {
                 font-size: 18px;
             }
             .program-text {
                 font-size: 12px;
             }
             .program-date {
             font-size: 12px;
             margin-bottom: 25px;
          }
             .program-date span {
             font-size: 18px;
          }
          .program-date b {
             font-weight: 600;
             font-size: 18px;
          }
          .program-top-part {
             margin-bottom: 25px;
          }
          .program-choose-place {
             padding: 15px 15px 30px 15px;
          }
          .accordion-information {
             box-shadow: 0 0 4.5px #989191;
          }
         
          }
         </style>
         <div id="program" class="program-container">
             <div class="program-top-part">
                 <p class="program-title">Conference agenda</p>
                 <div class="program-date"><b>25.09</b> Wednesday <span>&#8595</span> </div>
                 <p class="program-text">Well-known speakers from different countries - masters of urban planning, nursery farming, landscaping, landscape  architecture - will speak on topics on modern and efficient production  of planting material, improvement and gardening of cities. <br> <br> Lectures will be held simultaneously in two halls. Students will be able to choose the topics that are most relevant to them.
<br> <br>
                  All lectures are only in Russian</p>
                 </div>
             </div>
      
     
         <div class="program-container">
             <div class="program-top-part">
                 <div class="program-date"><b>26.09</b> Thursday <span>&#8595</span> </div>
                 <p class="program-text">Lectures will be held simultaneously in two halls. Students will be able to choose the topics that are most relevant to them.
<br><br>
                  All lectures are in Russian</p>
             </div>
         </div>
        <style>
          .practice-container {
            padding: 5.5% 8.45%;
            padding-bottom: 0px;
          }
    
          .practice-bg-layer {
            position: relative;
            padding: 50px 50px 550px 50px;
            background: url("https://static.tildacdn.com/tild3662-3831-4236-a233-356262356231/DSC01987_1.png");
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
          }
          .practice-bg-layer::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(8, 56, 49, 1) 0%,
              rgba(8, 56, 49, 0.7049194677871149) 10%,
              rgba(8, 56, 49, 0.5956757703081232) 30%,
              rgba(8, 56, 49, 0.19791666666666663) 40%,
              rgba(8, 56, 49, 0) 60%
            );
            z-index: 1;
            border-radius: 10px;
          }
          .practice-title {
            color: #ffffff !important;
            font-weight: 700;
            font-size: 50px;
            margin-bottom: 50px;
            position: relative;
            z-index: 10;
          }
          .practice-info-cards {
            position: relative;
            z-index: 1000;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: space-between;
            margin-bottom: 50px;
          }
          .practice-card {
            color: white !important;
            border: 1px solid white;
            border-radius: 5px;
            padding: 15px 20px;
            font-weight: 600;
            font-size: 18px;
            text-align: center;
          }
          @media (max-width: 1420px) {
            .practice-card {
              font-size: 14px;
              padding: 10px 15px;
            }
            .practice-title {
              font-size: 40px;
            }
            .practice-bg-layer {
              padding: 50px 30px 270px 30px;
            }
          }
          @media (max-width: 1095px) {
            .practice-info-cards {
              justify-content: flex-start;
            }
          }
          @media (max-width: 610px) {
            .practice-info-cards  {
              gap: 10px;
            }
            .practice-card {
              font-size: 12px;
            }
            .practice-title {
              font-size: 30px;
            }
            .practice-bg-layer {
              padding: 50px 10px 270px 10px;
            }
            .practice-bg-layer::before {
              background: linear-gradient(
                180deg,
                rgba(8, 56, 49, 1) 0%,
                rgba(8, 56, 49, 0.7049194677871149) 20%,
                rgba(8, 56, 49, 0.5956757703081232) 50%,
                rgba(8, 56, 49, 0.19791666666666663) 60%,
                rgba(8, 56, 49, 0) 70%
              );
              z-index: 1;
            }
            .practice-bg-layer {
              background-position: 60%;
            }
            .practice-card {
              width: 100%;
            }
            .practice-container {
              padding-top: 40px;
              padding-left: 12px;
              padding-right: 12px;
            }
          }
        </style>
        <div id="practice" class="practice-container">
          <div class="practice-bg-layer">
            <div class="practice-info-cards">
              <div class="practice-card">September 27</div>
              <div class="practice-card">"Lukomorye" Nursery </div>
              <div class="practice-card">Panfilov village</div>
              <div class="practice-card">Within the framework of the CAAPR Conference</div>
            </div>
            <h2 class="practice-title">
              Practice day and master classes  <br />
              «GREEN EXPERT» 
            </h2>
          </div>
        </div>
        <div class="program-container">
          <div class="program-top-part">
              <div class="program-date"><b>27.09</b> Friday <span>&#8595</span> </div>
              <p class="program-text">Lecturers from among the speakers from the previous days of the  conference, as well as specially invited experts, will conduct practical  classes on the topics of modern production of planting material and  working with it at landscaping sites. 
                <br><br> The topic is intended primarily for green industry professionals - nursery growers and landscapers.
                <br> <br>
                All lectures are in Russian</p>
          </div>
      </div>
        <style>
            a {
              text-decoration: none;
            }
            .countdown-container {
              text-align: center;
              max-width: 1200px;
              margin: 0 auto;
              margin-bottom: 5.5%;
              padding-top: 5.5%;
            }
            .countdown-title {
              font-size: 50px;
              margin-bottom: 50px;
              font-weight: 700;
              color: #083831 !important;
            }
            .countdown {
              display: flex;
              justify-content: center;
              gap: 10px;
              margin-bottom: 50px;
            }
            .countdown-element {
              background: #7fc241 !important;
              color: #000 !important;
              padding: 20px;
              border-radius: 13px;
              font-size: 32px;
              text-align: center;
              display: flex;
              flex-direction: column;
              width: 180px;
              height: 180px;
            }
            .countdown-element span {
              font-size: 30px;
              font-weight: 600;
            }
            .separator {
              font-size: 90px;
              display: flex;
              align-items: center;
              color: #7fc241 !important;
              padding-bottom: 15px;
            }
            .top-part-time {
              font-size: 70px;
              color: #0e150c !important;
              font-weight: 700;
            }
            .box-buttons-link-countdown {
              display: flex;
              justify-content: center;
              width: 370px;
              border-radius: 5px;
              padding-top: 25px;
              padding-bottom: 25px;
              font-size: 18px;
              font-weight: 700;
              background: #083831 !important;
              color: white !important;
              box-shadow: 0 0 6px rgba(37, 34, 34, 0.75);
            }
            .green-countdown {
              background: #7fc241 !important;
              color: #0e150c !important;
            }
            .box-buttons-link-countdown:hover {
              background: #ffffff !important;
              color: #0e150c !important;
              transition: all 0.3s;
            }
            .countdown-button-box {
              display: flex;
              gap: 40px;
              justify-content: center;
            }
      
            @media (max-width: 660px) {
              .countdown-title {
                font-size: 30px;
              }
              .countdown-element {
                width: 100px;
                height: 100px;
                font-size: 20px;
              }
              .countdown-element span {
                font-size: 20px;
              }
              .top-part-time {
                font-size: 30px;
              }
              .separator {
                font-size: 50px;
              }
              .countdown-button-box {
                flex-wrap: wrap;
                gap: 15px;
              }
            }
            @media (max-width: 450px) {
              .countdown-container {
                padding: 15px;
                margin-bottom: 50px;
                padding-top: 40px;
              }
              .countdown-element {
                width: 60px;
                height: 60px;
                font-size: 15px;
                justify-content: center;
                align-items: center;
              }
              .countdown-element span {
                font-size: 14px;
              }
              .top-part-time {
                font-size: 18px;
              }
              .separator {
                font-size: 35px;
              }
            }
          </style>
          <div class="countdown-container">
            <div class="countdown-title">
              Take part in events
            </div>
            <div class="countdown" id="countdown">
              <div class="countdown-element">
                <div class="top-part-time" id="days">00</div>
                <span class="days-seconds">days</span>
              </div>
              <div class="separator">:</div>
              <div class="countdown-element">
                <div class="top-part-time" id="hours">00</div>
                <span class="days-seconds">hours</span>
              </div>
              <div class="separator">:</div>
              <div class="countdown-element">
                <div class="top-part-time" id="minutes">00</div>
                <span class="days-seconds">minutes</span>
              </div>
              <div class="separator">:</div>
              <div class="countdown-element">
                <div class="top-part-time" id="seconds">00</div>
                <span class="days-seconds">seconds</span>
              </div>
            </div>
            <div class="countdown-button-box">
              <a
                class="box-buttons-link-countdown green-countdown"
                href="#popup:conference-registration"
                >Become a participant in events
              </a>
            </div>
          </div>
              <style>
             a {
               text-decoration: none;
             }
             .excursion-container {
               padding: 0px 8.45% 5.5% 8.45%;
               display: flex;
               flex-direction: column;
               align-items: center;
             }
             .excursion-left-img {
               background-repeat: no-repeat;
               padding-left: 5%;
               padding-right: 5%;
               padding-top: 3%;
               height: 639px;
               width: 593px;
               border-radius: 10px;
               background-image: url("https://static.tildacdn.com/tild6464-6363-4633-a435-326266356135/1303_1.png");
               background-size: cover;
               background-position: 100% 0;
               min-width: 330px;
             }
             .excursion-title {
               font-size: 50px;
               font-weight: 700;
               color: #083831 !important;
               margin-bottom: 50px;
             }
             .excursion-left-text-box {
               display: flex;
               gap: 20px;
               flex-wrap: wrap;
             }
             .excursion-left-infobox {
               color: #083831 !important;
               background: #ffffff !important;
               font-size: 18px;
               font-weight: 700;
               padding: 15px 20px;
               border-radius: 5px;
             }
             .excursion-container-content {
               display: flex;
               justify-content: space-between;
               gap: 3%;
               margin-bottom: 30px;
               width: 100%;
             }
             .excursion-right-img {
               display: flex;
               flex-direction: column;
               gap: 20px;
               justify-content: space-between;
             }
             .excursion-right-img img {
               object-fit: cover;
             }
             .excursion-iconbox {
               display: flex;
               align-items: center;
               justify-content: space-between;
               width: 100%;
               gap: 20px;
               padding: 30px 50px;
               background: #083831 !important;
               border-radius: 10px;
               padding-right: 10%;
               margin-bottom: 30px;
             }
             .excursion-iconbox-title {
               color: #ffffff !important;
               font-size: 30px;
               font-weight: 700;
               margin-right: 9%;
               white-space: nowrap;
             }
             .excursion-iconbox-card-text {
               color: #ffffff !important;
               font-size: 18px;
               font-weight: 500;
             }
             .excursion-iconbox-card {
               display: flex;
               flex-direction: column;
               align-items: center;
               gap: 6px;
             }
             .excursion-divider {
               background: #7FC241;
               height: 100px;
               width: 2px;
             }
             .excurison-icon-container {
               display: flex;
               gap: 10px;
               align-items: center;
               justify-content: space-between;
               width: 100%;
             }
             .excursion-button {
               display: flex;
               justify-content: center;
               align-items: center;
               padding: 15px 25px;
               color: #083831 !important;
               font-size: 18px;
               font-weight: 600;
               background: #ffffff !important;
               border: 1px solid #083831 !important;
               border-radius: 5px;
             }
             .excursion-button:hover {
               background: #083831 !important;
               color: #ffffff !important;
             }
             .excursion-button span {
               margin-left: 7px;
               fill: #ffffff;
               font-size: 20px;
             }
             .excurison-icon-container-mobile {
               display: none;
             }
             @media (min-width: 1700px) {
               .excursion-left-img, .excursion-right-img img {
               width: 800px;
               height: auto; 
               object-fit: cover;
             }
             .br-display-none-none {
               display: none;
             }
             }
             @media (max-width: 1265px) {
               .br-display-none-none {
               display: none;
             }
             .excursion-container {
                 padding: 20px 4% 100px 4%;
             }
             
             @media (max-width: 1060px) {
               .excursion-container-content {
               flex-direction: column;
             }
             .excursion-left-img {
               width: 100%;
               height: 600px;
               background-position: 100% 40%;
               margin-bottom: 20px;
             }
               }
             }
             @media (max-width: 800px) {
              .excursion-title {
                text-align: center;
              }
               .excursion-container {
                 padding: 0px 12px 50px 12px;
             }
               .excursion-iconbox-title {
                 font-size: 20px;
               }
               .excursion-divider {
                 transform: rotate(90deg);
                 display: none;
                   }
               .excursion-iconbox {
                 flex-direction: column;
                 padding: 20px 20px;
                 align-items: flex-start;
               }
               .excurison-icon-container{
                 display: none !important;
               }
               .excurison-icon-container-mobile {
               display: flex;
               justify-content: space-evenly;
               width: 100%;
             } 
               .excursion-iconbox-left,   .excursion-iconbox-right {
               display: flex ;
               flex-direction: column;
               gap: 20px;
             }
               .hideandseek {
               display: none;
             }
               .excursion-iconbox-card-text , .excursion-left-infobox {
               font-size: 12px;
             }
               .excursion-title {
               font-size: 30px;
               margin-bottom: 30px;
             }
             .excursion-iconbox-card-height33px {
              padding-top: 6px;
             }
           }
           </style>
           <div class="excursion-container" id="excursion">
               <p class="excursion-title">Excursion <br class="br-display-none-none"> to Charyn Canyon – “Valley of Castles”</p>
               <div class="excursion-container-content">
                   <div class="excursion-left-img">
                       <div class="excursion-left-text-box">
                           <div class="excursion-left-infobox">28.09.2024</div>
                           <div class="excursion-left-infobox">One day tour</div>
                       </div>
                   </div>
                   <div class="excursion-right-img">
                       <img class="excursion-img" src="https://static.tildacdn.com/tild3864-3934-4564-b536-343730333236/1303_2.png" alt="">
                       <img class="excursion-img" src="https://static.tildacdn.com/tild3764-3236-4231-a236-653065393634/1303_3.png" alt="">
                   </div>
               </div>
               <div class="excursion-iconbox">
                   <p class="excursion-iconbox-title">The price <br class="hideandseek">includes</p>
                   <div class="excurison-icon-container">
                   <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3834-6533-4538-b361-353465323933/Group.svg" alt="">
                       <p class="excursion-iconbox-card-text">Transfer</p>
                   </div>
                   <div class="excursion-divider"></div>
                   <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3064-3637-4732-b334-336332636632/Group_1.svg" alt="">
                       <p class="excursion-iconbox-card-text">Guide services</p>
                   </div>
                   <div class="excursion-divider"></div>
                   <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3832-3663-4637-a634-323462663432/003-tickets.svg" alt="">
                       <p class="excursion-iconbox-card-text">Entrance fees</p>
                   </div>
                   <div class="excursion-divider"></div>
                   <div class="excursion-iconbox-card ">
                       <img class="excursion-iconbox-card-icon " src="https://static.tildacdn.com/tild3464-3236-4364-a632-623464646531/004-dinner.svg" alt="">
                       <p class="excursion-iconbox-card-text ">Lunch</p>
                   </div>
                 </div>
                 <div class="excurison-icon-container-mobile">
                   <div class="excursion-iconbox-left">
                     <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3834-6533-4538-b361-353465323933/Group.svg" alt="">
                       <p class="excursion-iconbox-card-text">Transfer</p>
                   </div>
                   <div class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3064-3637-4732-b334-336332636632/Group_1.svg" alt="">
                       <p class="excursion-iconbox-card-text">Guide services</p>
                   </div>
                   </div>
                   <div class="excursion-iconbox-right">
                     <div style="transform: translateY(3px);" class="excursion-iconbox-card">
                       <img class="excursion-iconbox-card-icon" src="https://static.tildacdn.com/tild3832-3663-4637-a634-323462663432/003-tickets.svg" alt="">
                       <p class="excursion-iconbox-card-text">Entrance fees</p>
                   </div>
                   <div class="excursion-iconbox-card excursion-iconbox-card-height33px">
                       <img class="excursion-iconbox-card-icon " src="https://static.tildacdn.com/tild3464-3236-4364-a632-623464646531/004-dinner.svg" alt="">
                       <p class="excursion-iconbox-card-text">Lunch</p>
                   </div>
                   </div>
                 </div>
               </div>
               <a target="_blank" href="https://greenspaces.kz/charyn-canyon-eng" class="excursion-button">Read more <span>&#8594</span> </a>
           </div>
        <style>
          a {
            text-decoration: none;
            color: #0e150c !important;
          }
          .price-container {
            position: relative;
            padding: 55px 8.45% 5% 8.45%;
            background: url("https://static.tildacdn.com/tild6633-6164-4437-a163-343335643739/13838661_1.png");
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .price-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1;
          }
          .price-title {
            color: white !important;
            font-size: 50px;
            font-weight: 700;
            text-align: center;
            position: relative;
            z-index: 100;
            margin-bottom: 50px;
          }
          .price-info-box {
            display: flex;
            gap: 20px;
            justify-content: space-between;
            position: relative;
            z-index: 100;
            margin-bottom: 5%;
            width: 100%;
          }
          .price-info-card {
            padding: 30px 13px 15px 13px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            border: 1px solid white;
            border-radius: 10px;
            min-width: 225px;
            width: 100%;
          }
          .price-info-card-date,
          .price-info-card-price,
          .price-info-card-about,
          .price-info-card-details,
          .price-info-card-details-semibold {
            color: white !important;
          }
          .price-info-card-details-semibold {
            font-size: 12px;
            font-weight: 600;
          }
          .price-info-card-details {
            font-size: 12px;
            font-weight: 400;
          }
          .price-info-card-date {
            font-size: 18px;
            font-weight: 500;
          }
          .price-info-card-price {
            font-size: 30px;
            font-weight: 700;
          }
          .price-info-card-about {
            font-size: 18px;
            font-weight: 500;
          }
          .price-divider {
            background: #7fc241;
            width: 100%;
            height: 2px;
          }
          .price-info-card-second-box-outside {
            padding-bottom: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            border: 1px solid white;
            border-radius: 10px;
            width: 40%;
            min-width: 466px;
            padding-bottom: 25px;
          }
          .price-info-card-second-box-inside {
            padding-top: 30px;
            padding-bottom: 20px;
            padding-right: 17px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            border-bottom: 1px solid white;
            border-radius: 10px;
            width: 100%;
          }
          .second-box-oneline {
            display: flex;
            gap: 30px;
            width: 100%;
            padding-left: 13px;
          }
          .price-bottom-box {
            display: flex;
            gap: 25px;
            justify-content: space-between;
            width: 100%;
          }
          .second-box-oneline-info-box {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .white-space-no-wrap {
            white-space: nowrap;
          }
          .padding-left-13px {
            padding-left: 13px;
          }
          @media (max-width: 1300px) {
            .price-bottom-box {
                width: 100%;
            }
            .price-container {
                display: block;
            }
            .price-info-box {
              flex-wrap: wrap;
            }
            .price-info-card {
              flex: 1 1 50%;
            }
            .price-info-card:nth-child(1) {
              flex-basis: 20%;
            }
            .price-info-card:nth-child(2) {
              min-width: 500px;
            }
            .price-info-card:nth-child(3),
            .price-info-card:nth-child(4) {
              flex-basis: 40%; /* Эти элементы занимают всю ширину контейнера */
            }
          }
          @media (max-width: 900px) {
            .price-info-box {
              flex-direction: column;
            }
            .price-info-card-second-box-outside {
              min-width: 100%;
            }
          }
          @media (max-width: 500px) {
            .second-box-oneline {
              flex-direction: column;
              gap: 10px;
            }
            .price-title {
              font-size: 30px;
            }
            .price-container {
              padding-bottom: 50px;
              padding-right: 12px;
              padding-left: 12px;
            }
            .br-display-none-br {
              display: none;
            }
            .padding-right-13px {
              padding-right: 13px;
            }
          }
        </style>
        <div id="price" class="price-container">
          <p class="price-title">Cost of participation</p>
          <div class="price-info-box">
            <div class="price-info-card">
              <p class="price-info-card-date">
                Day 1 <br class="br-display-none-br" />
                25.09.2024
              </p>
              <div class="price-divider"></div>
              <p class="price-info-card-about">Conference</p>
              <p class="price-info-card-price">55$ / 50€</p>
              <p class=" white-space-no-wrap price-info-card-details">The price includes coffee break</p>
              <div>
                  <p class="price-info-card-details-semibold">Lunch is additionally<br class="br-display-none-br">(as will) — 15$ / 14€ </p>
                </div>
            </div>
            <div class="price-info-card-second-box-outside">
              <div class="price-info-card-second-box-inside">
                <p class="price-info-card-date padding-left-13px">
                  Day 2 <br class="br-display-none-br" />
                  26.09.2024
                </p>
                <div style="width: 98%; margin-left: 13px;" class="price-divider"></div>
                <div class="second-box-oneline">
                  <p class="price-info-card-price inline">75$ / 70€</p>
                  <div class="second-box-oneline-info-box">

                      <p class="price-info-card-about inline">
                        Conference
                        </p>
                        <p class="price-info-card-details">The price includes coffee break</p>
                        <div>
                            <p class="price-info-card-details-semibold">Lunch is additionally<br class="br-display-none-br">(as will) — 15$ / 14€ </p>
                        </div>
                    </div>
                </div>
              </div>
              <div class="second-box-oneline padding-right-13px">
                <p class="price-info-card-price">110$ / 100€</p>
                <p class="price-info-card-about">
                  Evening banquet for 
                  <br class="br-display-none-br">the participants of the <br class="br-display-none-br"> conference and exhibition
                </p>
              </div>
            </div>
            <div class="price-info-card">
              <p class="price-info-card-date">
                Day 3 <br class="br-display-none-br" />
                27.09.2024
              </p>
              <div class="price-divider"></div>
              <p class="price-info-card-about">
                Practice day <br class="br-display-none-br"> and master classes <br class="br-display-none-br"> at the nursery
                </p>
                <p class="price-info-card-price">90$ / 80€</p>
                <p class="price-info-card-details">The price includes coffee break, <br class="br-display-none-br"> lunch, transfer from the city <br class="br-display-none-br"> to nursery and back</p>
                <p class="price-info-card-details-semibold">
                  *Attention! The number of <br class="br-display-none-br"> spots 
                  is limited to 60 people.
                  </p>
            </div>
            <div class="price-info-card">
              <p class="price-info-card-date">
                Day 4 <br class="br-display-none-br" />
                28.09.2024
              </p>
              <div class="price-divider"></div>
              <p class="price-info-card-about">
                Excursion to Charyn 
                 <br class="br-display-none-br"> Canyon – “Valley of  <br class="br-display-none-br">Castles”
                </p>
                <p class="price-info-card-price">90$ / 80€</p>
                <p class="price-info-card-details">The price includes lunch, <br class="br-display-none-br">transfer, guide services, <br class="br-display-none-br">entrance fees </p>
            </div>
          </div>
          <style>
            .price-bottom-box {
              position: relative;
              z-index: 10;
            }
            .price-discounts {
              background-color: rgba(255, 254, 254, 0.3);
              border-radius: 10px;
              padding: 25px 70px 25px 40px;
              width: 48%;
            }
            .discounts-title {
              color: white !important;
              font-size: 30px;
              font-weight: 700;
              margin-bottom: 15px;
            }
            .discounts-box {
              display: flex;
              gap: 4%;
              margin-bottom: 15px;
            }
            .discount-info-card {
              display: flex;
              flex-direction: column;
            }
            .discount-info-card-price {
              color: white !important;
              font-size: 30px;
              font-weight: 700;
            }
            .discount-info-card-about {
              color: white !important;
              font-size: 18px;
              font-weight: 600;
            }
            .discount-divider {
              background: #7fc241;
              width: 2px;
              height: 65px;
            }
            .price-bottom-box__button-box {
              width: 48%;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              gap: 20px;
            }
            .price-buttons {
              display: flex;
              justify-content: center;
              width: 100%;
              border-radius: 5px;
              padding-top: 25px;
              padding-bottom: 25px;
              padding-left: 20px;
              padding-right: 20px;
              font-size: 18px;
              font-weight: 700;
              background: #ffffff !important;
              box-shadow: 0 0 15px 0 #1d2d0e;
              text-align: center;
            }
            .price-button-green {
              background: #7fc241 !important;
            }
    
            .price-buttons:hover {
              background: #083831 !important;
              color: white !important;
              transition: all 0.3s;
            }
            @media (max-width: 900px) {
              .price-bottom-box {
                flex-direction: column;
              }
              .price-discounts,
              .price-bottom-box__button-box {
                width: 100%;
              }
            }
            @media (max-width: 450px) {
              .price-discounts {
                padding: 20px 15px 20px 25px;
              }
              .discounts-box {
                flex-direction: column;
                gap: 15px;
              }
              .discount-divider {
                height: 2px;
                width: 200px;
              }
            }
          </style>
          <div class="price-bottom-box">
            <div class="price-discounts">
              <p class="discounts-title">Discounts</p>
              <div class="discounts-box">
                <div class="discount-info-card">
                  <p class="discount-info-card-price">32$ / 30€</p>
                  <p class="discount-info-card-about">When purchasing tickets for all  <br> three days of the conference</p>
                </div>
                <div class="discount-divider"></div>
                <div class="discount-info-card">
                  <p class="discount-info-card-price">25%</p>
                  <p class="discount-info-card-about">To members of CAPNA</p>
                </div>
              </div>
              <p class="price-info-card-details">*Discounts do not stack and do not apply to lunches, the banquet, and the tour</p>
            </div>
            <div class="price-bottom-box__button-box">
              <a href="#popup:conference-registration" class="price-buttons"
                >Register</a
              >
            </div>
          </div>
        </div>
        <!-- 
        <style>
            .information-partners-container {
              padding: 100px 0px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 50px;
            }
            .information-partners-title {
              font-size: 50px;
              font-weight: 700;
              color: #083831 !important;
              text-align: center;
            }
            .infortamtion-partners-info-box {
              display: flex;
              justify-content: space-between;
              width: 100%;
              max-width: 950px;
              flex-wrap: wrap;
              gap: 30px;
            }
            .information-partners-link {
              transition: all 0.5s;
            }
            .information-partners-link img {
                max-width: 218px;
            }
            .information-partners-link:hover {
              transform: scale(1.15);
            }
            @media (max-width: 625px) {
              .information-partners-title{
                font-size: 30px;
              }
              .infortamtion-partners-info-box {
                  justify-content: center;
              }
             
            }
      </style>
      <div class="information-partners-container">
          <p class="information-partners-title">Information Partners of CAPNA</p>
          <div class="infortamtion-partners-info-box">
              <a class="information-partners-link" href="https://www.ruspitomniki.ru/"><img src="https://static.tildacdn.com/tild3638-6164-4838-b230-313565363235/Logo_1-01_1.svg" alt=""></a>
              <a  class="information-partners-link"href="https://akademiagm.online/"><img src="https://static.tildacdn.com/tild3738-6635-4838-a666-666663373735/academia_1.png" alt=""></a>
              <a class="information-partners-link" href="https://zstrela.ru/"><img src="https://static.tildacdn.com/tild6230-3831-4263-b363-353437343337/logo_front_down_line.svg" alt=""></a>
              
          </div>
      </div>
       -->
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
          * {
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif;
            padding: 0;
            margin: 0;
          }
          a {
            text-decoration: none;
          }
          .footer-container {
            background: #083831 !important;
            display: flex;
            gap: 3%;
            justify-content: space-between;
            padding: 30px 8.45% 50px 8.45%;
          }
          .footer-map {
            max-width: 500px;
            max-height: 200px;
            border-radius: 10px;
          }
          .yandex-map {
            border-radius: 10px;
          }
          .box-smm-footer {
            display: flex;
            gap: 20px;
          }
          .footer-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .smm-button {
            background: #7fc241 !important;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .footer-left-title,
          .footer-right-title {
            color: white !important;
            font-weight: 700;
            font-size: 18px;
          }
          .footer-left-adress,
          .footer-text-link,
          .footer-phone-link {
            color: white !important;
            font-size: 18px;
            font-weight: 400;
          }
          .footer-center {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .footer-right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          .iframe-yandex-map {
            width: 500px;
            height: 220px;
          }
         
          @media (max-width: 1100px) {
            .iframe-yandex-map {
              width: 326px;
              height: 230px;
            }
          }
          @media (max-width: 900px) {
            .footer-container {
              flex-direction: column;
              align-items: center;
            }
            .footer-left {
              margin-bottom: 60px;
            }
            .footer-center {
              margin-bottom: 30px;
              align-items: center;
            }
            .footer-right {
              align-items: center;
            }
            .footer-text-link {
              text-align: center;
            }
          }
          @media (max-width: 600px) {
            .footer-container {
              padding-top: 40px;
              padding-left: 12px;
              padding-right: 12px;
            }
            .ytp-large-play-button {
              top: 80%
          }
          }
        </style>
        <div class="footer-container">
          <div class="footer-left">
            <p class="footer-left-title">Conference and exhibition address:</p>
            <p class="footer-left-adress">CCH «Bakshasarai», KCBC«Atakent»</p>
            <div class="footer-map">
              <div
                class="yandex-map"
                style="position: relative; overflow: hidden"
              >
                <a
                  href="https://yandex.ru/maps/org/bakshasaray/1135747147/?utm_medium=mapframe&utm_source=maps"
                ></a
                ><a
                  href="https://yandex.ru/maps/162/almaty/category/banquet_hall/184108315/?utm_medium=mapframe&utm_source=maps"
                  style="
                    color: #eee;
                    font-size: 12px;
                    position: absolute;
                    top: 14px;
                  "
                  >Banquet hall in Almaty</a
                ><a
                  href="https://yandex.ru/maps/162/almaty/category/catering/184108321/?utm_medium=mapframe&utm_source=maps"
                  style="
                    color: #eee;
                    font-size: 12px;
                    position: absolute;
                    top: 28px;
                  "
                  >Catering in Almaty</a
                ><iframe
                  class="iframe-yandex-map"
                  src="https://yandex.ru/map-widget/v1/?filter=alternate_vertical%3ARequestWindow&indoorLevel=1&ll=76.906344%2C43.223586&mode=search&oid=1135747147&ol=biz&sctx=ZAAAAAgBEAAaKAoSCUSoUrMHOlNAEUpATMKFnEVAEhIJ0J1g%2F3Vuej8RJT0MrU7OcD8iBgABAgMEBSgKOABAogFIAWoCa3qdAc3MTD2gAQCoAQC9AZ5rq9LCAQXLwMidBIICFNCx0LDQutGI0LDRgdCw0YDQsNC5igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=76.906344%2C43.223586&sspn=0.009781%2C0.006219&text=%D0%B1%D0%B0%D0%BA%D1%88%D0%B0%D1%81%D0%B0%D1%80%D0%B0%D0%B9&z=17.07"
                  frameborder="1"
                  allowfullscreen="true"
                  style="position: relative"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="footer-center">
            <p class="footer-right-title">Quick links:</p>
            <a href="https://greenspaces.kz/#tema-2-conf" class="footer-text-link">About the conference</a
            ><a href="https://greenspaces.kz/#program" class="footer-text-link">Conference agenda</a
            ><a href="https://greenspaces.kz/#exhibition" class="footer-text-link"
              >International Specialized Exhibition «Green Spaces 2024»</a
            ><a href="https://greenspaces.kz/#practice" class="footer-text-link"
              >Practice day
              and master classes «GREEN EXPERT» </a
            ><a href="https://greenspaces.kz/#excursion" class="footer-text-link">Excursion</a
            ><a href="https://greenspaces.kz/#price" class="footer-text-link">Cost of participation</a>
          </div>
          <div class="footer-right">
            <img
              src="https://static.tildacdn.com/tild6538-3139-4563-a263-636563393535/__1.svg"
              alt="logo"
            />
            <a href="tel:+77717269919" class="footer-phone-link"
              >+7 (771) 726 99 19</a
            >
            <a href="tel:+77717138834" class="footer-phone-link"
              >+7 (771) 713 88 34</a
            >
            <a href="https://caapr.kz/" class="footer-phone-link">www.caapr.kz</a>
            <div class="box-smm-footer">
              <a target="_blank" href="https://www.instagram.com/caaprcom/" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3436-6138-4437-b434-393630383032/insta.svg"
                  alt="insta"
              /></a>
              <a target="_blank" href="https://wa.me/7717138834" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3362-3864-4661-b238-363137623064/phone-icon.svg"
                  alt="phone"
              /></a>
              <a href="mailto:info@caapr.kz" class="smm-button"
                ><img
                  src="https://static.tildacdn.com/tild3236-6464-4666-b563-376138303739/mail-icon.svg"
                  alt="mail"
              /></a>
            </div>
          </div>
        </div>
      </div>
        `;

        function setContent(language) {
             if (language === 'ru') {
                document.getElementById('content').innerHTML = contentRu;
                document.querySelector(".language").innerHTML = `<img src="https://static.tildacdn.com/tild6266-3535-4232-b337-313535363530/united-states.svg" alt=""> ENG`;
            } else {
                document.getElementById('content').innerHTML = contentEn;
                document.querySelector(".language").innerHTML = `<img src="https://static.tildacdn.com/tild3364-6639-4531-b735-333534386133/russia.svg" alt=""> RUS`;
            }
            attachButtonHandler();
        }

        function attachButtonHandler() {
            const button = document.querySelector(".language");
            if (button) {
                button.addEventListener("click", toggleLanguage);
            }
        }

        function toggleLanguage() {
            currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
            setContent(currentLanguage);
        }

        document.addEventListener("DOMContentLoaded", function() {
            setContent(currentLanguage);
        });
     
        document.addEventListener("DOMContentLoaded", () => {
    // Данные для каждого дня и зала
    const programData = {
      '25.09': {
        'Зал №1': 'Программа в разработке и появится здесь в ближайшее время',
        'Зал №2': 'Программа в разработке и появится здесь в ближайшее время'
      },
      '26.09': {
        'Зал №1': 'Программа в разработке и появится здесь в ближайшее время',
        'Зал №2': 'Программа в разработке и появится здесь в ближайшее время'
      }
    };
  
    // Функция для инициализации аккордеона
    const initAccordion = (container, date) => {
      const placeButtons = container.querySelectorAll('.program-choose-place');
      const accordionInfo = container.querySelector('.accordion-information');
  
      // Функция для обновления информации и активного класса
      const updateAccordion = (button) => {
        placeButtons.forEach(btn => btn.classList.remove('active-accordion'));
        button.classList.add('active-accordion');
        const hall = button.textContent.trim();
        accordionInfo.innerHTML = programData[date][hall] || 'Программа в разработке и появится здесь в ближайшее время';
      };
  
      // Обработчики событий для кнопок
      placeButtons.forEach(button => {
        button.addEventListener('click', () => {
          updateAccordion(button);
        });
      });
  
      // Установить первый зал активным по умолчанию
      if (placeButtons.length > 0) {
        updateAccordion(placeButtons[0]);
      }
    };
  
    // Найти и инициализировать все аккордеоны
    const programContainers = document.querySelectorAll('.program-container');
    programContainers.forEach(container => {
      const dateElement = container.querySelector('.program-date b');
      if (dateElement) {
        const date = dateElement.textContent.trim();
        initAccordion(container, date);
      }
    });
  });
       
          
            // Установите дату и время окончания отсчета
            const endDate = new Date("2024-09-24T23:59:59").getTime();
            // Функция обновления таймера
            function updateCountdown() {
              const now = new Date().getTime();
              const timeLeft = endDate - now;
      
              const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
              const hours = Math.floor(
                (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );
              const minutes = Math.floor(
                (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
              );
              const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
              document.getElementById("days").innerText = String(days).padStart(
                2,
                "0"
              );
              document.getElementById("hours").innerText = String(hours).padStart(
                2,
                "0"
              );
              document.getElementById("minutes").innerText = String(
                minutes
              ).padStart(2, "0");
              document.getElementById("seconds").innerText = String(
                seconds
              ).padStart(2, "0");
      
              if (timeLeft < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Время вышло";
              }
            }
      
            // Обновление таймера каждую секунду
            const countdownInterval = setInterval(updateCountdown, 1000);
      
            // Начальная установка таймера
            updateCountdown();
      
