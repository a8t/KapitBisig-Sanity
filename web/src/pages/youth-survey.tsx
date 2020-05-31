import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"
import Link from "../components/Link"
import KapitBisigHero from "../components/hero"
import KBLogo from "../images/kapitbisig-logo.svg"
import g from "../images/g.png"
import nicole from "../images/nicole.png"

const KBLogoCircle = (
  <div
    className="bg-gray-100 border-white rounded-full w-16 h-16 absolute flex justify-center items-center mx-auto"
    style={{
      top: "-2rem",
      left: 0,
      right: 0,
      width: "4rem",
      height: "4rem",
    }}
  >
    <img src={KBLogo} className="w-10 mx-auto " />
  </div>
)

const SurveyHeader = () => (
  <header className="py-24 sm:max-height-60vh flex items-center text-white relative overflow-y-hidden bg-gray-800">
    <section className="container">
      <Title color="white" className="text-6xl self-start relative">
        Kapit-Bisig Youth Survey
      </Title>
      <Subtitle color="white" className="self-start max-w-2xl">
        Are you a Filipino youth in Canada?
        <br />
        Fill out the survey below to enter the raffle.
      </Subtitle>
    </section>
  </header>
)

const BlockQuote = ({
  quote,
  avatar = null,
  authorName,
  authorDescription,
}) => (
  <blockquote className="grid bg-white shadow-xl p-8 md:p-12">
    <div className="relative">
      <span
        className="text-6xl -ml-4 -mt-1 text-white mr-2 hidden sm:block absolute top-0 z-1 leading-none"
        aria-hidden="true"
        style={{
          textShadow: `
          3px 3px 0 rgba(0,0,0,0.05),
        -1px -1px 0 rgba(0,0,0,0.05),  
         1px -1px 0 rgba(0,0,0,0.05),
         -1px 1px 0 rgba(0,0,0,0.05),
          1px 1px 0 rgba(0,0,0,0.05)`,
        }}
      >
        &ldquo;
      </span>
    </div>

    <p className="mb-4 sm:text-xl italic z-10 relative">{quote}</p>

    <footer className="flex items-center z-10">
      {avatar ? (
        <img
          alt="Avatar of nickd"
          className="w-12 h-12 mr-4 rounded-full bg-neutral-500 object-cover"
          src={avatar}
        />
      ) : (
        <div className="w-12 h-12 mr-4  rounded-full bg-gray-400" />
      )}
      <div className="flex flex-col">
        <span className="mb-1 sm:text-lg font-bold">{authorName}</span>
        <span className="text-sm sm:text-md ">{authorDescription}</span>
      </div>
    </footer>
  </blockquote>
)

const YouthSurveyPage = () => {
  return (
    <Layout className="bg-gray-200">
      <SEO title="Youth Survey | Kapit-Bisig Canada" />

      <SurveyHeader />

      {/* this part connects the header with the next section */}
      <div className="bg-gray-800 relative z-20 w-full">
        <div
          className="bg-gray-200 absolute w-full"
          style={{ top: -50, height: 50 }}
        >
          <div
            className="bg-gray-800"
            style={{
              borderBottomRightRadius: "20% 50px",
              height: 50,
            }}
          ></div>
        </div>
        <div
          className="bg-gray-200 py-12 relative flex flex-col "
          style={{
            borderTopLeftRadius: "20% 50px",
          }}
        >
          {KBLogoCircle}
        </div>
      </div>

      <section className="container grid lg:grid-cols-2 gap-16">
        <article className="space-y-8 max-w-xl">
          <Subtitle color="dark">
            The situation regarding COVID-19 is worsening and it has a
            significant impact on our Filipino community.
          </Subtitle>
          <Paragraph color="dark">
            <span className="font-normal">
              We, a network of concerned Filipino community youth organizations,
              want to ensure that we are safe and healthy during this outbreak.
            </span>
          </Paragraph>
          <Paragraph>
            We are launching a survey for Filipino youth to:
            <ul className="ml-8 my-4 list-disc">
              <li>
                Study and understand the impacts of COVID-19 on Filipino youth
                and their families in Canada
              </li>
              <li>
                Identify specific concerns or needs we can respond to and
                address
              </li>
              <li>
                Create or revise programming to tailor to the needs of our
                Filipino-Canadian community
              </li>
            </ul>
          </Paragraph>
          <div className="h-12" />
          <Subtitle>About us</Subtitle>
          <Paragraph>
            <span className="font-bold">
              Kapit-Bisig Laban COVID Canada – Youth Network{" "}
            </span>
            commits to serving our communities. We hope to gather as much
            information as possible to inform us on how to provide resources and
            support each other in this time of crisis.
          </Paragraph>

          <Paragraph>
            The network includes:
            <ul className="ml-8 my-4 list-disc">
              <li>Anakbayan Canada</li>
              <li>FILCASA</li>
              <li>Makulay atbp.</li>
            </ul>
          </Paragraph>
        </article>

        <section className="max-w-sm ml-auto mr-auto lg:mr-1 flex flex-col space-y-16">
          <BlockQuote
            quote="We’d like thank our community partners for launching this survey, and we look forward to learning more on how we can identify and respond to the needs of our community."
            authorName="Georelle Mendoza"
            authorDescription="President, FILCASA"
            avatar={g}
          />
          <BlockQuote
            quote="Makulay thinks it's great if LGBT youth voices are heard."
            authorName="Anonymous"
            authorDescription="Member, Makulay atbp."
          />
          <BlockQuote
            quote="Anakbayan encourages all youth to fill out the survey."
            authorName="Nicole Araneta"
            authorDescription="Chairperson, Anakbayan-Canada"
            avatar={nicole}
          />
        </section>
      </section>

      <section className="my-24">
        <div className="bg-blue-100 text-gray-900 mx-auto pt-12 pb-6 px-24 md:rounded-lg max-w-3xl">
          <Subtitle>About the survey</Subtitle>
          <p>
            The survey will consist of questions focused on the following
            categories:
          </p>
          <ul className="ml-8 my-2 list-disc">
            <li>demographics</li>
            <li>economic & employment information</li>

            <li>education</li>
            <li>community involvement</li>
            <li>home life</li>
            <li>physical and mental health</li>
          </ul>
          <Paragraph>
            The survey should take about 20 minutes to complete.
          </Paragraph>

          <Paragraph>
            You can leave the survey at any time if you no longer wish to
            participate. If you no longer want your answers included in the
            survey after you complete it, you can contact us to have them
            removed.
          </Paragraph>

          <Paragraph>
            If you cannot complete the survey online and would like to do it by
            phone, contact us at our hotline +1 866-275-4046.
          </Paragraph>

          <Paragraph>
            After the completion of the survey, participants can opt in to enter
            a raffle to win a $50 gift card.
          </Paragraph>

          <Paragraph>
            All answers to this survey will be confidential. Personal
            information that identifies you will not be shared. Information will
            be aggregated by Kapit-Bisig Laban COVID Canada to present to the
            Filipino community to further inform education, programming, and
            advocacy efforts.
          </Paragraph>
        </div>
      </section>

      {/* survey embed section */}
      <section className="container py-8">
        <iframe
          className="airtable-embed z-10 relative rounded-lg"
          src="https://airtable.com/embed/shrKX3gvA4w5zWwpD?backgroundColor=purple"
          width="100%"
          height="600"
          style={{ background: "white", border: "1px solid #ccc" }}
        ></iframe>
      </section>
    </Layout>
  )
}
export default YouthSurveyPage
