import React from "react";
import "./Home.css";

const HomeFeaturesTable = () => {
  return (
    <div id="Home-Features" class="section">
      <div class="container-default w-container">
        <div
          data-w-id="d9079e37-7274-ccb2-2f88-5df9e4023df8"
          class="content-top home-features"
        >
          <h2 class="title home-features">
            <span class="text-span">
              <strong class="bold-text">
                Your translation team works more efficiently
              </strong>
            </span>
          </h2>
          <div class="_2-buttons-wrapper">
            <a
              href="/communication/request-free-trial"
              class="button-primary _2-buttons w-button"
            >
              Try it out for free
            </a>
            <a
              href="/features/all-features"
              class="button-secondary _2-buttons w-button"
            >
              Browse Features
            </a>
          </div>
        </div>
        <div
          data-w-id="4d119972-639e-955a-ef3d-36a665ef6516"
          //   style={{
          //     transform:
          //       "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          //     transformStyle: "preserve-3d",
          //     opacity: 1,
          //   }}
          class="w-layout-grid home-features-grid"
        >
          <div class="home-feature-wrapper">
            <img
              src="https://cdn.prod.website-files.com/6244a7271038bc8be104c978/6342ac1ce45e017b89ea3f96_Cloud-for-Comics%20Copy.svg"
              alt=""
              height="42"
              class="image home-feature-icon"
            />
            <div class="home-feature-content">
              <h3 class="title h4-size home-feature-title">
                Gather your translations
              </h3>
              <p class="paragraph home-feature">
                All your translations gathered and sync in one place to avoid
                sending plenty of files.
              </p>
            </div>
          </div>
          <div class="home-feature-wrapper">
            <img
              src="https://cdn.prod.website-files.com/6244a7271038bc8be104c978/630f86930d4a9ee797c722a4_No_Copy_Paste2.gif"
              height="42"
              alt=""
              class="image home-feature-icon"
            />
            <div class="home-feature-content">
              <h3 class="title h4-size home-feature-title">
                Copy-paste saver</h3>
              <p class="paragraph home-feature">
                <span>
                  Import your translations in seconds at the right place, in
                  your InDesign/PSD files.
                </span>
              </p>
            </div>
          </div>
          <div class="home-feature-wrapper">
            <img
              src="https://cdn.prod.website-files.com/6244a7271038bc8be104c978/628fda18f54d398c34c3c70c_Team.svg"
              height="42"
              alt=""
              class="image home-feature-icon"
            />
            <div class="home-feature-content">
              <h3 class="title h4-size home-feature-title">
                Team collaboration
              </h3>
              <p class="paragraph home-feature">
                Copy-edit and comment translations. <br />
                Give instruction for lettering.
              </p>
            </div>
          </div>
          <div class="home-feature-wrapper">
            <img
              src="https://cdn.prod.website-files.com/6244a7271038bc8be104c978/628fde33067bea0610d0550b_SearchWarning.svg"
              height="42"
              alt=""
              class="image home-feature-icon"
            />
            <div class="home-feature-content">
              <h3 class="title h4-size home-feature-title">
                Track your translation
              </h3>
              <p class="paragraph home-feature">
                Be alerted immediately if there are any missing or exceeding
                translations.
              </p>
            </div>
          </div>
          <div class="home-feature-wrapper">
            <img
              src="https://cdn.prod.website-files.com/6244a7271038bc8be104c978/632478f188eeaad093d4f53a_ColouredPretranslation.svg"
              height="42"
              alt=""
              class="image home-feature-icon"
            />
            <div class="home-feature-content">
              <h3 class="title h4-size home-feature-title">
                <strong>Translation assistance</strong>
              </h3>
              <p class="paragraph home-feature">
                Pre-translate on demand with human validation requested as a
                safeguard.
                <br />
              </p>
            </div>
          </div>
          <div class="home-feature-wrapper">
            <img
              src="https://cdn.prod.website-files.com/6244a7271038bc8be104c978/643ea2885c6641b4e07df934_BD_Comics_Manga_Webtoon.svg"
              height="42"
              alt=""
              class="image home-feature-icon"
            />
            <div class="home-feature-content">
              <h3 class="title h4-size home-feature-title">
                Comics, Manga, Webtoons
              </h3>
              <p class="paragraph home-feature">
                Compatible with all type of comic book content from/to any
                language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturesTable;
