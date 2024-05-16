import Modal from "./Modal";
import Button from "./Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

export default function AddCabinButton() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
  //   const [isOpenModal, setIsOpenModal] = useState(false);
  //   return (
  //     <div>
  //       <Button onClick={() => setIsOpenModal((form) => !form)}>
  //         Add new Cabin
  //       </Button>
  //       {isOpenModal && (
  //         <Modal onCloseModal={() => setIsOpenModal(false)}>
  //           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
  //         </Modal>
  //       )}
  //     </div>
  //   );
}
