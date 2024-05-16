import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  numCabins,
}) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const numNights = confirmedStays.reduce(
    (acc, curr) => acc + curr.numNights,
    0
  );

  const occupancyRate = numNights / (numDays * numCabins);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        color={"blue"}
        value={numBookings}
        title={"bookings"}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        color={"green"}
        value={formatCurrency(sales)}
        title={"sales"}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        color={"indigo"}
        value={confirmedStays.length}
        title={"checkins"}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        color={"yellow"}
        value={`${Math.round(occupancyRate * 100)}%`}
        title={"occupancy rate"}
      />
    </>
  );
}
