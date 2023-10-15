import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateUser } from "@/libs/fetch/useFetch";
import { useRouter } from "next/navigation";
const UpdateUser = ({ data, id }: { data?: User; id: string }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: updateUserMutation } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      router.push("/users");
    },
  });

  const form = useForm<User>({
    defaultValues: data,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = async (data: UserUpdate) => {
    delete data.id;
    data.updateAt = new Date().toISOString();
    await updateUserMutation({ id, data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='name'
        {...register("name", {
          required: "Required",
        })}
      />
      <input type='email' {...register("email", { required: "required" })} />
      <input
        type='password'
        {...register("password", {
          required: "Required",
        })}
      />
      <select {...register("role")}>
        <option value='USER'>User</option>
        <option value='ADMIN'>Admin</option>
      </select>
      <button>update user</button>
    </form>
  );
};

export default UpdateUser;
