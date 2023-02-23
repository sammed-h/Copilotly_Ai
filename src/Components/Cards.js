import { Button, Checkbox, Tooltip, Pagination } from "antd";
import React, { useState } from "react";
import "./Cards.css";
import { PUBLIC_ASSETS_PATH } from "./Constants";
const Cards = ({ data }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const tableData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="cardMain">
      {tableData?.map((item) => {
        return (
          <div
            bordered={false}
            style={{ borderRadius: "" }}
            key={item.id}
            className={`card ${
              item.id === id && show ? "cardWrapperActive" : "cardWrapper"
            }`}
          >
            <div className="cardContent">
              <div className="cardDesc">
                <div className="leftCard">
                  <Checkbox style={{ marginTop: "10px" }}> </Checkbox>
                  <div className="reportIcon">
                    <img
                      src={PUBLIC_ASSETS_PATH + "/not-allowed.png"}
                      className="notAllowIcon"
                    />
                  </div>
                  <div className="jobDesc">
                    <div className="jobTitle"> {item.jobRole} </div>
                    <div className="date">{item.date}</div>
                  </div>
                </div>
              </div>

              <div className="rightCard">
                <div
                  className="arrow"
                  onClick={() => {
                    setShow(!show);
                    setId(item.id);
                  }}
                >
                  <img
                    src={PUBLIC_ASSETS_PATH + "/arrow.png"}
                    alt=""
                    className={`${
                      item.id === id && show ? "arrowUp" : "arrowDown"
                    }`}
                  />
                </div>
                <Button type="primary" className="hireButton">
                  start hiring
                </Button>
              </div>
            </div>
            {item.id === id && show && (
              <div className="info">
                <div className="jobInfo">
                  <p>
                    <span> Location : {item.location} </span>
                  </p>
                  <p>
                    <span> Owner : {item.owner} </span>
                  </p>
                  <p>
                    <span> Hiring Manager : {item.hrManager}</span>
                  </p>
                  <p>
                    <img
                      src={PUBLIC_ASSETS_PATH + "/document.png"}
                      alt=""
                      className="editIcon"
                    />
                    {item.applicants[0].totalApplicants} Applicants
                  </p>
                  <p> Strong Fits : {item.applicants[0].strongFits} </p>
                  <p>Fits : {item.applicants[0].fits}</p>
                  <p> Weak Fits : {item.applicants[0].weakFits}</p>
                  <p>Distortions :{item.applicants[0].distortions} </p>
                  <p>
                    5 Incomplete Applicants
                    {item.applicants[0].incompleteApplicants}
                  </p>
                </div>

                <div className="jobActions">
                  <button className="viewAppBtn">View Applicants</button>
                  <div className="jobRight">
                    <img
                      src={PUBLIC_ASSETS_PATH + "/pencil.png"}
                      alt=""
                      className="editIcon"
                    />
                    <Tooltip
                      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet, quam sit amet iaculis ultrices, risus ex aliquam sapien"
                      placement="right"
                    >
                      <span>
                        Edit Job
                        <img
                          src={PUBLIC_ASSETS_PATH + "/info.png"}
                          className="infoIcon"
                        />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="jobRight">
                    <img
                      src={PUBLIC_ASSETS_PATH + "/document.png"}
                      alt=""
                      className="editIcon"
                    />
                    <Tooltip
                      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet, quam sit amet iaculis ultrices, risus ex aliquam sapien"
                      placement="right"
                    >
                      <span>
                        Re-post this job
                        <img
                          src={PUBLIC_ASSETS_PATH + "/info.png"}
                          className="infoIcon"
                        />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="jobRight">
                    <img
                      src={PUBLIC_ASSETS_PATH + "/preview.png"}
                      alt=""
                      className="editIcon"
                    />
                    <Tooltip
                      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet, quam sit amet iaculis ultrices, risus ex aliquam sapien"
                      placement="right"
                    >
                      <span>
                        Job Description
                        <img
                          src={PUBLIC_ASSETS_PATH + "/info.png"}
                          className="infoIcon"
                        />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="pagination">
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Cards;
