import React from "react";
const contactUs = [
  {
    title: "Contact Person: Rafique",
    content: `Contact Details\n
      Cell no: 065 090 0444`,
    email: "Email: rafiquemoosa7007@gmail.com ",
  },
  {
    title: "Contact Person: Avie Moosa",
    content: `Contact Details\n
      Cell no: 067 040 1792`,
    email: "Email: moosaavie@gmail.com",
  },
  {
    title: "Office Number",
    content: `Contact Details\n
      office no: 067 040 1792`,
    email: "Email: viralholdingswoodworks@gmail.com",
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
              {data.content.split("\n").map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p className="content">{data.email}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ContactUs;
