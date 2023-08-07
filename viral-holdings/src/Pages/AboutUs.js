const aboutUsData = [
  {
    title: "Our Vision",
    content: `Through innovation and service excellence, Viral Holdings (PTY) LTD will set the benchmark for the Wood works Industry.`,
  },
  {
    title: "Our Mission",
    content: `
    Through our Quality services performed by well trained staff, and led by dedicated management, we will always go the extra mile and always exceed our client’s expectations.
    `,
  },
  {
    title: "Corporate Profile",
    content: `
    The combined experience, reputation, proven systems and international exposure of the management team coupled with a personal service and dedication of the staff is a powerful combination in the Wood works industry and has been a pointing factor in the success of organization.
    `,
  },
  {
    title: "Management",
    content: `
    Our management team is all highly skilled personnel in the industry and has the experience, enthusiasm and diversification of expertise to ensure that we not only meet, but in fact always exceed our client’s expectations. This augments our reputation as reliable, trustworthy and professional experts in contractual and non-contractual including specialized and adhoc requirements. We believe in the participative management and each member of the company is responsible for the sector of the company, which is managed as his/ her own business units on which they report back on a weekly management review meeting.
    Viral Holdings is committed to providing and maintaining a consistently high standard of Wood Works services to our customers in the Commercial and Industrial Industry. By optimizing our staff performance, we ensure quality service levels at all times.
    Through commitment and loyalty to both internal and external customers, with compliance to all relevant standards and with involvement of every individual within the organization, we will adopt a total quality management approach, engaging the principles of continuous improvement of our systems and processes.
    Viral Holdings Services through quality management will foster an environment and culture which encourages teamwork and participation in meeting our quality objectives, assigning the responsibility of quality to all key personnel within the organization.
          `,
  },
  {
    title: "Quality Assurance",
    content: `
    It is Viral Holdings (PTY) LTD policy to actively embrace the concept of quality, Assurance and continuous improvement. We are committed to providing a quality service, aimed at meeting and exceeding our clients daily fundamental requirements.
    In a continual search for quality improvement by innovation, member involvement and optimum utilization of our physical assets and human resources combined with the latest technology available, we embrace the disciplines of quality assurance.
          `,
  },
];
const AboutUs = () => {
  return (
    <section
      style={{ overflowX: "hidden", overflowY: "scroll" }}
      className="section"
      id="vision"
    >
      {aboutUsData.map((data) => {
        return (
          <div className="aboutUsDiv">
            <h3 className="title">{data.title}</h3>
            <p className="content">{data.content}</p>
          </div>
        );
      })}
    </section>
  );
};

export default AboutUs;
