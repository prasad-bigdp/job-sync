import { TextField, InputAdornment } from '@mui/material';


function FormField({ id, label, icon, formik, type = 'text' }) {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label} {formik.values[id] === "" && <span style={{ color: 'red' }}>*</span>}
      </label>
      <TextField
        id={id}
        name={id}
        type={type}
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[id] && Boolean(formik.errors[id])}
        helperText={formik.touched[id] && formik.errors[id]}
        InputProps={{
          startAdornment: icon && <InputAdornment position="start">{icon}</InputAdornment>
        }}
      />
    </>
  );
}

export default FormField;
