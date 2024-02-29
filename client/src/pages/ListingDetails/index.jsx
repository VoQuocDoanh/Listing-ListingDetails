import classNames from "classnames/bind";
import styles from "./ListingDetails.module.scss";
import React, { useState } from "react";
import Navigations from "~/components/Layouts/Navigations";
import Footer from "~/components/Layouts/Footer";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchPage from "~/components/SearchPage";
import Slider from "react-slick";
import Search from "~/components/Search";
import { Rating } from "@mui/material";
import { flushSync } from "react-dom";

const cx = classNames.bind(styles);

const FAVORITE_DESTINATIONS = [
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Nang City",
    description: "Club Wyndham Vino Bello Resort",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Ho Chi Minh city",
    description: "Marriot's Desert Springs Villa",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Lat city",
    description: "CarIsbad Seapointe by Hilton Grand Vacation",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Nang City",
    description: "Club Wyndham Vino Bello Resort",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Ho Chi Minh city",
    description: "Marriot's Desert Springs Villa",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Lat city",
    description: "CarIsbad Seapointe by Hilton Grand Vacation",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Lat city",
    description: "CarIsbad Seapointe by Hilton Grand Vacation",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Nang City",
    description: "Club Wyndham Vino Bello Resort",
    price: "from $2300 night",
  },
];
const FEATURED_RESORT = [
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "    $285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
];

const TOP_RESORT = [
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $125 night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $125 night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $125 night",
  },
];

const blog_link = {
  link: "/blog",
};

// const FEATURES_RENTALS = [
//   {
//     icon:
//   }
// ]

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={cx("slick-btn", "slick-next")} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
      >
        <path d="M1 1L7 7L1 13" stroke="currentColor" />
      </svg>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={cx("slick-btn", "slick-prev")} onClick={onClick}>
      <svg
        className={cx("icon")}
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
      >
        <path d="M7 1L1 7L7 13" stroke="currentColor" />
      </svg>
    </div>
  );
}

