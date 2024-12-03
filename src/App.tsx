import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const defaultFormValues = {
  firstName: "",
  lastName: "",
  fullName: "",
  email: "",
  gender: "male",
};

const schema = yup.object({
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
  email: yup.string(),
  gender: yup.string(),
  fullName: yup.string(),
});

function App() {
  const methods = useForm({
    defaultValues: defaultFormValues,
    resolver: yupResolver(schema),
  });
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = methods;
  const [gender, firstName, lastName] = watch([
    "gender",
    "firstName",
    "lastName",
  ]);

  const onSubmit = (values: any) => {
    console.log(values, "values");
  };

  useEffect(() => {
    setValue("fullName", firstName + " " + lastName);
  }, [firstName, lastName, setValue]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Student Info</h1>
        <div>
          <label>First name:</label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <input {...field} />}
          />
          {!!errors.firstName && (
            <span style={{ color: "red" }}>{errors.firstName?.message}</span>
          )}
        </div>
        <div>
          <label>Last name:</label>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label>Full name:</label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => <input {...field} disabled />}
          />
        </div>
        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label>Gender</label>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange } }) => {
              return (
                <>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => onChange(e.target.value)}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => onChange(e.target.value)}
                    />
                    Female
                  </label>
                </>
              );
            }}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              reset(defaultFormValues);
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
