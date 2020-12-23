/**
 * The title of our about section.
 *
 * @type {string} title
 */
export const title = "What is HackRice?";

/**
 * An array of lines, to be placed in separate <p> blocks. Represents the main
 * content of our about section.
 *
 * @type {React.Fragment[]} lines
 */
export const lines = ([
  <>
    HackRice is Rice University's annual hackathon. It brings
    together over{" "}
    <span style={{ fontWeight: "600" }}>
      four hundred of the brightest minds in the country
    </span>{" "}
    to develop & showcase their{" "}
    <span style={{ fontWeight: "600" }}>
      creative and entrepreneurial talents.
    </span>
  </>,

  <>
    Participants form {" "}
    <span style={{ fontWeight: "600" }}>teams of up to 4</span> to work on a
    project — typically software, and sometimes hardware — in an environment{" "}
    <span style={{ fontWeight: "600" }}>designed for collaboration.</span>
  </>,

  <>
    Teams showcase projects after{" "}
    <span style={{ fontWeight: "600" }}>36 hours</span> of hacking. This is an
    excellent opportunity for students to{" "}
    <span style={{ fontWeight: "600" }}>build a network</span> of creators,
    receive <span style={{ fontWeight: "600" }}>internship & job offers</span>{" "}
    from world-class sponsors, and{" "}
    <span style={{ fontWeight: "600" }}>learn modern tools & systems.</span>
  </>]
);