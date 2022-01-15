import React, { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import Tabs from "../components/Tabs";
import Input from "../components/Input";
import AddBtn from "../components/AddBtn";

const Converstaions = () => {
  const [searchState, setSearchState] = useState("");

  const searchChangeHandler = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <MainLayout
      headVector="./assets/vectors/nav-6__active.svg"
      sideNavVector="./assets/vectors/sidenav-right-6.svg"
      title="Conversations"
      exploreSub="Services Assign to you"
      exploreContent={[
        {
          time: "11:30",
          title: "Oil Change",
          sub: "Ford Focus 2021",
        },
        {
          time: "11:45",
          title: "Engine + AC Check up",
          sub: "Chevroley Cruze 2020",
        },
        {
          time: "13:00",
          title: "Broken Light",
          sub: "Honda Civic 2021",
        },
      ]}
    >
      <div id="conversations-main-content">
        <div className="container-fluid px-0">
          <div className="row mt-4">
            <div className="col-md-4">
              <Tabs
                className="mt-4 d-lg-flex d-none"
                tabGroupName="conversatoins-tabs"
                data={[
                  {
                    icon: "./assets/vectors/messaging.svg",
                    label: "Messaging",
                    target: "messaging",
                    active: true,
                  },
                  {
                    icon: "./assets/vectors/sms.svg",
                    label: "Text (SMS)",
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
                    icon="vectors/search.svg"
                    alt="search"
                  />
                  <AddBtn />
                </div>

                <div className="chat-list">
                  {[
                    {
                      img: "./assets/img/chat-user-1.png",
                      name: "John Smith",
                      lastMsg: "Product",
                      time: "Just Now",
                      badgeText: 2,
                      active: true,
                    },
                    {
                      img: "./assets/img/chat-user-2.png",
                      name: "Geogre Michal",
                      lastMsg: "New Project for you",
                      time: "5min ago",
                      badgeText: 1,
                    },
                    {
                      img: "./assets/img/chat-user-3.png",
                      name: "Dr. Jubed",
                      lastMsg: "Product",
                      time: "Just Now",
                    },
                    {
                      img: "./assets/img/chat-user-4.png",
                      name: "Vector Smith",
                      lastMsg: "Hi there, how we can help you?",
                      time: "09:20PM",
                    },
                    {
                      img: "./assets/img/chat-user-5.png",
                      name: "Mitchal Clark",
                      lastMsg: "Perfect, Thanks",
                      time: "08:42PM",
                    },
                    {
                      img: "./assets/img/chat-user-6.png",
                      name: "Steve Smith",
                      lastMsg: "Thanks for reciving my applic.....",
                      time: "Yesterday",
                      badgeText: 4,
                    },
                    {
                      img: "./assets/img/chat-user-7.png",
                      name: "Ricky Ponting",
                      lastMsg: "Did i understood Correctly?",
                      time: "Yestarday",
                    },
                    {
                      img: "./assets/img/chat-user-8.png",
                      name: "Tylor Santos",
                      lastMsg: "Anytime",
                      time: "July 22",
                    },
                    {
                      img: "./assets/img/chat-user-9.png",
                      name: "Courtney Steward",
                      lastMsg: "Thanks for your help.",
                      time: "July 21",
                    },
                  ].map((el, idx) => {
                    const { active, img, name, lastMsg, time, badgeText } = el;
                    return (
                      <div
                        key={"chat-list-item" + idx}
                        className={`chat ${active ? " active" : ""}`}
                      >
                        <div className="img">
                          <img src={img} alt="" />
                        </div>

                        <div className="text">
                          <div className="left">
                            <div className="name fw-600">{name}</div>
                            <div className="lastMsg text-small">{lastMsg}</div>
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
            <div className="col-md-8">
              <div className="right-content">
                <div className="main-chat">
                  <div className="chat-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="img">
                        <img
                          src="./assets/img/chat-user-1.png"
                          alt="chat-user"
                        />
                      </div>
                      <div className="text ms-3">
                        <div className="fw-600 text-blue fs-22">Jhon Smith</div>
                        <div className="fw-600">(450) 938-3333</div>
                      </div>
                    </div>
                    <div>
                      <div className="menu">
                        <img
                          src="./assets/vectors/chat-menu.svg"
                          alt="chat-menu"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="chat-main-body">
                    {[
                      {
                        type: "msg",
                        userImg: "./assets/img/chat-user-1.png",
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
                        userImg: "./assets/img/chat-user-1.png",
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
                        userImg: "./assets/img/chat-user-1.png",
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
                        userImg: "./assets/img/chat-user-1.png",
                        msgContents: [
                          {
                            type: "text",
                            text: "I am interested to know more about your prices and services you offer",
                          },
                        ],
                        msgTime: "just now",
                      },
                    ].map((el, idx) => {
                      const { type, userImg, msgContents, msgTime, me, date } =
                        el;

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
                          <div className="timetag-container" key={"foot" + idx}>
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
                  <div className="btn btn-send">Send</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Converstaions;
