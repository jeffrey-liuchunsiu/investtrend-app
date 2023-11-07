/// Menu
//import MetisMenu from "metismenujs";
import React, {
  Component,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import Collapse from "react-bootstrap/Collapse";

/// Link
import { Link } from "react-router-dom";
import profile from "../../../images/Untitled-1.jpg";
import { ThemeContext } from "../../../context/ThemeContext";

import { MenuList } from "./Menu";

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
  activeSubmenu: "",
};

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);

  const [state, setState] = useReducer(reducer, initialState);

  let handleheartBlast = document.querySelector(".heart");
  function heartBlast() {
    return handleheartBlast.classList.toggle("heart-blast");
  }

  const handleMenuActive = (status) => {
    setState({ active: status });

    if (state.active === status) {
      setState({ active: "" });
    }
  };
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  /// Open menu
  // componentDidMount() {
  //   // sidebar open/close
  //   var btn = document.querySelector(".nav-control");
  //   var aaa = document.querySelector("#main-wrapper");
  //   function toggleFunc() {
  //     return aaa.classList.toggle("menu-toggle");
  //   }
  //   btn.addEventListener("click", toggleFunc);

  // 	//sidebar icon Heart blast
  // 	var handleheartBlast = document.querySelector('.heart');
  // 	function heartBlast() {
  // 		return handleheartBlast.classList.toggle("heart-blast");
  // 	}
  // 	handleheartBlast.addEventListener('click', heartBlast);

  // }
  // state = {
  //   loveEmoji: false,
  // };

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  /// Active menu
  // let dashBoard = [
  //     "",
  //     "dashboard-light",
  //   "my-wallets",
  //   "transactions",
  //   "coin-details",
  //   "portofolio",
  //   "market-capital",
  //   ],
  //   app = [
  //     "app-profile",
  //     "app-calender",
  //     "email-compose",
  //     "email-inbox",
  //     "email-read",
  //     "ecom-product-grid",
  //     "ecom-product-list",
  //     "ecom-product-list",
  //     "ecom-product-order",
  //     "ecom-checkout",
  //     "ecom-invoice",
  //     "ecom-customers",
  //     "post-details",
  //     "ecom-product-detail",
  //   ],
  //   email = ["email-compose", "email-inbox", "email-read"],
  //   shop = [
  //     "ecom-product-grid",
  //     "ecom-product-list",
  //     "ecom-product-list",
  //     "ecom-product-order",
  //     "ecom-checkout",
  //     "ecom-invoice",
  //     "ecom-customers",
  //     "ecom-product-detail",
  //   ],
  //   charts = [
  //     "chart-rechart",
  //     "chart-flot",
  //     "chart-chartjs",
  //     "chart-chartist",
  //     "chart-sparkline",
  //     "chart-apexchart",
  //   ],
  //   bootstrap = [
  //     "ui-accordion",
  //     "ui-badge",
  //     "ui-alert",
  //     "ui-button",
  //     "ui-modal",
  //     "ui-button-group",
  //     "ui-list-group",

  //     "ui-card",
  //     "ui-carousel",
  //     "ui-dropdown",
  //     "ui-popover",
  //     "ui-progressbar",
  //     "ui-tab",
  //     "ui-typography",
  //     "ui-pagination",
  //     "ui-grid",
  //   ],
  //   plugins = [
  //     "uc-select2",
  //     "uc-nestable",
  //     "uc-sweetalert",
  //     "uc-toastr",
  //     "uc-noui-slider",
  //     "map-jqvmap",
  //     //"post",

  //   ],
  //   redux = [
  //       "todo",
  //       "form-redux",
  //       "form-redux-wizard",
  //   ],
  //   widget = ["widget-basic"],
  //   forms = [
  //     "form-element",
  //     "form-wizard",
  //     "form-editor-summernote",
  //     "form-pickers",
  //     "form-validation-jquery",
  //   ],
  //   table = [
  //     "table-bootstrap-basic",
  //     "table-datatable-basic",
  //     "table-sorting",
  //     "table-filtering",
  //   ],
  //   pages = [
  //     "page-register",
  //     "page-login",
  //     "page-lock-screen",
  //     "page-error-400",
  //     "page-error-403",
  //     "page-error-404",
  //     "page-error-500",
  //     "page-error-503",
  //   ],
  //   error = [
  //     "page-error-400",
  //     "page-error-403",
  //     "page-error-404",
  //     "page-error-500",
  //     "page-error-503",
  //   ];

  return (
    <div className="deznav">
      <PerfectScrollbar className="deznav-scroll">
        <div className="main-profile">
          <div className="image-bx">
            <img src={profile} alt="" />
            <Link to={"#"}>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </Link>
          </div>
          <h5 className="mb-0 fs-16 text-black">
            <span className="font-w400">Hello,</span> Marquez
          </h5>
          <p className="mb-0 fs-12 font-w400">marquezzzz@mail.com</p>
        </div>
        <ul className="metismenu" id="menu">
          <li className="nav-label first">Main Menu</li>
          {MenuList.map((data, index) => {
            let menuClass = data.classsChange;
            if (menuClass === "nav-label") {
              return (
                <li className={menuClass} key={index}>
                  {data.title}
                </li>
              );
            } else {
              return (
                <li
                  className={` ${
                    state.active === data.title ? "mm-active" : ""
                  }`}
                  key={index}
                >
                  {data.content && data.content.length > 0 ? (
                    <Link
                      to={"#"}
                      className="has-arrow"
                      onClick={() => {
                        handleMenuActive(data.title);
                      }}
                    >
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </Link>
                  ) : (
                    <Link to={data.to}>
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </Link>
                  )}
                  <Collapse in={state.active === data.title ? true : false}>
                    <ul
                      className={`${
                        menuClass === "mm-collapse" ? "mm-show" : ""
                      }`}
                    >
                      {data.content &&
                        data.content.map((data, index) => {
                          return (
                            <li
                              key={index}
                              className={`${
                                state.activeSubmenu === data.title
                                  ? "mm-active"
                                  : ""
                              }`}
                            >
                              {data.content && data.content.length > 0 ? (
                                <>
                                  <Link
                                    to={data.to}
                                    className={data.hasMenu ? "has-arrow" : ""}
                                    onClick={() => {
                                      handleSubmenuActive(data.title);
                                    }}
                                  >
                                    {data.title}
                                  </Link>
                                  <Collapse
                                    in={
                                      state.activeSubmenu === data.title
                                        ? true
                                        : false
                                    }
                                  >
                                    <ul
                                      className={`${
                                        menuClass === "mm-collapse"
                                          ? "mm-show"
                                          : ""
                                      }`}
                                    >
                                      {data.content &&
                                        data.content.map((data, index) => {
                                          return (
                                            <>
                                              <li key={index}>
                                                <Link
                                                  className={`${
                                                    path === data.to
                                                      ? "mm-active"
                                                      : ""
                                                  }`}
                                                  to={data.to}
                                                >
                                                  {data.title}
                                                </Link>
                                              </li>
                                            </>
                                          );
                                        })}
                                    </ul>
                                  </Collapse>
                                </>
                              ) : (
                                <Link to={data.to}>{data.title}</Link>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  </Collapse>
                </li>
              );
            }
          })}
        </ul>

        <div className="copyright">
          <p>
            <strong>Zenix Crypto React Admin Dashboard</strong> © 2023 All
            Rights Reserved
          </p>
          <p className="fs-12">
            Made with{" "}
            <span className="heart" onClick={() => heartBlast()}></span> by
            DexignZone
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
