import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Tabs from "../components/Tabs";
import Input from "../components/Input";
import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";

const Converstaions = () => {
  const [searchState, setSearchState] = useState("");
  const [tabState, setTabState] = useState("feed");

  const searchChangeHandler = (e) => {
    setSearchState(e.target.value);
  };

  const changeTab = (text) => {
    setTabState(text);
  };

  return (
    <MainLayout
      headVector="./assets/vectors/desk.svg"
      sideNavVector="./assets/vectors/sidenav-right-6.svg"
      title="desk"
      exploreTitle="Let's go to"
      exploreComponent={[
        {
          title: "Conversations",
          tabName: "conversations",
          sub: "Chats & Text",
          vector: "./assets/vectors/conversations.svg",
        },
        {
          title: "Live Feed",
          tabName: "feed",
          sub: "General & Noded",
          vector: "./assets/vectors/feed.svg",
        },
      ].map((el, idx) => {
        const { vector, title, sub, small, tabName } = el;

        return (
          <Link
            to="/conversations"
            className={`item light-border d-flex${
              tabName === tabState ? " active" : ""
            }`}
            key={"explore" + idx}
            onClick={() => changeTab(tabName)}
          >
            <div className="img">
              <img src={vector} className="me-4" alt="" />
            </div>
            <div className="title">
              <div className="fs-14 fw-600">{title}</div>
              <div className="fs-12 fw-400 sub-title-text text-light-5">
                {sub}
              </div>
              {small && <div className="mt-1 title-label">{small}</div>}
            </div>
          </Link>
        );
      })}
    >
      <div id="conversations-main-content">
        <div className="container-fluid px-0">
          {tabState === "conversations" && (
            <div className="row mt-4">
              <div className="col-lg-4 short-scrollbar">
                <Tabs
                  className="mt-4 "
                  tabGroupName="conversatoins-tabs"
                  data={[
                    {
                      icon: "./assets/vectors/chats.svg",
                      iconActive: "./assets/vectors/chats.svg",
                      label: "Chats",
                      target: "chats",
                      active: true,
                    },
                    {
                      icon: "./assets/vectors/emails.svg",
                      iconActive: "./assets/vectors/emails.svg",
                      label: "Emails",
                      target: "sms",
                    },
                  ]}
                />

                <div className="left-content">
                  <div className="funcs px-2 d-flex justify-content-between">
                    <Input
                      className="chat-search"
                      value={searchState}
                      onChange={searchChangeHandler}
                      id="search"
                      name="search"
                      placeholder="Search"
                      icon="vectors/search-sm.svg"
                      alt="search"
                    />
                    <AddBtn title="NEW" />
                  </div>

                  <div className="chat-list">
                    {[
                      {
                        img: "./assets/vectors/chat-user-1.svg",
                        name: "John Smith",
                        lastMsg: "Product",
                        time: "Just Now",
                        badgeText: 2,
                        active: true,
                      },
                      {
                        img: "./assets/vectors/chat-user-1.svg",
                        name: "Geogre Michal",
                        lastMsg: "New Project for you",
                        time: "5min ago",
                        badgeText: 1,
                      },
                      {
                        img: "./assets/vectors/chat-user-2.svg",
                        name: "Dr. Jubed",
                        lastMsg: "Product",
                        time: "Just Now",
                      },
                      {
                        img: "./assets/vectors/chat-user-3.svg",
                        name: "Vector Smith",
                        lastMsg: "Hi there, how we can help you?",
                        time: "09:20PM",
                      },
                      {
                        img: "./assets/vectors/chat-user-4.svg",
                        name: "Mitchal Clark",
                        lastMsg: "Perfect, Thanks",
                        time: "08:42PM",
                      },
                      {
                        img: "./assets/vectors/chat-user-1.svg",
                        name: "Steve Smith",
                        lastMsg: "Thanks for reciving my applic.....",
                        time: "Yesterday",
                        badgeText: 4,
                      },
                      {
                        img: "./assets/vectors/chat-user-2.svg",
                        name: "Ricky Ponting",
                        lastMsg: "Did i understood Correctly?",
                        time: "Yestarday",
                      },
                      {
                        img: "./assets/vectors/chat-user-3.svg",
                        name: "Tylor Santos",
                        lastMsg: "Anytime",
                        time: "July 22",
                      },
                      {
                        img: "./assets/vectors/chat-user-2.svg",
                        name: "Courtney Steward",
                        lastMsg: "Thanks for your help.",
                        time: "July 21",
                      },
                    ].map((el, idx) => {
                      const { active, img, name, lastMsg, time, badgeText } =
                        el;
                      return (
                        <div
                          key={"chat-list-item" + idx}
                          className={`chat${active ? " active" : ""}`}
                        >
                          <div className="img">
                            <img src={img} alt="" />
                          </div>

                          <div className="text">
                            <div className="left">
                              <div className="name fw-600">{name}</div>
                              <div className="lastMsg text-small">
                                {lastMsg}
                              </div>
                            </div>
                            <div className="right">
                              <div className="timeAgo text-small">{time}</div>
                              {badgeText && (
                                <div className="badge">{badgeText}</div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 short-scrollbar">
                <div className="right-content">
                  <div className="main-chat">
                    <div className="chat-header d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="img">
                          <img
                            src="./assets/vectors/chat-user-1.svg"
                            alt="chat-user"
                          />
                        </div>
                        <div className="text ms-3">
                          <div className="fw-600 text-blue fs-22">
                            Jhon Smith
                          </div>
                          <div className="fw-600">(450) 938-3333</div>
                        </div>
                      </div>
                      <div>
                        <div className="menu">
                          <img
                            className="me-3"
                            src="./assets/vectors/call-voice.svg"
                            alt="call-voice"
                          />
                          <img
                            src="./assets/vectors/call-video.svg"
                            alt="call-video"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="chat-main-body">
                      {[
                        {
                          type: "msg",
                          userImg: "./assets/vectors/chat-user-1.svg",
                          msgContents: [
                            {
                              type: "text",
                              text: "Recently I saw properties in a great location that I did not pay attention to before😄",
                            },
                          ],
                          msgTime: "1 day ago",
                        },
                        {
                          me: true,
                          type: "msg",
                          userImg: "./assets/img/chat-me.png",
                          msgContents: [
                            {
                              type: "text",
                              text: "I am interested to know more about your prices and services you offer",
                            },
                          ],
                          msgTime: "1 day ago",
                        },
                        {
                          type: "timetag",
                          date: "Today",
                        },
                        {
                          type: "msg",
                          userImg: "./assets/vectors/chat-user-1.svg",
                          msgContents: [
                            {
                              type: "text",
                              text: "I’ll raise a retun request for you. Here are the instructions to get the package ready for return. The return process will take max 2 days depends on the traffic return exclude the shipping",
                            },
                            {
                              type: "file",
                              icon: "",
                              text: "Return Product",
                              info: "pdf - 2.9MB",
                            },
                          ],
                          msgTime: "2 min ago",
                        },
                        {
                          me: true,
                          type: "msg",
                          userImg: "./assets/img/chat-me.png",
                          msgContents: [
                            {
                              type: "text",
                              text: "I am interested to know more about your prices and services you offer",
                            },
                          ],
                          msgTime: "just now",
                        },
                      ].map((el, idx) => {
                        const {
                          type,
                          userImg,
                          msgContents,
                          msgTime,
                          me,
                          date,
                        } = el;

                        if (type === "msg") {
                          return (
                            <div
                              key={"msgs" + idx}
                              className={`chat-msg${me ? " me" : ""}`}
                            >
                              {msgContents.map((item, idx2) => {
                                const { type, text, info } = item;
                                return (
                                  <div
                                    className="msg-body"
                                    key={"msg" + idx + idx2}
                                  >
                                    <div className="img">
                                      <img src={userImg} alt="user-img" />
                                    </div>
                                    <div className="text">
                                      {type === "text" ? (
                                        <div className="chat-text">{text}</div>
                                      ) : (
                                        <div className="file-container">
                                          <div className="file-desc">
                                            <img
                                              src="./assets/vectors/file-icon.svg"
                                              alt="file"
                                            />
                                            <div className="file-text">
                                              <div className="chat-text">
                                                {text}
                                              </div>
                                              <div className="chat-text">
                                                {info}
                                              </div>
                                            </div>
                                          </div>
                                          <img
                                            className="download"
                                            src="./assets/vectors/file-download.svg"
                                            alt="download"
                                          />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                              <div className="msg-foot">
                                <div className="time">{msgTime}</div>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              className="timetag-container"
                              key={"foot" + idx}
                            >
                              <div className="time-tag">
                                <div className="tag">{date}</div>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                  <div className="new-msg">
                    <Input
                      value={searchState}
                      onChange={searchChangeHandler}
                      id="msg"
                      name="msg"
                      placeholder="Write a message"
                    />
                    <div className="btn btn-send blue">Send</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tabState === "feed" && (
            <div className="feed-container mt-4">
              <Tabs
                className="mt-4 "
                tabGroupName="feed-tabs"
                tabClassName="me-4"
                data={[
                  {
                    label: "Noded",
                    target: "noded",
                    active: true,
                  },
                  {
                    label: "General",
                    target: "general",
                  },
                ]}
              />

              <div className="mt-4 px-3">
                <SearchInput placeholder="Search Users by Name" withFilter />
              </div>

              <div className="feed-main mt-5">
                <div className="row gy-5 justify-content-center justify-content-md-start">
                  {[
                    {
                      img: "./assets/vectors/feed-1.svg",
                      title: "Car Color",
                      time: "5 min ago",
                      sub: "WO #9386a47324",
                    },
                    {
                      img: "./assets/vectors/feed-2.svg",
                      title: "Repair Scratch",
                      time: "7 min",
                      sub: "WO #9386a47324",
                    },
                    {
                      img: "./assets/vectors/feed-3.svg",
                      title: "VIN location",
                      time: "24 min",
                      sub: "WO #9386a47324",
                    },
                    {
                      img: "./assets/vectors/feed-4.svg",
                      title: "Battery check",
                      time: "1 hour",
                      sub: "WO #9386a47324",
                    },
                    {
                      img: "./assets/vectors/feed-5.svg",
                      title: "Tires use",
                      time: "1 hour",
                      sub: "WO #9386a47324",
                    },
                    {
                      img: "./assets/vectors/feed-6.svg",
                      title: "Car Repair",
                      time: "2 hour",
                      sub: "WO #9386a47324",
                    },
                    {
                      img: "./assets/vectors/feed-7.svg",
                      title: "Tires use",
                      time: "8 hour",
                      sub: "WO #9386a47324",
                    },
                    {
                      img: "./assets/vectors/feed-8.svg",
                      title: "Corrosion",
                      time: "23 hours",
                      sub: "WO #9386a47324",
                    },
                  ].map((el, idx) => {
                    const { img, title, time, sub } = el;

                    return (
                      // <div key={"feed-item" + idx} className="">
                      <div
                        key={"feed-item" + idx}
                        className="feed-item text-center"
                      >
                        <img src={img} alt="" />

                        <div className="text mt-3">
                          <div className="fw-600">{title}</div>
                          <div className="text-inter fw-400 fs-11">
                            {time} min ago
                          </div>
                          <div className="mt-3 text-light-5 fw-700 fs-12">
                            {sub}
                          </div>
                        </div>
                      </div>
                      // </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Converstaions;
