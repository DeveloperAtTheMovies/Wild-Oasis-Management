import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking of #${data.id} is successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Checking out is failed"),
  });

  return { checkout, isCheckingOut };
}
