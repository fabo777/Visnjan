import React, { useEffect, useState } from "react";
import ShiftingText from "./ShiftingText";
import "./Homepage.css";

const Homepage = () => {
  const [count, setCount] = useState(0);
  const [coverFade, setCoverFade] = useState("fadeInCover");

  let arr = [
    {
      img: "fullmoon",
      id: 0,
      naslov: (
        <div>
          {" "}
          A stunning red
          <br />
          Moon on the palm <br />
          Of your hand!{" "}
        </div>
      ),
      date: "26. May",
      description: "Full Moon - Lunar eclipse ",
    },
    {
      img: "suzesvlovre",
      id: 1,
      naslov: (
        <div>
          Miraculous
          <br />
          Blinks
          <br />
          Make a wish!
        </div>
      ),
      date: "11. - 13. August",
      description: "Meteor Shower - Perseids",
    },
    {
      img: "nebula",
      id: 2,
      naslov: (
        <div>
          Astonishing peek
          <br /> Into the
          <br /> Mysterious nebula
        </div>
      ),
      date: "26. May",
      description: "Full Moon - Lunar eclipse ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCoverFade("fadeInCover");
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoverFade("fadeOutCover");
    }, 9500);
    return () => {
      clearTimeout(timer);
    };
  }, [coverFade]);

  return (
    <>
      <div
        className={`${coverFade} homepage`}
        style={{
          backgroundImage: ` url('images/${arr[count].img}.png')`,
        }}
      >
        <ShiftingText arr={arr[count]} />
      </div>
    </>
  );
};

export default Homepage;

/* setInterval(
  () => arr[0],
  2000
) */
