"use client";
import FormInput from "./FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutValidation } from "../formValidation";
import { CheckoutDataType } from "@/typescript/types/checkoutDataType";
import { handleCreateOrder } from "../functions";
import { ReactNode } from "react";

export default function CheckoutForm(): ReactNode {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutDataType>({
    resolver: yupResolver(checkoutValidation),
  });
  const resetForm = () => {
    reset();
  };
  const onSubmit: SubmitHandler<CheckoutDataType> = (
    formData: CheckoutDataType
  ) => handleCreateOrder(formData, resetForm);
  return (
    <div className="lg:w-1/2 md:w-3/4 w-full md:px-0 px-5 text-center">
      <h2 className="text-4xl font-medium">Create Order</h2>
      <article className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dicta
        repellendus in rerum inventore, est accusamus exercitationem minus
        provident dignissimos reiciendis similique nulla vitae, quae velit
        doloremque nemo aspernatur praesentium!
      </article>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-sm p-6 rounded-lg border "
      >
        <FormInput
          placeholder={"Enter name"}
          register={{ ...register("name") }}
          error={errors?.name?.message}
        />
        <FormInput
          placeholder={"Enter phone"}
          register={{ ...register("phone") }}
          error={errors?.phone?.message}
        />
        <FormInput
          placeholder={"Enter email"}
          register={{ ...register("email") }}
          error={errors?.email?.message}
        />
        <div className="flex justify-center mt-2">
          <button
            className="bg-[#4B5563] md:w-auto w-full py-2 px-3 rounded-lg text-white"
            disabled={isSubmitting}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
