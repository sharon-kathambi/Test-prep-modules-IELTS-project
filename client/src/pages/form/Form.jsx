import { Box, Button, TextField} from "@mui/material";
import { Formik } from 'formik'
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/header/Header";

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const handleFormSubmit = (values) => {
      console.log(values);
    };
  
    return (
      <Box m="20px">
        <Header title="CREATE NEW STUDENT" subtitle="Create a New Student Profile" />
  
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={!!touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Qualification"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.qualification}
                  name="qualification"
                  error={!!touched.qualification && !!errors.qualification}
                  helperText={touched.qualification && errors.qualification}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gender}
                  name="gender"
                  error={!!touched.gender && !!errors.gender}
                  helperText={touched.gender && errors.gender}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Date of Birth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.DOB}
                  name="DOB"
                  error={!!touched.DOB && !!errors.DOB}
                  helperText={touched.DOB && errors.DOB}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Purpose of Test"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.purpose}
                  name="purpose"
                  error={!!touched.purpose && !!errors.purpose}
                  helperText={touched.purpose && errors.purpose}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Passport Availability"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.passportAvailability}
                  name="passportAvailability"
                  error={!!touched.passportAvailability && !!errors.passportAvailability}
                  helperText={touched.passportAvailability && errors.passportAvailability}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Target score"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.targetScore}
                  name="targetScore"
                  error={!!touched.targetScore && !!errors.targetScore}
                  helperText={touched.targetScore && errors.targetScore}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Target Country"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.targetCountry}
                  name="targetCountry"
                  error={!!touched.targetScore && !!errors.targetScore}
                  helperText={touched.targetScore && errors.targetScore}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="English Exam Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.targetScore}
                  name="targetScore"
                  error={!!touched.targetScore && !!errors.targetScore}
                  helperText={touched.targetScore && errors.targetScore}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="English Proficiency"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.targetScore}
                  name="targetScore"
                  error={!!touched.targetScore && !!errors.targetScore}
                  helperText={touched.targetScore && errors.targetScore}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Course Registering For..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.targetScore}
                  name="targetScore"
                  error={!!touched.targetScore && !!errors.targetScore}
                  helperText={touched.targetScore && errors.targetScore}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add New Student
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    );
  };
  
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  
  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  
  export default Form;
