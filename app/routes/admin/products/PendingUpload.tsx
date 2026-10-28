import { FaPen, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Price from "~/components/Price";

export default function PendingUpload({
  pendingProduct,
  setProductInfo,
  setPendingProduct,
  setAddedImage,
}: any) {
  function removeAndSet(id: number) {
    const remain = pendingProduct.filter(
      (_: any, index: number) => index != id
    );
    setPendingProduct(remain);
  }
  function updatePendingProduct(product, index) {
    setProductInfo(product);
    setAddedImage(product.src);
    removeAndSet(index);
  }
  function deletePendingProduct(id: number) {
    removeAndSet(id);
    toast.success(
      'Product successfully removed, incase of recovering it"s still in draft'
    );
  }

  return (
    <div className="w-full">
      Double click to update product info
      {pendingProduct.map((product, index: number) => (
        <div
          onDoubleClick={() => updatePendingProduct(product, index)}
          key={index}
          className="bg-whtie w-full cursor-pointer hover:bg-gray-300 shadow my-2  rounded-2xl bg-white flex justify-between items-center duration-700 "
        >
          <div className="flex">
            <img
              src={product.src[0]}
              alt="laptop"
              className="size-15 object-cover "
            />
            <div className="ml-2">
              <p>{product.name} </p>
              <Price productPrice={product.price} />
            </div>
          </div>
          <div className="flex p-3">
            <button onClick={() => deletePendingProduct(index)}>
              <FaTrash className="text-red-500 hover:text-red-600 " />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
