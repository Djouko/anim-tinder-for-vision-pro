"use client";

import Image from "next/image";
import { useState } from "react";
//import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import "./page.scss";
import gsap from "gsap";

const person = {
  name: "Jane",
  age: 18,
  distance: 9,
  img: "/photo-1.jpg",
  images: ["/photo-2.jpg", "/photo-3.jpg", "/photo-4.jpg"],
  fullImages: ["/photo-1.jpg", "/photo-2.jpg", "/photo-3.jpg", "/photo-4.jpg"],
};

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    const cardPiles = document.querySelectorAll(".card-pile");
    if (!isZoomed) {
      gsap.to(".card-images", {
        opacity: 1,
        y: "128px",
        duration: 0.3,
      });
      gsap.to(".star-div, .header", {
        opacity: 0,
        y: -40,
        duration: 0.3,
      });
      gsap.to(".close-div, .nav", {
        opacity: 0,
        x: -40,
        duration: 0.2,
      });
      gsap.to(".fav-div", {
        opacity: 0,
        x: 40,
        duration: 0.3,
      });
      gsap.to(".main-image", {
        width: 900,
        height: 600,
        //y: -50,
        duration: 0.3,
      });
      gsap.to(".other-right-images", {
        //opacity: 1,
        transform: "translateX(16px)",
        duration: 0.3,
      });
      gsap.to(".other-left-images", {
        //opacity: 1,
        transform: "translateX(-16px)",
        duration: 0.3,
      });
      gsap.to(".main-image img", {
        scale: 1.05,
        duration: 0.3,
      });
      gsap.to(".card-shadow", {
        opacity: 0,
        duration: 0.3,
      });
      cardPiles.forEach((cardPile) => {
        const element = cardPile as HTMLElement;
        element.style.opacity = "0";
      });
    } else {
      gsap.to(".card-images", {
        opacity: 0,
        y: "0",
        duration: 0.3,
      });
      gsap.to(".star-div, .header", {
        opacity: 1,
        y: 0,
        duration: 0.3,
      });
      gsap.to(".close-div, .nav", {
        opacity: 1,
        x: 0,
        duration: 0.2,
      });
      gsap.to(".fav-div", {
        opacity: 1,
        x: 0,
        duration: 0.3,
      });
      gsap.to(".main-image", {
        width: 530,
        height: 530,
        //y: 0,
        duration: 0.3,
      });
      gsap.to(".other-right-images", {
        //opacity: 0,
        transform: "translateX(1000px)",
        duration: 0.3,
      });
      gsap.to(".other-left-images", {
        //opacity: 0,
        transform: "translateX(-1000px)",
        duration: 0.3,
      });
      gsap.to(".main-image img", {
        scale: 1,
        duration: 0.3,
      });
      gsap.to(".card-shadow", {
        opacity: 1,
        duration: 0.3,
      });

      cardPiles.forEach((cardPile) => {
        const element = cardPile as HTMLElement;
        element.style.opacity = "1";
      });
    }

    setIsZoomed(!isZoomed); // Inverse l'état de zoom
  };
  return (
    <main className="main relative min-h-screen w-full">
      <div className="main-container mx-auto min-h-screen max-w-[1400px] px-4 w-full flex justify-between items-center">
        <button className="close-div w-20 h-20 flex items-center justify-center">
          <img src="/close.svg" alt="close" />
        </button>
        <div className="relative mx-4">
          <div className="star-div w-full -top-24 absolute flex items-center justify-center">
            <button className="w-12 h-12 flex items-center justify-center">
              <img src="/star.svg" alt="star" />
            </button>
          </div>
          <div className="header w-[500px] mx-auto p-1 flex items-center justify-between mb-12">
            <button>
              <img src="/notif.svg" alt="notif" />
            </button>
            <img src="/logo.svg" alt="logo" />
            <button>
              <img src="/setting.svg" alt="setting" />
            </button>
          </div>
          <div className="nav z-50 absolute px-4 py-4 -left-[20%] -translate-y-1/2 top-1/2 flex flex-col items-start gap-2">
            <button className="nav-button active flex items-center justify-start p-2 w-full gap-2">
              <span className="flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13.5517C4 10.0759 6.56 7.96552 7.84 7.34483C7.84 8.17241 8.096 9.82759 9.12 9.82759C12.32 9.82759 12.32 6.10345 12.32 3C14.24 3 20 7.96552 20 12.931C20 17.8966 16.16 21 11.68 21C7.2 21 4 17.8966 4 13.5517Z"
                    fill="white"
                    fill-opacity="0.96"
                  />
                </svg>
              </span>
              <span className="text-white">Rencontres</span>
            </button>
            <button className="nav-button flex items-center justify-start p-2 w-full gap-2">
              <span className="flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C14.5 14.5 14.5 14.5 12 22C9.5 14.5 9.5 14.5 2 12C9.5 9.5 9.5 9.5 12 2C14.5 9.5 14.5 9.5 22 12Z"
                    fill="white"
                    fill-opacity="0.23"
                    style={{ mixBlendMode: "lighten" }}
                  />
                  <path
                    d="M22 12C14.5 14.5 14.5 14.5 12 22C9.5 14.5 9.5 14.5 2 12C9.5 9.5 9.5 9.5 12 2C14.5 9.5 14.5 9.5 22 12Z"
                    fill="#545454"
                    style={{ mixBlendMode: "color-dodge" }}
                  />
                </svg>
              </span>
              <span className="text-white opacity-[.23]">Tinder</span>
            </button>
            <button className="nav-button flex items-center justify-start p-2 w-full gap-2">
              <span className="flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.00005 5.15609C3.00005 4.5176 3.51765 4 4.15614 4H8.7805C9.41899 4 9.93659 4.5176 9.93659 5.15609V9.78045C9.93659 10.4189 9.41899 10.9365 8.7805 10.9365H4.15614C3.51765 10.9365 3.00005 10.4189 3.00005 9.78045V5.15609Z"
                    fill="white"
                    fill-opacity="0.23"
                    style={{ mixBlendMode: "lighten" }}
                  />
                  <path
                    d="M3.00005 5.15609C3.00005 4.5176 3.51765 4 4.15614 4H8.7805C9.41899 4 9.93659 4.5176 9.93659 5.15609V9.78045C9.93659 10.4189 9.41899 10.9365 8.7805 10.9365H4.15614C3.51765 10.9365 3.00005 10.4189 3.00005 9.78045V5.15609Z"
                    fill="#545454"
                    style={{ mixBlendMode: "color-dodge" }}
                  />
                  <path
                    d="M3 14.4048C3 13.7663 3.5176 13.2487 4.15609 13.2487H8.72371C7.80506 15.5052 7.96896 18.041 9.10045 20.1404C8.99883 20.1696 8.89146 20.1853 8.78044 20.1853H4.15609C3.5176 20.1853 3 19.6677 3 19.0292V14.4048Z"
                    fill="white"
                    fill-opacity="0.23"
                    style={{ mixBlendMode: "lighten" }}
                  />
                  <path
                    d="M3 14.4048C3 13.7663 3.5176 13.2487 4.15609 13.2487H8.72371C7.80506 15.5052 7.96896 18.041 9.10045 20.1404C8.99883 20.1696 8.89146 20.1853 8.78044 20.1853H4.15609C3.5176 20.1853 3 19.6677 3 19.0292V14.4048Z"
                    fill="#545454"
                    style={{ mixBlendMode: "color-dodge" }}
                  />
                  <path
                    d="M12.2487 9.24326C14.3468 8.06246 16.9035 7.8627 19.1852 8.76179V5.15609C19.1852 4.5176 18.6676 4 18.0292 4H13.4048C12.7663 4 12.2487 4.5176 12.2487 5.15609V9.24326Z"
                    fill="white"
                    fill-opacity="0.23"
                    style={{ mixBlendMode: "lighten" }}
                  />
                  <path
                    d="M12.2487 9.24326C14.3468 8.06246 16.9035 7.8627 19.1852 8.76179V5.15609C19.1852 4.5176 18.6676 4 18.0292 4H13.4048C12.7663 4 12.2487 4.5176 12.2487 5.15609V9.24326Z"
                    fill="#545454"
                    style={{ mixBlendMode: "color-dodge" }}
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.9329 12.5478C16.8635 11.0512 13.9725 11.5155 12.4759 13.585C10.9793 15.6545 11.4437 18.5455 13.5131 20.0421C15.2592 21.3048 17.5899 21.1716 19.1747 19.8563L21.1663 21.2966C21.6837 21.6708 22.4064 21.5547 22.7805 21.0373C23.1547 20.5199 23.0386 19.7972 22.5212 19.423L20.5296 17.9827C21.2824 16.0657 20.679 13.8105 18.9329 12.5478ZM14.3495 14.94C15.0978 13.9052 16.5432 13.673 17.578 14.4214C18.6127 15.1697 18.8449 16.6152 18.0966 17.6499C17.3483 18.6846 15.9028 18.9168 14.8681 18.1685C13.8333 17.4202 13.6012 15.9747 14.3495 14.94Z"
                    fill="white"
                    fill-opacity="0.23"
                    style={{ mixBlendMode: "lighten" }}
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.9329 12.5478C16.8635 11.0512 13.9725 11.5155 12.4759 13.585C10.9793 15.6545 11.4437 18.5455 13.5131 20.0421C15.2592 21.3048 17.5899 21.1716 19.1747 19.8563L21.1663 21.2966C21.6837 21.6708 22.4064 21.5547 22.7805 21.0373C23.1547 20.5199 23.0386 19.7972 22.5212 19.423L20.5296 17.9827C21.2824 16.0657 20.679 13.8105 18.9329 12.5478ZM14.3495 14.94C15.0978 13.9052 16.5432 13.673 17.578 14.4214C18.6127 15.1697 18.8449 16.6152 18.0966 17.6499C17.3483 18.6846 15.9028 18.9168 14.8681 18.1685C13.8333 17.4202 13.6012 15.9747 14.3495 14.94Z"
                    fill="#545454"
                    style={{ mixBlendMode: "color-dodge" }}
                  />
                </svg>
              </span>
              <span className="text-white opacity-[.23]">Explorer</span>
            </button>
            <button className="nav-button flex items-center justify-start p-2 w-full gap-2">
              <span className="flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.44439 17.6261C3.78753 16.2813 2 13.7677 2 10.8889C2 6.59334 5.97969 3.11111 10.8889 3.11111C15.5012 3.11111 19.2931 6.18493 19.7348 10.1191C19.0363 9.89608 18.2988 9.77778 17.5556 9.77778C14.1617 9.77778 10.8889 12.2444 10.8889 15.8889C10.8889 16.9085 11.1451 17.8359 11.5884 18.6429C11.3576 18.6587 11.1243 18.6667 10.8889 18.6667C10.5394 18.6667 10.1946 18.649 9.85569 18.6147L6.44439 20.8889V17.6261Z"
                    fill="white"
                    fill-opacity="0.23"
                    style={{ mixBlendMode: "lighten" }}
                  />
                  <path
                    d="M6.44439 17.6261C3.78753 16.2813 2 13.7677 2 10.8889C2 6.59334 5.97969 3.11111 10.8889 3.11111C15.5012 3.11111 19.2931 6.18493 19.7348 10.1191C19.0363 9.89608 18.2988 9.77778 17.5556 9.77778C14.1617 9.77778 10.8889 12.2444 10.8889 15.8889C10.8889 16.9085 11.1451 17.8359 11.5884 18.6429C11.3576 18.6587 11.1243 18.6667 10.8889 18.6667C10.5394 18.6667 10.1946 18.649 9.85569 18.6147L6.44439 20.8889V17.6261Z"
                    fill="#545454"
                    style={{ mixBlendMode: "color-dodge" }}
                  />
                  <path
                    d="M22 15.8889C22 17.3283 21.1062 18.5851 19.7778 19.2575V20.8889L18.0721 19.7518C17.9027 19.769 17.7303 19.7778 17.5556 19.7778C15.101 19.7778 13.1111 18.0367 13.1111 15.8889C13.1111 13.7411 15.101 12 17.5556 12C20.0102 12 22 13.7411 22 15.8889Z"
                    fill="white"
                    fill-opacity="0.23"
                    style={{ mixBlendMode: "lighten" }}
                  />
                  <path
                    d="M22 15.8889C22 17.3283 21.1062 18.5851 19.7778 19.2575V20.8889L18.0721 19.7518C17.9027 19.769 17.7303 19.7778 17.5556 19.7778C15.101 19.7778 13.1111 18.0367 13.1111 15.8889C13.1111 13.7411 15.101 12 17.5556 12C20.0102 12 22 13.7411 22 15.8889Z"
                    fill="#545454"
                    style={{ mixBlendMode: "color-dodge" }}
                  />
                </svg>
              </span>
              <span className="text-white opacity-[.23]">Messages</span>
            </button>
            <button className="nav-button flex items-center justify-start p-2 w-full gap-2">
              <span className="flex items-center justify-center">
                <svg
                  width="14"
                  height="19"
                  viewBox="0 0 14 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C4.23461 0 2.07274 2.3859 2.34454 5.1379L2.58972 7.62042C2.69506 8.68692 3.17268 9.63409 3.88616 10.3383C2.38291 11.5534 1.11362 13.3797 0.286301 14.7546C-0.341395 15.7977 0.0966219 17.0704 1.27183 17.3881C2.55124 17.7341 4.45038 18.0702 7 18.0702C9.54963 18.0702 11.4488 17.7341 12.7282 17.3881C13.9034 17.0704 14.3414 15.7977 13.7137 14.7546C12.8864 13.3797 11.6171 11.5534 10.1138 10.3383C10.8273 9.63409 11.3049 8.68692 11.4103 7.62042L11.6555 5.13791C11.9273 2.38591 9.76539 0 7 0Z"
                    fill="white"
                    fill-opacity="0.23"
                    style={{ mixBlendMode: "lighten" }}
                  />
                  <path
                    d="M7 0C4.23461 0 2.07274 2.3859 2.34454 5.1379L2.58972 7.62042C2.69506 8.68692 3.17268 9.63409 3.88616 10.3383C2.38291 11.5534 1.11362 13.3797 0.286301 14.7546C-0.341395 15.7977 0.0966219 17.0704 1.27183 17.3881C2.55124 17.7341 4.45038 18.0702 7 18.0702C9.54963 18.0702 11.4488 17.7341 12.7282 17.3881C13.9034 17.0704 14.3414 15.7977 13.7137 14.7546C12.8864 13.3797 11.6171 11.5534 10.1138 10.3383C10.8273 9.63409 11.3049 8.68692 11.4103 7.62042L11.6555 5.13791C11.9273 2.38591 9.76539 0 7 0Z"
                    fill="#545454"
                    style={{ mixBlendMode: "color-dodge" }}
                  />
                </svg>
              </span>
              <span className="text-white opacity-[.23]">Mon compte</span>
            </button>
          </div>
          <div className="relative">
            <div className="relative flex gap-2">
              <div
                className="main-image relative cursor-pointer overflow-hidden flex items-end justify-center"
                onClick={handleImageClick}
              >
                <Image
                  className="z-[5] object-cover w-full h-full"
                  width={800}
                  height={800}
                  src={person.img}
                  alt="image"
                />
              </div>
              <div className="other-right-images flex items-center justify-center gap-2">
                {person.images.map((person, index) => (
                  <div
                    className="other-main-image relative cursor-pointer overflow-hidden flex items-end justify-center"
                    key={index}
                  >
                    <Image
                      className="z-[5] object-cover w-full h-full"
                      width={800}
                      height={800}
                      src={person}
                      alt="image"
                    />
                  </div>
                ))}
              </div>
              <div className="other-left-images flex items-center justify-center gap-2">
                {person.images
                  .slice()
                  .reverse()
                  .map((person, index) => (
                    <div
                      className="other-main-image relative cursor-pointer overflow-hidden flex items-end justify-center"
                      key={index}
                    >
                      <Image
                        className="z-[5] object-cover w-full h-full"
                        width={800}
                        height={800}
                        src={person}
                        alt="image"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="card-images flex absolute bottom-16 opacity-0 items-center justify-center gap-2 w-full">
              {person.fullImages.map((person, index) => (
                <div
                  className={`card-image ${
                    index === 0 && "active"
                  } relative cursor-pointer overflow-hidden flex items-end justify-center`}
                  key={index}
                >
                  <Image
                    className="z-[5] object-cover w-full h-full"
                    width={800}
                    height={800}
                    src={person}
                    alt="image"
                  />
                </div>
              ))}
            </div>
            <div className="absolute z-[4] h-[520px] w-[520px] -translate-x-1/2 left-1/2 -top-2 card-pile"></div>
            <div className="absolute z-[3] h-[510px] w-[510px] -translate-x-1/2 left-1/2 -top-4 card-pile"></div>
            <div className="absolute z[2] h-[500px] w-[500px] -translate-x-1/2 left-1/2 -top-6 card-pile"></div>
            <div className="card-shadow"></div>
          </div>
        </div>
        <button className="fav-div w-20 h-20 flex items-center justify-center">
          <img src="/fav.svg" alt="fav" />
        </button>
      </div>

      <div className="main-container-none items-center justify-center min-h-screen">
        <p className="p-4 text-xl text-center font-light text-white">
          Please resize your screen ...
        </p>
      </div>
    </main>
  );
}

{
  /*             
            <Splide
              hasTrack={false}
              aria-label="Best sales"
              options={{
                type: "loop",
                pagination: false,
                fixedWidth: "300px",
                gap: "1rem",
              }}
            >
              <SplideTrack>
                {person.images.map((person, index) => (
                  <SplideSlide key={index}>
                    <div>
                      <Image src={person} alt="image" />
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
           */
}
