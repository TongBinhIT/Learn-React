import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-control/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
      title: yup.string().required("cuon non"),
    });

  const form = useForm({
    defaultValue: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    // console.log("todo", value);
    const {onSubmit} = props;
    if(onSubmit){
      onSubmit(value);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
