import React from "react";
const contactUs = [
  {
    title: "Contact Person: Rafique",
    content: `Contact Details\n
    Cell no: <a href="tel:0650900444">065 090 0444</a>`,
    email:
      "Email: <a href='mailto:rafiquemoosa7007@gmail.com'>rafiquemoosa7007@gmail.com</a>",
  },
  {
    title: "Contact Person: Avie Moosa",
    content: `Contact Details\n
    Cell no: <a href="tel:0670401792">067 040 1792</a>`,
    email:
      "Email: <a href='mailto:moosaavie@gmail.com'>moosaavie@gmail.com</a>",
  },
  {
    title: "Office Number",
    content: `Contact Details\n
    Office no: <a href="tel:0100230250">010 023 0250</a>`,
    email:
      "Email: <a href='mailto:viralholdingswoodworks@gmail.com'>viralholdingswoodworks@gmail.com</a>",
  },
];

const ContactUs = () => {
  return (
    <section
      style={{ overflowX: "hidden", overflowY: "scroll" }}
      className="section"
      id="vision"
    >
      {contactUs.map((data) => {
        return (
          <div className="aboutUsDiv">
            <h3 className="title">{data.title}</h3>
            <p className="content">
              {data.content.split("\n").map((item, index) =>
                index === 0 ? (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ) : index === 2 ? (
                  <p
                    className="content"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></p>
                ) : (
                  ""
                )
              )}
              <p
                className="content"
                dangerouslySetInnerHTML={{ __html: data.email }}
              ></p>
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default ContactUs;
