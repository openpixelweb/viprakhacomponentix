"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  useAddProductMutation,
  useEditProductMutation,
} from "@/redux/product/productApi";
import { notifyError, notifySuccess } from "@/utils/toast";
import { IAddProduct, ICategoryItem } from "@/types/product-type";

type IBCType = {
  name: string;
  id: string;
};

const useProductSubmit = () => {
  const [img, setImg] = useState<string>("");
  const [relatedImages, setRelatedImages] = useState<string[]>([]);
  const [brand, setBrand] = useState<IBCType>({ name: "", id: "" });
  const [categories, setCategories] = useState<ICategoryItem[]>([]);
  const [parent, setParent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(true);

  const router = useRouter();

  const [addProduct] = useAddProductMutation();
  const [editProduct] = useEditProductMutation();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      description: "",
    },
  });

  const handleSubmitProduct = async (data: any) => {
    const productData: IAddProduct = {
      sku: data.sku,
      title: data.title,
      itemInfo: data.itemInfo,
      parent,
      tags,
      image: img,
      originalPrice: Number(data.price),
      price: Number(data.price),
      discount: Number(data.discount) || 0,
      relatedImages,
      description: data.description,
      brand,
      categories,
      unit: data.unit,
      quantity: Number(data.quantity),
    };

    if (!productData.image) return notifyError("Product image is required");
    if (!productData.brand?.id) return notifyError("Brand is required");
    if (!productData.categories?.length) return notifyError("At least one category is required");
    if (!productData.parent) return notifyError("Main parent category is required");
    if (Number(productData.discount) > Number(productData.price)) {
      return notifyError("Product price must be greater than discount");
    }

    const res = await addProduct(productData);

    if ("error" in res) {
      return notifyError("Failed to create product");
    }

    notifySuccess("Product created successfully");
    setIsSubmitted(true);
    router.push("/product-grid");
  };

  const handleEditProduct = async (data: any, id: string, existingProduct?: any) => {
    const finalImage = img || existingProduct?.image || "";
    const finalBrand = brand?.id ? brand : existingProduct?.brand;
    const finalCategories =
      categories.length > 0 ? categories : existingProduct?.categories || [];
    const finalParent =
      parent || existingProduct?.parent || finalCategories?.[0]?.name || "";
    const finalTags = tags.length ? tags : existingProduct?.tags || [];
    const finalRelatedImages =
      relatedImages.length > 0 ? relatedImages : existingProduct?.relatedImages || [];

    const productData: IAddProduct = {
      sku: data.sku,
      title: data.title,
      itemInfo: data.itemInfo,
      parent: finalParent,
      tags: finalTags,
      image: finalImage,
      originalPrice: Number(data.price),
      price: Number(data.price),
      discount: Number(data.discount) || 0,
      relatedImages: finalRelatedImages,
      description: data.description,
      brand: finalBrand,
      categories: finalCategories,
      unit: data.unit,
      quantity: Number(data.quantity),
    };

    if (!productData.image) return notifyError("Product image is required");
    if (!productData.brand?.id) return notifyError("Brand is required");
    if (!productData.categories?.length) return notifyError("At least one category is required");
    if (!productData.parent) return notifyError("Main parent category is required");
    if (Number(productData.discount) > Number(productData.price)) {
      return notifyError("Product price must be greater than discount");
    }

    const res = await editProduct({ id, data: productData });

    if ("error" in res) {
      return notifyError("Failed to update product");
    }

    notifySuccess("Product edited successfully");
    setIsSubmitted(true);
    router.push("/product-grid");
  };

  return {
    img,
    setImg,
    parent,
    setParent,
    brand,
    setBrand,
    categories,
    setCategories,
    tags,
    setTags,
    relatedImages,
    setRelatedImages,
    isSubmitted,
    handleSubmitProduct,
    handleEditProduct,
    register,
    handleSubmit,
    setValue,
    errors,
    control,
  };
};

export default useProductSubmit;