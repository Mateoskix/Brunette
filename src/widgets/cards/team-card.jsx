import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        className="h-[80%] w-full shadow-lg shadow-gray-500/25"
      />
    </Card>
  );
}

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
