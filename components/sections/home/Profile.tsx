"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative">
        <Suspense
          fallback={
            <Skeleton className="w-[200px] h-[200px] xl:w-64 xl:h-64 rounded-full border-8 border-primary" />
          }
        >
          <Image
            src="/images/Portrait.png"
            alt="Duane Cabahug Profile Image"
            width={200}
            height={200}
            className={`xl:w-64 xl:h-64 rounded-full border-8 border-black dark:border-white shadow-[0_0_30px_0_#000] shadow-primary/50 `}
          />
        </Suspense>
      </div>
      <h1 className="text-4xl xl:text-5xl font-bold">Duane Cabahug</h1>
      <p className="text-xl xl:text-2xl">Full Stack Developer</p>
      <div className="flex gap-4 items-center justify-between">
        <Link
          href="mailto:duanecabahug6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2xl"
            className="hover:opacity-75 transition-all duration-300"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/duane-cabahug/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="hover:opacity-75 transition-all duration-300"
          />
        </Link>
        <Link
          href="https://github.com/dcabahug1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            className="hover:opacity-75 transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
}

export default Profile;
