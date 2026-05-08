"use client";
import React from "react";
import useProductSubmit from "@/hooks/useProductSubmit";
import FormField from "../form-field";
import DescriptionTextarea from "./description-textarea";
import ProductTypeBrand from "./product-type-brand";
import ProductVariants from "./product-variants";
import ProductImgUpload from "./product-img-upload";
import Tags from "./tags";
import ProductCategory from "../../category/product-category";

const ProductSubmit = () => {
  const {
    handleSubmit,
    handleSubmitProduct,
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
  } = useProductSubmit();

  return (
    <form onSubmit={handleSubmit(handleSubmitProduct)}>
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
            />

            <DescriptionTextarea
              register={register}
              errors={errors}
              setValue={setValue}
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
                register={register}
                errors={errors}
              />

              <FormField
                title="sku"
                isRequired={true}
                placeHolder="SKU"
                bottomTitle="Enter the product SKU."
                register={register}
                errors={errors}
              />

              <FormField
                title="quantity"
                isRequired={true}
                placeHolder="Quantity"
                bottomTitle="Enter the product quantity."
                type="number"
                register={register}
                errors={errors}
              />

              <FormField
                title="discount"
                type="number"
                isRequired={false}
                placeHolder="Discount"
                bottomTitle="Set the Discount Percentage."
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
          />

          <ProductVariants
            isSubmitted={isSubmitted}
            setImageURLs={setRelatedImages}
            relatedImages={relatedImages}
          />
        </div>

        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <ProductImgUpload
            imgUrl={img}
            setImgUrl={setImg}
            isSubmitted={isSubmitted}
          />

          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <p className="mb-5 text-base text-black">Product Category</p>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-5">
      <ProductCategory
  setCategories={setCategories}
  setParent={setParent}
/>

              <Tags tags={tags} setTags={setTags} />
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

export default ProductSubmit;