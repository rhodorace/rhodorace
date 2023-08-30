import { Typography } from "@material-tailwind/react";

export default function PageTitle({ heading }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray" className="mb-3">
        {heading}
      </Typography>
    </div>
  );
}