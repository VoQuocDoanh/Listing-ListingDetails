import classNames from "classnames/bind";
import styles from "./Navigations.module.scss";
import { Link } from "react-router-dom";
import Search from "~/components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";
import { logout } from "~/controllers/auth";
import Popup from "~/components/AuthPopup";
import Login from "~/components/Layouts/Login";
import Register from "~/components/Layouts/Register";
import { Toaster, toast } from "sonner";
import ToastNotify from "~/components/ToastNotify";
import { useCallback, useEffect, useState } from "react";
import { resetLogin, resetRegister, resetSendMail } from "~/redux/authSlice";
import { resetForm } from "~/redux/formRegisterSlice";

const cx = classNames.bind(styles);

const LIST_NAV = [
  {
    value: "Home",
    link: "/home",
  },
  {
    value: "Destinations",
    link: "/destinations",
  },

  {
    value: "Listing",
    link: "/listingdetails",
  },
  {
    value: "About",
    link: "/Policy",
  },
];

function Navigations() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login.user);

  const statusRegister = useSelector((state) => state.auth.register);

  const handleCloseLogin = () => {
    setLogin(false);
    dispatch(resetSendMail());
    dispatch(resetLogin());
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCloseRegister = useCallback(() => {
    setRegister(false);
    dispatch(resetSendMail());
    dispatch(resetForm());
    dispatch(resetRegister());
    sessionStorage.removeItem("emailRegister");
  });

  const handleAccessRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  const handleAccessLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  useEffect(() => {
    if (statusRegister.success) {
      handleCloseRegister();
      toast.custom(
        () => (
          <ToastNotify
            type="success"
            title="Success"
            desc={"Your account registered successfully"}
          />
        ),
        { duration: 2000 }
      );
    }
  }, [dispatch, handleCloseRegister, statusRegister.success]);

  const axiosInstance = createAxios(dispatch, currentUser);

  const renderNavbar = () => {
    return LIST_NAV.map((item, index) => {
      return (
        <Link to={item.link} key={index} className={cx("nav-item")}>
          {item.value}
        </Link>
      );
    });
  };

  const handleLogout = () => {
    logout(dispatch, axiosInstance);
  };

  return (
    <div>
      <Toaster position="top-right" richColors expand={true} />
      <div className={cx("nav-wrapper")}>
        <div className={cx("container")}>
          {/* Logo */}
          <Link to="/">
            <h1 className={cx("logo")}>TIVAS</h1>
          </Link>
          {/* Navbar */}
          <section className={cx("list-nav")}>{renderNavbar()}</section>
          {/* Search */}
          <section className={cx("search")}>
            <Search />
          </section>
          {/* Actions */}
          <section className={cx("actions")}>
            {currentUser ? (
              <>
                {/* Notification */}
                <div className={cx("action", "notification")}>
                  <FontAwesomeIcon icon={faBell} className={cx("icon")} />
                </div>
                {/* Avatar */}
                <div className={cx("action", "avatar")}>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Avatar"
                    className={cx("img")}
                  />
                  <h4 className={cx("show-name")}>
                    {currentUser?.data.username}
                  </h4>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={cx("icon")}
                  />
                </div>
                <div className={cx("action")} onClick={handleLogout}>
                  <h4 className={cx("register")}>Logout</h4>
                </div>
              </>
            ) : (
              <>
                <div className={cx("action")} onClick={() => setLogin(true)}>
                  <h4 className={cx("login")}>Sign in</h4>
                </div>
                <div className={cx("action")} onClick={() => setRegister(true)}>
                  <h4 className={cx("register")}>Sign up</h4>
                </div>
              </>
            )}
          </section>
        </div>
        {!currentUser && (
          <>
            {login === true && (
              <Popup trigger={login} onClose={handleCloseLogin}>
                <Login handleAccessRegister={handleAccessRegister} />
              </Popup>
            )}
            {register === true && (
              <Register
                handleAccessLogin={handleAccessLogin}
                trigger={register}
                handleCloseRegister={handleCloseRegister}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Navigations;
