"use client";
import React, { useEffect } from "react";
import useProductSubmit from "@/hooks/useProductSubmit";
import ErrorMsg from "../../common/error-msg";
import FormField from "../form-field";
import DescriptionTextarea from "../add-product/description-textarea";
import { useGetProductQuery } from "@/redux/product/productApi";
import ProductTypeBrand from "../add-product/product-type-brand";
import ProductVariants from "../add-product/product-variants";
import ProductImgUpload from "../add-product/product-img-upload";
import Tags from "../add-product/tags";
import ProductCategory from "../../category/product-category";

const EditProductSubmit = ({ id }: { id: string }) => {
  const { data: product, isError, isLoading } = useGetProductQuery(id);

  const {
    handleSubmit,
    register,
    errors,
    setValue,
    tags,
    setTags,
    control,
    setCategories,
    setParent,
    setImg,
    img,
    setBrand,
    isSubmitted,
    relatedImages,
    setRelatedImages,
    handleEditProduct,
  } = useProductSubmit();

  useEffect(() => {
    if (!product) return;

    if (product.image) {
      setImg(product.image);
    }

    if (Array.isArray(product.tags)) {
      setTags(product.tags);
    }

    if (Array.isArray(product.relatedImages)) {
      setRelatedImages(product.relatedImages);
    }

  if (Array.isArray(product.categories)) {
  setCategories(product.categories);
  setParent(product.categories[0]?.name || "");
}

    if (product.brand?.id && product.brand?.name) {
      setBrand({
        id: product.brand.id,
        name: product.brand.name,
      });
    }
  }, [
    product,
    setImg,
    setTags,
    setRelatedImages,
   setCategories,
    setParent,
    setBrand,
  ]);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (!isLoading && isError) {
    return <ErrorMsg msg="There was an error" />;
  }

  if (!product) {
    return <ErrorMsg msg="Product not found" />;
  }

  return (
    <form onSubmit={handleSubmit((data) => handleEditProduct(data, id, product))}>
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="mb-6 bg-white px-8 py-8 rounded-md">
            <h4 className="text-[22px]">General</h4>

            <FormField
              title="title"
              isRequired={true}
              placeHolder="Product Title"
              register={register}
              errors={errors}
              defaultValue={product.title}
            />

            <DescriptionTextarea
              register={register}
              errors={errors}
              setValue={setValue}
              defaultValue={product.description}
            />
          </div>

          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6">
              <FormField
                title="price"
                isRequired={true}
                placeHolder="Product price"
                bottomTitle="Set the base price of product."
                type="number"
                defaultValue={product.price}
                register={register}
                errors={errors}
              />

              <FormField
                title="sku"
                isRequired={true}
                placeHolder="SKU"
                bottomTitle="Enter the product SKU."
                defaultValue={product.sku}
                register={register}
                errors={errors}
              />

              <FormField
                title="quantity"
                isRequired={true}
                placeHolder="Quantity"
                bottomTitle="Enter the product quantity."
                type="number"
                defaultValue={product.quantity}
                register={register}
                errors={errors}
              />

              <FormField
                title="discount"
                type="number"
                isRequired={false}
                placeHolder="Discount"
                bottomTitle="Set the Discount Percentage."
                defaultValue={product.discount}
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <ProductTypeBrand
            register={register}
            errors={errors}
            control={control}
            setSelectBrand={setBrand}
            default_value={{
              brand: product.brand.name,
              unit: product.unit,
            }}
          />

          <ProductVariants
            isSubmitted={isSubmitted}
            setImageURLs={setRelatedImages}
            relatedImages={relatedImages}
            default_value={product.relatedImages}
          />
        </div>

        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <ProductImgUpload
            imgUrl={img}
            setImgUrl={setImg}
            default_img={product.image}
            isSubmitted={isSubmitted}
          />

          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <p className="mb-5 text-base text-black">Product Category</p>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-5">
      <ProductCategory
  setCategories={setCategories}
  setParent={setParent}
  default_value={product.categories || []}
/>

              <Tags
                tags={tags}
                setTags={setTags}
                default_value={product.tags}
              />
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="tp-btn px-7 py-2">
        Submit Product
      </button>
    </form>
  );
};

export default EditProductSubmit;