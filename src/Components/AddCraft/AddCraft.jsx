import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddCraft = () => {
  const { users } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAdd = (data) => {
    console.log(data);
    const {
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      stock_status,
    } = data;
  };

  return (
    <div className="h-screen mt-12">
      <form
        onSubmit={handleSubmit(handleAdd)}
        className="border-yellow-500 flex items-center md:justify-center flex-col "
      >
        <div className="bg-base-300 w-full md:w-2/3 md:p-5 text-center flex flex-col items-center py-5 rounded-lg">
          <h2 className="text-3xl font-bold">Add Craft Item</h2>
          <div className="flex flex-col md:flex-row md:justify-between w-ful border lg:w-1/2 md:gap-5">
            <div className=" w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Image URL</span>
                </div>
                <input
                  type="text"
                  placeholder="Image"
                  {...register("image", { required: true })}
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                {errors.image && (
                  <p className="text-red-600">Image is required.</p>
                )}
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Item Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Item Name"
                  {...register("item_name", { required: true })}
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                {errors.item_name && (
                  <p className="text-red-600">Item Name is required.</p>
                )}
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">SubCategory Name</span>
                </div>
                <select
                  className="input input-bordered input-warning w-full max-w-xs"
                  id="dropdown"
                  name="dropdown"
                  {...register("subcategory_name")}
                >
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Short Description</span>
                </div>
                <textarea
                  className="textarea textarea-warning"
                  placeholder="Short Description"
                  {...register("short_description", { required: true })}
                ></textarea>
                {errors.short_description && (
                  <p className="text-red-600">Short Description is required.</p>
                )}
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  type="text"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                {errors.price && (
                  <p className="text-red-600">Price is required.</p>
                )}
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Rating</span>
                </div>
                <input
                  type="text"
                  placeholder="Rating"
                  {...register("rating", { required: true })}
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                {errors.rating && (
                  <p className="text-red-600">Rating is required.</p>
                )}
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Customization</span>
                </div>
                <select
                  className="input input-bordered input-warning w-full max-w-xs"
                  id="dropdown"
                  name="dropdown"
                  {...register("customization")}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Stock Status</span>
                </div>
                <select
                  className="input input-bordered input-warning w-full max-w-xs"
                  id="dropdown"
                  name="dropdown"
                  {...register("stock_status")}
                >
                  <option value="In stock">In stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-orange-500 mt-8 w-1/2 text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
