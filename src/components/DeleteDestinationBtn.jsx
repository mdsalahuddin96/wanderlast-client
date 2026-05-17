"use client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

import { RiDeleteBinFill } from "react-icons/ri";
import { toast } from "react-toastify";

const DeleteDestinationBtn = ({ destination }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/deleteDestination/${destination._id}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();
    if (data.deletedCount > 0) {
      router.push("/destinations");
      router.refresh();
      toast.error(`${destination.destinationName} deleted successfully`)
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger" className="rounded-none">
        <RiDeleteBinFill /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destination.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    // <Button  variant="danger" className="rounded-none">
    //   <RiDeleteBinFill /> Delete
    // </Button>
  );
};

export default DeleteDestinationBtn;
