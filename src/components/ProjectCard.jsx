import Link from "next/link";
import React from "react";

export const ProjectCard = ({ type, title, description, link }) => {
  return (
    <div className="flex flex-col items-center md:items-start justify-between mb-8 md:ml-24 w-308  ">
      <h2 className="bg-blue-200 text-yellow-100  text-center text-montserrat font-semibold w-136 text-2xl leading-130 rounded-md md:py-2 ">
        {type}
      </h2>
      {link ? (
        <Link href={link} target="_blank">
          <h4 className="text-black-100 text-center md:text-left text-montserrat font-semibold text-2xl leading-130 pb-4 pt-3 ">
            {title}
          </h4>
        </Link>
      ) : (
        <h4 className="text-black-100 text-center md:text-left text-montserrat font-semibold text-2xl leading-130 pb-4 pt-3  ">
          {title}
        </h4>
      )}
      <p className="text-black-200 text-center md:text-left text-montserrat text-xl leading-170">
        {description}
      </p>
    </div>
  );
};
