"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import ErrorMsg from "../../common/error-msg";
import { useUploadImageMutation } from "@/redux/cloudinary/cloudinaryApi";
import "react-quill/dist/quill.snow.css";

const ReactQuill: any = dynamic(() => import("react-quill"), {
  ssr: false,
});

type IPropType = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  defaultValue?: string;
};

const DescriptionTextarea = ({
  register,
  errors,
  setValue,
  defaultValue = "",
}: IPropType) => {
  const [isSourceMode, setIsSourceMode] = useState(false);
  const [htmlValue, setHtmlValue] = useState(defaultValue || "");

  const quillRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [uploadImage, { isLoading: isUploading }] = useUploadImageMutation();

  useEffect(() => {
    register("description", {
      required: "Description is required",
    });
  }, [register]);

  useEffect(() => {
    setHtmlValue(defaultValue || "");
  }, [defaultValue]);

  useEffect(() => {
    setValue("description", htmlValue);
  }, [htmlValue, setValue]);

  const handleImageToolbarClick = () => {
    fileInputRef.current?.click();
  };

  const handleDescriptionImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await uploadImage(formData).unwrap();
      const imageUrl = res?.data?.url;

      if (!imageUrl) return;

      const editor = quillRef.current?.getEditor?.();

      if (editor) {
        const range = editor.getSelection(true);
        const index = range ? range.index : editor.getLength();

        editor.insertEmbed(index, "image", imageUrl);
        editor.setSelection(index + 1);

        const updatedHtml = editor.root.innerHTML;
        setHtmlValue(updatedHtml);
        setValue("description", updatedHtml);
      } else {
        const updatedHtml =
          htmlValue + `<p><img src="${imageUrl}" alt="description-image" /></p>`;
        setHtmlValue(updatedHtml);
        setValue("description", updatedHtml);
      }
    } catch (error) {
      console.error("Description image upload failed:", error);
    } finally {
      e.target.value = "";
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: handleImageToolbarClick,
        },
      },
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div className="mb-5">
      <p className="mb-2 text-base text-black">Description</p>

      <button
        type="button"
        onClick={() => setIsSourceMode(!isSourceMode)}
        className="mb-2 px-3 py-1 bg-gray-200 rounded"
      >
        {isSourceMode ? "Switch to Editor" : "Switch to HTML"}
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
        onChange={handleDescriptionImageUpload}
        className="hidden"
      />

      {isSourceMode ? (
        <textarea
          className="w-full border p-3 h-[200px]"
          value={htmlValue}
          onChange={(e) => setHtmlValue(e.target.value)}
          placeholder="Paste HTML here..."
        />
      ) : (
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={htmlValue}
          onChange={setHtmlValue}
          modules={modules}
          formats={formats}
        />
      )}

      {isUploading && (
        <p className="mt-2 text-sm text-gray-500">Uploading image...</p>
      )}

      <ErrorMsg msg={(errors?.description?.message as string) || ""} />
    </div>
  );
};

export default DescriptionTextarea;
