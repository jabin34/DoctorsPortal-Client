import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
  const { speciality, name, email, img } = deleteDoctor;
  const doctorDelete = (email) => {
    fetch(`https://rocky-tundra-61365.herokuapp.com/doctor/${email}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Deleted successfully");
          refetch();
          setDeleteDoctor(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />

      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete? {name}{" "}
          </h3>

          <div class="modal-action">
            <button
              className="btn btn-xs btn-error text-white"
              onClick={() => doctorDelete(email)}
            >
              Delete
            </button>
            <label for="delete-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
