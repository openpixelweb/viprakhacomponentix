"use client";

import React, { SetStateAction, useEffect, useMemo, useState } from "react";
import { useGetAllCategoriesQuery } from "@/redux/category/categoryApi";

type ICategoryValue = {
  name: string;
  id: string;
};

type IPropType = {
  setCategories: React.Dispatch<SetStateAction<ICategoryValue[]>>;
  setParent: React.Dispatch<SetStateAction<string>>;
  default_value?: ICategoryValue[];
};

export default function ProductCategory({
  setCategories,
  setParent,
  default_value = [],
}: IPropType) {
  const { data: categoriesData, isLoading, isError } = useGetAllCategoriesQuery();
  const [selectedCategories, setSelectedCategories] = useState<ICategoryValue[]>([]);

  const categoryItems = useMemo(() => {
    if (categoriesData?.success && Array.isArray(categoriesData?.result)) {
      return categoriesData.result;
    }
    return [];
  }, [categoriesData]);

  useEffect(() => {
    if (default_value.length && selectedCategories.length === 0) {
      setSelectedCategories(default_value);
      setCategories(default_value);
      setParent(default_value[0]?.name || "");
    }
  }, [default_value, selectedCategories.length, setCategories, setParent]);

  const handleCategoryToggle = (id: string, name: string) => {
    const exists = selectedCategories.some((item) => item.id === id);

    let updated: ICategoryValue[] = [];

    if (exists) {
      updated = selectedCategories.filter((item) => item.id !== id);
    } else {
      updated = [...selectedCategories, { id, name }];
    }

    setSelectedCategories(updated);
    setCategories(updated);
    setParent(updated[0]?.name || "");
  };

  const removeCategory = (id: string) => {
    const updated = selectedCategories.filter((item) => item.id !== id);
    setSelectedCategories(updated);
    setCategories(updated);
    setParent(updated[0]?.name || "");
  };

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  return (
    <>
      <div className="tags-input-wrapper mb-2">
        {selectedCategories.map((cat) => (
          <span key={cat.id} className="tag">
            {cat.name}
            <b onClick={() => removeCategory(cat.id)}>×</b>
          </span>
        ))}
      </div>

      <div className="h-80 overflow-y-auto overflow-x-hidden">
        <div className="p-0">
          {categoryItems.map((item: any) => {
            const isActive = selectedCategories.some((cat) => cat.id === item._id);

            return (
              <button
                key={item._id}
                type="button"
                onClick={() => handleCategoryToggle(item._id, item.parent)}
                className={`w-full text-left p-3 border-b ${isActive ? "bg-gray-100" : ""}`}
              >
                <h5 className="mr-auto font-medium mb-0 page-title">
                  {item.parent}
                </h5>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}