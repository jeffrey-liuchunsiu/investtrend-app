import React, { useMemo, useReducer } from "react";
import { useTable, useSortBy } from "react-table";
// import PageTitle from "../../../layouts/PageTitle";
import MOCK_DATA from "./MOCK_DATA_3.json";
import { COLUMNS } from "./Columns";
import { MenuList } from "./Menu";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
// import { TransactionFilteringTable } from "../FilteringTable/TransactionFilteringTable";
//import './table.css';

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
  activeSubmenu: "",
};

const CryptoStatistics = loadable(() =>
  pMinDelay(import("./CryptoStatistics"), 1000)
);
const CryptoStatisticsDark = loadable(() =>
  pMinDelay(import("./CryptoStatisticsDark"), 1000)
);

const TransactionFilteringTable = loadable(() =>
  pMinDelay(import("../FilteringTable/TransactionFilteringTable"), 1000)
);

export const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({ columns, data }, useSortBy);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  const [state, setState] = useReducer(reducer, initialState);
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
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  return (
    <>
      {/* <PageTitle activeMenu="Sorting" motherMenu="Table" /> */}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Back & Forward Tests</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div className="outer-table-container">
              <table
                {...getTableProps()}
                className="table table-striped outer-table"
              >
                {/* {console.log(getTableProps())} */}
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      // className="responsive-row"
                      className=""
                    >
                      {/* {console.log(headerGroup.getHeaderGroupProps())} */}
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          // className="table-col-12"
                        >
                          {column.render("Header")}
                          <span className="ms-1">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <i className="fa fa-arrow-down" />
                              ) : (
                                <i className="fa fa-arrow-up" />
                              )
                            ) : (
                              ""
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <>
                        <tr {...row.getRowProps()} className="">
                          {row.cells.map((cell) => {
                            return (
                              <td {...cell.getCellProps()} className="">
                                {" "}
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                        <div className="metismenu" id="menu">
                          <div className="full-height">
                            <li
                              className={` ${
                                state.active === row.id ? "mm-active" : ""
                              }`}
                              key={row.id}
                            >
                              <Link
                                to={"#"}
                                className="has-arrow"
                                onClick={() => {
                                  handleMenuActive(row.id);
                                }}
                              ></Link>
                            </li>
                          </div>
                        </div>
                        <Collapse>
                          <tr></tr>
                        </Collapse>
                        <Collapse in={state.active === row.id ? true : false}>
                          <tr>
                            <td colspan="7">
                              <div className="mm-show">
                                <div>
                                  <div className="card">
                                    <div className="card-header d-sm-flex d-block pb-0 border-0">
                                      <div>
                                        <h4 className="fs-20 text-black">
                                          Crypto Statistics
                                        </h4>
                                        <p className="mb-0 fs-12">
                                          Lorem ipsum dolor sit amet,
                                          consectetur
                                        </p>
                                      </div>
                                      <div className="d-flex mt-sm-0 mt-3">
                                        <div className="custom-control custom-switch toggle-switch text-right mr-4 mb-2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customSwitch11"
                                          />
                                          <label
                                            className="custom-control-label fs-14 text-black pr-2"
                                            htmlFor="customSwitch11"
                                          >
                                            Date
                                          </label>
                                        </div>
                                        <div className="custom-control custom-switch toggle-switch text-right mr-4 mb-2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customSwitch12"
                                          />
                                          <label
                                            className="custom-control-label fs-14 text-black pr-2"
                                            htmlFor="customSwitch12"
                                          >
                                            Value
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card-body pb-0">
                                      <div className="d-flex flex-wrap">
                                        <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck9"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck9"
                                          >
                                            <span className="d-block text-black font-w500">
                                              Bitcoin
                                            </span>
                                            <span className="fs-12">BTC</span>
                                          </label>
                                        </div>
                                        <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck91"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck91"
                                          >
                                            <span className="d-block text-black font-w500">
                                              Ripple
                                            </span>
                                            <span className="fs-12">XRP</span>
                                          </label>
                                        </div>
                                        <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck92"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck92"
                                          >
                                            <span className="d-block text-black font-w500">
                                              Ethereum
                                            </span>
                                            <span className="fs-12">ETH</span>
                                          </label>
                                        </div>
                                        <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck93"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck93"
                                          >
                                            <span className="d-block text-black font-w500">
                                              Zcash
                                            </span>
                                            <span className="fs-12">ZEC</span>
                                          </label>
                                        </div>
                                        <div className="custom-control check-switch custom-checkbox mr-4 mb-2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck94"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck94"
                                          >
                                            <span className="d-block text-black font-w500">
                                              LiteCoin
                                            </span>
                                            <span className="fs-12">LTC</span>
                                          </label>
                                        </div>
                                      </div>
                                      <div id="lineChart" />
                                      <CryptoStatistics />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="card">
                                    {/* <div className="card-body pb-0"> */}
                                    <TransactionFilteringTable />
                                    {/* </div> */}
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </Collapse>
                      </>
                    );
                  })}
                </tbody>
                <tfoot>
                  {footerGroups.map((footerGroup) => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                      {footerGroup.headers.map((column) => (
                        <td {...column.getFooterProps()}>
                          {column.render("Footer")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SortingTable;