const settings = {
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

function ListingDetails() {
  // const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [topResort, setTopResort] = useState(TOP_RESORT);
  const [featuredResort, setFeaturedResort] = useState(FEATURED_RESORT);
  const [favList, setFavList] = useState(FAVORITE_DESTINATIONS);

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   // setList(data);
  // };

  const renderFavoriteDestination = () => {
    return favList.map((item, index) => {
      return (
        <div key={index} className={cx("d-box")}>
          <Link to={item.link} className={cx("link-content")}>
            <img src={item.image} alt={item.name} className={cx("img")} />
            <h3 className={cx("name")}>{item.name}</h3>
            <div className={cx("description")}> {item.description}</div>
            <div className={cx("row", "rating")}>
              <p className={cx("price")}>{item.price}</p>
              <div className={cx("rating-star")}>
                <Rating name="size-large" defaultValue={2} size="large" />
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };
  const featuredListing = () => {
    return featuredResort.map((item, index) => {
      return (
        <div>
          <div className={cx("featured-box")}>
            <Link to="#!">
              <img src={item.image} alt={item.name} className={cx("f-image")} />
              <div className={cx("f-heart-bandle")}>
                <div className={cx("exclusive")}>
                  <svg
                    className={cx("crown")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M4.58333 14.6666L2.75 4.58329L7.79167 9.16663L11 3.66663L14.2083 9.16663L19.25 4.58329L17.4167 14.6666H4.58333ZM17.4167 17.4166C17.4167 17.9666 17.05 18.3333 16.5 18.3333H5.5C4.95 18.3333 4.58333 17.9666 4.58333 17.4166V16.5H17.4167V17.4166Z"
                      fill="#FF0000"
                    />
                  </svg>
                  <text className={cx("f-bandle")}>Exclusive</text>
                </div>

                <svg
                  className={cx("f-heart-icon")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    fill="#FFD233"
                  />
                </svg>
              </div>

              <section className={cx("f-content")}>
                <h3 className={cx("f-name")}>{item.name}</h3>
                <div className={cx("f-row")}></div>
                <span className={cx("f-available")}></span>
                <span className={cx("date")}>{item.time}</span>
                <div className={cx("f-row", "f-price")}>
                  <p className={cx("f-text")}>{item.price}</p>
                  <div className={cx("f-sale")}>
                    <button className={cx("f-button")}>40% off</button>
                  </div>
                </div>
              </section>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={cx("destination-wrapper")}>
      {/* Header */}
      <header className={cx("header")}>
        <div className={cx("navigation")}>
          <Navigations />
        </div>
      </header>
      {/* Breadcrumbs */}
      <section className={cx("breadcrumbs")}>
        <div className={cx("list-nav")}>
          <Link to="/">
            <div className={cx("nav")}>
              {/* <img src={images.resort} alt="Home" /> */}
            </div>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className={cx("icon-arrow")} />
          <div className={cx("nav")}>
            <Link to="/destinations">
              <span className={cx("text-nav")}>Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Main */}
      <main className={cx("main")}>
        <div className={cx("top-content")}>
          {/* <h1 className={cx("heading")}>
            Rent Direct From Vacation Club Owners
          </h1> */}
          <div className={cx("heading")}>
            <label>Timeshares</label>
            <label style={{ color: "#1cb954" }}>Rentals</label>
            <label>From</label>
            <label>HCM</label>
            <label>City</label>
          </div>
          <h3 className={cx("heading-desc")}>
            Dynamic cities, dramatic coastline, and oh, those Pacific sunsets
          </h3>
          <img className={cx("header-img")} src={images.koala} alt="pic" />
          {/*Search*/}
          <section className={cx("search")}>{/* <SearchPage /> */}</section>
        </div>

        {/* Content */}
        <section className={cx("body")}>
          {/* Favorite destination */}
          <div className={cx("favorite-box")}>
            <h2 className={cx("title")}></h2>
            {/* List box */}
            {/* <div className={cx("list-box")}>{renderFavoriteDestination()}</div> */}
          </div>
          {/* Top 25 resort */}
          <div className={cx("top-resort")}>
            {/* List box */}
            <div style={{ marginTop: 60 }} className={cx("top-resort-header")}>
              <h2 className={cx("title")}>Deals you'll love in HCM City</h2>
            </div>
            {/*Featured Listing */}
            <div className={cx("featured-listing")}>
              <Slider {...settings}>{featuredListing()}</Slider>
            </div>
            {/*Feature Events */}
            <div style={{ marginTop: 60 }} className={cx("top-resort-header")}>
              <h2 className={cx("title")}>Top Resorts In HCM City</h2>
            </div>
            <div className={cx("destination-box")}>
              {renderFavoriteDestination()}
            </div>
            <label className={cx("crumb-destination")}>
              SEE ALL RESORT IN HCM CITY
            </label>
          </div>
          {/* FAQ's */}
          <section className={cx("faq-wrapper")}>
            <div className={cx("faq-content")}>
              <div className={cx("top-content")}>
                <h3 className={cx("text-header")}>
                  Get first dibs on the world’s hottest timeshare rentals
                </h3>
                <p className={cx("crumb-text")}>
                  Millions of timeshare owners worldwide own recurring vacation
                  time with popular brands like Marriott, Wyndham, Disney, and
                  more, but sometimes they’re unable to use it.
                </p>
                <p className={cx("crumb-text")}>
                  What does this mean? Timeshare owners still have to pay for
                  the time they don’t use. Renting to a vacationer helps them
                  cover their fees instead of throwing away thousands of dollars
                  per year.
                </p>
                <label className={cx("bottom-text")}>
                  KOALA helps these owners securely rent their unused timeshare
                  to anyone in the world.
                </label>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}> <button className={cx("faq-button")}>Find More</button></div>
            </div>
          </section>
          {/* I love deals */}
          <section className={cx("explore-wrapper")}>
            <div className={cx("explore-content")}>
              <div className={cx("right-content")}>
                <h3 className={cx("right-header")}>
                  Get first dibs on the world’s hottest timeshare rentals
                </h3>
                <div className={cx("input", "click")}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={cx("search-input")}
                    placeholder="Email Address"
                  />
                  {/* <a href="!#"> */}
                  <Link to={blog_link.link} className={cx("explore-link")}>
                    Yes, I love a deal!
                  </Link>
                </div>
                <div className={cx("checkbox")}>
                  <input className={cx("input-checkbox")} type="checkbox" />
                  <label>Yes, subscribe me for awesome deals</label>
                </div>
              </div>
            </div>
          </section>
          {/* Features Rentals */}
        </section>
      </main>

      <div>{/* <PaymentIntro /> */}</div>
      <Footer />
    </div>
  );
}

export default ListingDetails;
