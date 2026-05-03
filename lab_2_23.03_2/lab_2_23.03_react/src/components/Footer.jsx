import { useEffect, useState } from "react";

function Footer() {
  const [info, setInfo] = useState("");

  useEffect(() => {
    const data = navigator.userAgent;
    localStorage.setItem("info", data);
    setInfo(localStorage.getItem("info"));
  }, []);

  return <footer>{info}</footer>;
}

export default Footer;