import React, { useEffect, useState } from "react";

const Readme = () => {
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    fetch("../README.md")
      .then((response) => response.text())
      .then((data) => setReadmeContent(data));
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
    </div>
  );
};

export default Readme;
