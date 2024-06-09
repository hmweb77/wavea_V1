import Link from "next/link";
import React from "react";

export const ProjectCard = ({ type, title, description,link }) => {
  return (
    <div className="flex flex-col align-items: flex-start; justify-between mb-8  w-308 ">
      <h2 className="bg-blue-200 text-yellow-100 text-left text-montserrat font-semibold text-2xl leading-130 rounded-md py-1 pl-2 pr-1">
        {type}
      </h2>
      {link ? (
        <Link href={link} target="_blank">
          <h4 className="text-black-100 text-left text-montserrat font-semibold text-2xl leading-130 px-6">
            {title}
          </h4>
        </Link>
      ) : (
        <h4 className="text-black-100 text-left text-montserrat font-semibold text-2xl leading-130 px-6">
          {title}
        </h4>
      )}
      <p className="text-black-200 text-left text-montserrat  text-xl leading-170">
        {description}
      </p>
    </div>
  );
};
