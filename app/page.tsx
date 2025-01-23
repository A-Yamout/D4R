import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
];

export default function Home() {
  return (
    <>
      {/* Add stylesheet for the donate button */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://donorbox.org/animate-popup-donate-button.css"
      />
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
            {/* Add the Donorbox Donate button */}
            <li>
              <a
                className="dbox-donation-page-button"
                href="https://donorbox.org/dignity-for-refugees-relief-fund?default_interval=m"
                style={{
                  background: "rgb(22, 73, 139)",
                  color: "rgb(255, 255, 255)",
                  textDecoration: "none",
                  fontFamily: "Verdana, sans-serif",
                  display: "flex",
                  fontSize: "16px",
                  padding: "8px 24px",
                  borderRadius: "5px",
                  gap: "8px",
                  width: "fit-content",
                  lineHeight: "24px",
                }}
              >
                <img
                  src="https://donorbox.org/images/white_logo.svg"
                  alt="Donorbox logo"
                />
                Donate
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="z-10 text-xl text-transparent duration-1000 bg-gradient-to-r from-bluefirst to-bluesecond cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          DIGNITY 4 REFUGEES
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            Dignity 4 Refugees (D4R) is a{" "}
            <Link
              target="_blank"
              href="https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations"
              className="underline duration-500 hover:text-zinc-300"
            >
              501c3 non-profit
            </Link>{" "}
            dedicated to alleviating refugee situations around the world.
          </h2>
        </div>
      </div>
    </>
  );
}
