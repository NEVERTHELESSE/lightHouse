const AddProductPhone = lazy(() => import("./AdminAddProductPhone"));
const AddProductMouse = lazy(() => import("./AdminAddProductMouse"));
const AddProductKeyboard = lazy(() => import("./AddProductKeyboard"));
const AddProductStanding = lazy(() => import("./AddminAddProductStanding"));

import { lazy, useState } from "react";
import AddProductLaptop from "./AddProductLaptop";
import type { productType } from "~/types/productType";
import PendingUpload from "./PendingUpload";
type activeT = {
  active: string;
};

export function AdminAddProducts({ active }: activeT) {
  const [pendingProduct, setPendingProduct] = useState<productType[]>([]);
  const [productInfo, setProductInfo] = useState([]);
  const [addedImage, setAddedImage] = useState([]);
  const addProductTabs = [
    {
      id: "1",
      title: "laptop",
      component: (
        <AddProductLaptop
          pendingProduct={pendingProduct}
          setPendingProduct={setPendingProduct}
        />
      ),
    },
    {
      id: "2",
      title: "phone",
      component: (
        <AddProductPhone
          pendingProduct={pendingProduct}
          setPendingProduct={setPendingProduct}
        />
      ),
    },
    {
      id: "3",
      title: "mouse",
      component: (
        <AddProductMouse
          pendingProduct={pendingProduct}
          setPendingProduct={setPendingProduct}
        />
      ),
    },
    {
      id: "4",
      title: "keyboard",
      component: (
        <AddProductKeyboard
          pendingProduct={pendingProduct}
          setPendingProduct={setPendingProduct}
        />
      ),
    },
    {
      id: "5",
      title: "standing",
      component: (
        <AddProductStanding
          pendingProduct={pendingProduct}
          setPendingProduct={setPendingProduct}
        />
      ),
    },
    {
      id: "6",
      title: "charger",
      component: (
        <AddProductKeyboard
          pendingProduct={pendingProduct}
          setPendingProduct={setPendingProduct}
        />
      ),
    },
    {
      id: "7",
      title: "monitor",
      component: (
        <AddProductKeyboard
          pendingProduct={pendingProduct}
          setPendingProduct={setPendingProduct}
        />
      ),
    },
  ];

  // const [pendingProduct, setPendingProduct] = useState<productType[]>([]);
  return (
    <div>
      {addProductTabs
        .filter((tab) => tab.title === active)
        .map((tab) => (
          <div key={tab.id}>{tab.component}</div>
        ))}

      <div>
        {pendingProduct.length > 0 && (
          <PendingUpload
            pendingProduct={pendingProduct}
            setProductInfo={setProductInfo}
            setPendingProduct={setPendingProduct}
            setAddedImage={setAddedImage}
          />
        )}
      </div>
    </div>
  );
}
