import React from "react";

const ChangingLives = () => {
  return (
    <section className="bg-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row items-start gap-10">
        <div className="w-full md:w-3/4 lg:w-1/2 md:mx-auto lg:mx-0 md:order-first lg:order-last mt-10">
          <img
            src="./img/Strategy/s-banner.webp"
            alt="Face the Children program"
            className="w-full h-auto object-cover md:mx-auto"
          />
        </div>

        <div className="w-full md:w-full lg:w-1/2 space-y-8 text-gray-700">
          <div className="my-10 text-left">
            <p className="text-sm text-textyellow uppercase mb-1 md:text-xs">
              The Problem
            </p>
            <h2 className="text-lg lg:text-3xl md:text-3xl font-semibold text-primary mb-5">
              Rescuing Lives from Poverty and Abuse
            </h2>
            <p
              className="max-w-[480px] lg:text-sm "
              style={{ lineHeight: "2" }}
            >
              Historically in the Philippines, due to widespread poverty, the
              problem of abandoned, abused, or dangerously neglected (AADN)
              children has been remarkably large. Many hundreds of thousands of
              children, perhaps millions, have grown up living mostly on the
              streets. There is very minimal governmental protection or
              assistance for what are often termed “street children,” and in
              class-segregated social systems these children are not only viewed
              as a nuisance, but are the target of a wide variety of evils.
            </p>
          </div>

          <div className="my-10 text-left">
            <p className="text-sm text-textyellow uppercase mb-1 md:text-xs">
              Our Action
            </p>
            <h2 className="text-lg lg:text-3xl md:text-3xl font-semibold text-primary mb-5">
              Creating Lasting Change <br />
              through Our Intervention
            </h2>
            <p style={{ lineHeight: "1.8" }}>
              The Face the Children (FTC) program is established to serve AADN
              children through a program that provides protection, care,
              nurture, education, and spiritual development that affords them a
              genuinely greater opportunity for a dignified and meaningful adult
              life.
            </p>

            <ul className="mt-4 space-y-4 py-10">
              <strong className="text-primary">Protect</strong>
              <li
                className="pb-5 text-[14px] max-w-md"
                style={{ lineHeight: "2 " }}
              >
                We provide a safe environment and place for those living in our
                children’s homes, who are provided full-time care.
              </li>
              <strong className="text-primary">Care</strong>
              <li
                className="pb-5 text-[14px]  max-w-md "
                style={{ lineHeight: "2 " }}
              >
                We meet the basic physical and material needs for the children
                in the FTC program.
              </li>
              <strong className="text-primary">Nurture</strong>
              <li
                className="pb-5 text-[14px]  max-w-lg "
                style={{ lineHeight: "2 " }}
              >
                We provide loving oversight that involves listening, counseling,
                and prayer. We do our best to be a parent figure in the lives of
                the children.
              </li>
              <strong className="text-primary">Education</strong>
              <li
                className="pb-5 text-[14px]  max-w-lg "
                style={{ lineHeight: "2 " }}
              >
                We provide K-12 educational services for all the children in our
                program, as well as opportunities for University for the higher
                achievers.
              </li>
              <strong className="text-primary">Spiritual Development</strong>
              <li
                className="pb-5 text-[14px]  max-w-md "
                style={{ lineHeight: "2 " }}
              >
                As Christians we believe spiritual well-being comes through a
                meaningful relationship with God. The Bible is our main source
                of spiritual direction and guidance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangingLives;
