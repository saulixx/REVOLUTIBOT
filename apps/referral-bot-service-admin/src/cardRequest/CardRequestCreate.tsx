import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
} from "react-admin";

export const CardRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
